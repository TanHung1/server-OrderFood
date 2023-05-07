const Product = require('../models/Product');
const User = require('../models/Account');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
//-----------PRODUCT----------    
    //[post] /api/admin/create-product
    createProduct = async (req, res) => {
        try {
            const {
                nameprod,
                image,
                category,
                description,
                price,
            } = req.body;

            const product = await new Product(
                nameprod,
                image,
                category,
                description,
                price
            );
            product.save();
            res.status(200).send(product);

        }
        catch (err) {
            res.status(500).json(err);
        }
    };

    // [get] /api/admin/stored-product
    storedProducts(req, res, next) {
        Promise.all([Product.find({category: req.params.category}, req.body), Product.countDocumentsDeleted()])
            .then(([products, deleteCount]) =>
                res.json({
                    deleteCount,
                    products: mutipleMongooseToObject(products),
                })
            )
            .catch((err) =>
                res.status(401).json(err),
            );
    };

    // [get] /api/admin/trash-products
    trashProducts(req, res) {
        Product.findDeleted({})
            .then(products =>
                res.json({
                    products: mutipleMongooseToObject(products)
                }))
            .catch((err) =>
                res.status(401).json(err),
            );
    };

    // [put] api/admim/:id/update-product
    updateProduct(req, res) {
        Product.updateOne({ _id: req.params.id })
            .then(() =>
                res.status(200).json(Product)
            )
            .catch((err) => (
                res.status(500).json(err)
            ))
    };

    // [delete] /admim/:id/delete-staff
    deleteProduct(req, res) {
        Product.delete({ _id: req.params.id })
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                res.status(500).json(err)
            ))
    };

    // [patch] /admim/:id/restoreProduct
    restoreProduct(req, res, next) {

        Product.restore({ _id: req.params.id })
            .then(() =>
                res.status(200).send('oke'))
            .catch((err) =>
                res.status(500).json(err),
            );
    };

    // [delete] api/admin/:id/forcedeletProduct
    forcedeleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(
                res.status(200).send('oke')
            )
            .catch((err) => 
                res.status(500).json(err),
            );
    };

//-------------------------------STAFF------------------    
    // [post] /api/admin/create-staff
    createStaff = async (req, res, next) => {
        try {
           const {
                username,
                phonenumber,
                password,
                role
           } = req.body;

           const newStaff = await new User(
            username,
            phonenumber,
            password,
            role
           )
           newStaff.save();
            res.status(200).json(newStaff);
        }
        catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    };

    // [get] /api/admin/stored-staff
    storedStaffs(req, res, next) {
        Promise.all([User.find({}), Staff.countDocumentsDeleted()])
            .then(([staffs, deleteCount]) =>
                res.json({
                    deleteCount,
                    staffs: mutipleMongooseToObject(staffs),
                }),
            )
            .catch((err) =>
                res.status(401).json(err),
            );
    };

    // [get] /api/admin/trash-staff
    trashStaffs(req, res) {
        Staff.findDeleted({})
            .then(staffs =>
                res.json({
                    staffs: mutipleMongooseToObject(staffs)
                }))
            .catch((err) =>
                res.status(401).json(err),
            );
    };

    // [put] api/admim/:id/update-staff
    updateStaff(req, res) {
        Staff.updateOne({ _id: req.params.id }, req.body)
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).json(err)
            ))
    };

    // [delete] /admim/:id/delete-staff
    deleteStaff(req, res, next) {
        Staff.delete({ _id: req.params.id })
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).json(err)
            ))
    };
    //[patch] /api/admin/:id/restore-staff
    restoreStaff(req, res, next) {

        Staff.restore({ _id: req.params.id })
            .then(() =>
                res.status(200).send('oke'))
            .catch((err) => (
                res.status(500).json(err)
            ))
    };

    // [delete] api/admin/:id/forcedelet-staff
    forcedeleteStaff(req, res, next) {
        Staff.deleteOne({ _id: req.params.id })
            .then(
                res.status(200).send('oke')
            )
            .catch((err) => (
                console.log(err),
                res.status(500).json(err)
            ))
    };

//---------CUSTOMER-----
    //[get] /api/admin/stored-customers/
    storedCustomers = async(req, res) => {
        Promise.all([Customer.find({}), Customer.countDocumentsDeleted()])
            .then(([customers, deleteCount]) =>
                res.json({
                    deleteCount,
                    customers: mutipleMongooseToObject(customers),
                }),
            )
            .catch((err) =>
                res.status(401).json(err),
            );        
    };

    // [] api/admin/trash-customers/
    trashCustomer(req, res){
        Customer.findDeleted({})
            .then(customers =>
                res.json({
                    customers: mutipleMongooseToObject(customers)
                }))
            .catch((err) =>
                res.status(500).json(err)
            )    
    };

    // [] api/admin/:id/delete-customers/
    deleteCustomer(req, res) {
        Customer.delete({_id: req.params.id})
            .then(() =>
                res.status(200).send('oke')
            )
            .catch((err)=>
                res.status(500).json(err)
            )
    };

    // [] api/admin/restore-customers/
    restoreCustomer(res, req){
        Customer.restore({_id: req.params.id})
            .then(() => 
                res.status(200).send('oke')
            )
            .catch((err) =>
                res.status(500).json(err)
            )
    };

    // [] api/admin/forcedelete-customers/
    forcedeleteCustomer(req, res){
        Customer.deleteOne({_id:req.params.id})
            .then(() => 
                res.status(200).send('oke')
            )
            .catch((err) => 
                res.status(500).json(err)
            )
    };

}

module.exports = new AdminController;