const Product = require('../models/Product');
const Staff = require('../models/Staff');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
    //[post] /api/admin/create-product
    createProduct = async (req, res, next) => {
        try {
            const product = await new Product(req.body);
            product.save()
            res.json(product);
        }
        catch (err) {
            console.log(err);
        }
    }

    // [get] /api/admin/stored-product
    storedProducts(req, res, next) {
        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
            .then(([products, deleteCount]) =>
                res.json({
                    deleteCount,
                    products: mutipleMongooseToObject(products),
                })
            )
            .catch((err) => next(err));
    }

    // [get] /api/admin/trash-products
    trashProducts(req, res, next) {
        Product.findDeleted({})
            .then(products =>
                res.json({
                    products: mutipleMongooseToObject(products)
                }))
            .catch(next);
    }

    // [put] api/admim/:id/update-product
    updateProduct = (req, res, next) => {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() =>
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    }

    // [delete] /admim/:id/delete-staff
    deleteProduct(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    }

    // [patch] /admim/:id/restoreProduct
    restoreProduct(req, res, next) {

        Product.restore({ _id: req.params.id })
            .then(() =>
                res.status(200).send('oke'))
            .catch(next);
    }

    // [delete] api/admin/:id/forcedeletProduct
    forcedeleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(
                res.status(200).send('oke')
            )
            .catch((err) => (
                console.log(err),
                res.status(res.status(500).send(err))
            )

            )
    };

    // [post] /api/admin/create-staff
    createStaff = async (req, res, next) => {
        try {
            const staff = await new Staff(req.body);
            staff.save()
            res.json(staff);
        }
        catch (error) {
            console.log(error);
        }
    }

    // [get] /api/admin/stored-staff
    storedStaffs(req, res, next) {
        Promise.all([Staff.find({}), Staff.countDocumentsDeleted()])
            .then(([staffs, deleteCount]) =>
                res.json({
                    deleteCount,
                    staffs: mutipleMongooseToObject(staffs),
                }),
            )
            .catch((err) => next(err));
    }

    // [get] /api/admin/trash-staff
    trashStaffs(req, res, next) {
        Staff.findDeleted({})
            .then(staffs =>
                res.json({
                    staffs: mutipleMongooseToObject(staffs)
                }))
            .catch(next);
    }

    // [put] api/admim/:id/update-staff
    updateStaff = (req, res, next) => {
        Staff.updateOne({ _id: req.params.id }, req.body)
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    }

    // [delete] /admim/:id/delete-staff
    deleteStaff(req, res, next) {
        Staff.delete({ _id: req.params.id })
            .then(
                res.status(200).send("oke")
            )
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    }
    //[patch] /api/admin/:id/restore-staff
    restoreStaff(req, res, next) {

        Staff.restore({ _id: req.params.id })
            .then(() =>
                res.status(200).send('oke'))
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    }

    // [delete] api/admin/:id/forcedelet-staff
    forcedeleteStaff(req, res, next) {
        Staff.deleteOne({ _id: req.params.id })
            .then(
                res.status(200).send('oke')
            )
            .catch((err) => (
                console.log(err),
                res.status(500).send(err)
            ))
    };
}

module.exports = new AdminController;