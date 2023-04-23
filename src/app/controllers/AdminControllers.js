const Product = require('../models/Product');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {

    //[GET] /api/admin/create
    create(req, res, next) {

        // res.render('admin/create')

    }
    //[post] /api/admin/storeProduct
    storeProduct(req, res, next) {
        Product.findOne({})
            .sort({ _id: 'desc' })
            .then(lastestProduct => {
                req.body._id = lastestProduct._id + 1;
                const product = new Product(req.body);
                product
                    .save()
                    .catch(next);
            })

    }
    // [get] /api/admin/stored-products
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

    // [get] /admin/stored-pizzas
    // trashPizza(req, res, next)
    // {
    //     Pizza.findDeleted({})
    //     .then(pizzas => res.render('admin/trash-pizzas', {
    //         pizzas: mutipleMongooseToObject(pizzas)
    //     }))
    //     .catch(next);
    // }



    // // [get] /admim/:id/edit
    // edit(req, res, next) {
    //     Pizza.findById(req.params.id)
    //         .then(pizza => res.render('admin/edit',{
    //             pizza: mongooesToObject(pizza)
    //         }))
    //         .catch(next);

    // }

    // // [put] /admim/:id
    // update(req, res, next)
    // {
    //     Pizza.updateOne({ _id: req.params.id}, req.body)
    //         .then(() => res.redirect('/admin/stored-pizzas'))
    //         .catch(next);
    // }


    // [delete] /admim/:id
    // delete(req, res, next)
    // {
    //     Pizza.delete({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

    // // [delete] /admim/:id/force
    // forcedelete(req, res, next)
    // {
    //     Pizza.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

    // // [patch] /admim/:id/restore
    // restore(req, res, next)
    // {

    //     Pizza.restore({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

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