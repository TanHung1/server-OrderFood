const Product = require('../models/Product');
const Staff = require('../models/Staff');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {   
   //[post] /api/admin/create-product
    createProduct = async (req, res, next) => {
        try {

            const
                {
                    nameprod,
                    description,
                    price,
                    image,
                    category,
                    slug
                } = req.body

            const product = await new Product(
                {
                    nameprod,
                    description,
                    price,
                    image,
                    category,
                }
            );
            product
                .save()
            res.json(product);
        }
        catch (error) {
            console.log(error);
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
            .catch((next));

        // Pizza.find({})
        //     .then(pizzas => 
        //         res.render('admin/stored-pizzas', {
        //             pizzas: mutipleMongooseToObject(pizzas)
        //         }),
        //     )
        //     .catch((next));

        // Pizza.countDocumentsDeleted() 
        //     .then((deleteCount) => {
        //         console.log(deleteCount);
        //     })
        //     .catch(() => {});
    }

     // [post] /api/admin/create-staff
    createStaff = async (req, res, next) => {
        try {
            const
                {
                    namestaff,
                    role,
                    numberphone,
                    cccd,
                    pass,  
                    slug                  
                } = req.body

            const staff = await new Staff(
                {
                    namestaff,
                    role,
                    numberphone,
                    cccd,
                    pass, 
                }
            );
            staff
                .save()
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
                })
            )
            .catch((next));
    }

    // [get] /api/admin/trash-products
    trashProducts(req, res, next)
    {
        Product.findDeleted({})
        .then(products => 
            res.json( {
            products: mutipleMongooseToObject(products)
        }))
        .catch(next);
    }

    // [get] /api/admin/trash-staff
    trashStaffs(req, res, next)
    {
        Staff.findDeleted({})
        .then(staffs => 
            res.json( {
            staffs: mutipleMongooseToObject(staffs)
        }))
        .catch(next);
    }
    
    // [put] api/admim/:id/update-staff
    updateStaff = (req, res, next) => {
        Staff.updateOne({ _id: req.params.id }, req.body)
            .then(update => res.status(res.status(201).send(update)))
            .catch((err) => (
                console.log(err),
                res.status(res.status(500).send(err)

                )))
    }
    
    // [put] api/admim/:id/update-product
    updateProduct = (req, res, next) => {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(update => res.status(res.status(201).send(update)))
            .catch((err) => (
                console.log(err),
                res.status(res.status(500).send(err)

                )))
    }

    // [delete] /admim/:id/delete-product
    deleteProduct(req, res, next)
    {
        Product.delete({ _id: req.params.id })  
                res.status(200).send("oke")     
    }

    // [delete] /admim/:id/delete-staff
    deleteStaff(req, res, next)
    {
        Staff.delete({ _id: req.params.id })            
    }

    // [delete] /admim/:id/forcedelete-product
    forcedeleteProduct(req, res, next)
    {
        Product.deleteOne({ _id: req.params.id })
            .then(res.status(200).json({
                message: 'Xóa thành công'
            }))
            .catch((err) => (
                console.log(err),
                res.status(res.status(500).send(err))
                )
            
    )};

    // [patch] /admim/:id/restore
    restore(req, res, next)
    {

        Pizza.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // // [post] /admim/handle-form-actions
    // handleFormActions(req, res, next) {
    //     switch (req.body.action) {
    //         case 'delete':
    //             Pizza.delete({ _id: {$in: req.body.pizzasId } })
    //                 .then(() => res.redirect('back'))
    //                 .catch(next);
    //             break;

    //         default:
    //             res.json({ message: ' khong hop le' });
    //     }
    // }

    // handleFormTrashActions(req, res, next) {
    //     switch (req.body.action) {
    //         case 'delete':
    //             Pizza.deleteOne({ _id: { $in: req.body.pizzasId } })
    //                 .then(() => res.redirect('back'))
    //                 .catch(next);
    //             break;

    //         case 'restore':
    //             Pizza.restore({ _id: { $in: req.body.pizzasId } })
    //                 .then(() => res.redirect('back'))
    //                 .catch(next);
    //             break;
    //         default:
    //             res.json({ message: ' khong hop le' });
    //     }
    // }
}

module.exports = new AdminController;