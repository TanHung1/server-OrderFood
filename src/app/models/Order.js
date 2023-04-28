const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        statusOrder: {type: String},
        typepayments: {type: String},
    },

    {
        versionKey: false,
        collection: 'orders',
        timestamps: true,
    }

);

module.exports = mongoose.model('orders', Order);