const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        slug: { type: String, slug: 'name', slugOn: { updateOne: true }, unique: true }
    },
    // __v
    { 
        versionKey: false ,
        _id: false,
    }
);

mongoose.plugin(slug);
// Product.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('Product', Product);