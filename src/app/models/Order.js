const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {

        address: {
            type: mongoose.Schema.ObjectId,
            ref: 'accounts'
        },

        phonenumber: {
            type: mongoose.Schema.ObjectId,
            ref: 'products'
        },

        nameprod: { 
            type: mongoose.Schema.ObjectId,
            ref: 'products' 
        },
        price: { 
            ttype: mongoose.Schema.ObjectId,
            ref: 'products' 
        },
        quantity: { 
            type: Number,
            default: 0,
        },
        image: { 
            type: mongoose.Schema.ObjectId,
            ref: 'products'
        },

        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'users'
        },

        status: {
            type: String,
        },

        patdAt: {
            type: Date
        },

        itemsPrice: {
            type: Number,
            default: 0
        },

        totalPrice: {
            type: Number,
            default: 0,
        },

        deliveredAt: {
            type: Date
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    },

    {
        versionKey: false,
        collection: 'orders',
        timestamps: true,
    }

);

module.exports = mongoose.model('orders', Order);