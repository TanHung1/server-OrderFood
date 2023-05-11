const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        shippingInfo: {
            address: {type: String},
            phonenumber: {type: String},            
        },
        orderItems: [
            {
                namerpod: {type: String},
                price: {type: Number},
                quantity: {type: String},
                image: {type: String},
                product: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'products'
                },
            }
        ],

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