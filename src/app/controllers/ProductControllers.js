const Product = require('../models/Product');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ProductController {
    show(req, res, next) {
        // [get] /product/
        Product.find(res.params.category)
            .then(products => {
                res.status(200).json({
                    products: mutipleMongooseToObject(products),
                });
            })
    }

    detail(req, res, next) {
        //[get] /product/:slug
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.status(200).json({
                    product: mongooesToObject(product),
                });
            })
    }

}

module.exports = new ProductController;