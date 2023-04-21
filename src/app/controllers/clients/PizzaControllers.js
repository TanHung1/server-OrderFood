const Pizza = require('../models/Pizza');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class PizzaController {
    index(req, res, next) {
        // [get] /pizza/
        Pizza.find({})
            .then(pizzas => {
                res.render('pizzas/index', {
                    pizzas: mutipleMongooseToObject(pizzas),
                })
            })
            .catch(next);
    }

    detail(req, res, next) {
        //[get] /pizzas/:slug
        Pizza.findOne({ slug: req.params.slug })
            .then(pizza => {
                res.render('pizzas/detail', { pizza: mongooesToObject(pizza) });
            })
            .catch(next);
    }

    // //    [GET] /pizzas/create
    // create(req, res, next) {

    //     res.render('admin/create')

    // }

    // //[POST] /pizzas/store
    // store(req, res, next) {
    //     const pizza = new Pizza(req.body);
    //     pizza.save()        
    //         .then(() => 
    //         res.redirect('/admin/create'), 
            
    //         )
    //         .catch(error => {

    //         });
        
    // }
}

module.exports = new PizzaController;