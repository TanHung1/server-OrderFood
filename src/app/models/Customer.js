const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        username: {
            type: String,
            require: true
        },

        phonenumber: {
            type: String,
            require: true,
            unique : true,
            maxLength: 10,
            minLength: 10,
        },

        email: {
            type: String,
            require: true,
            unique: true,
        },

        password: {
            type: String
        },

        sex: {
            type: String
        },

        dob: {
            type: Date
        },

        address: {
            type: String
        },
        admin: {
            type: Boolean,
            default: false
        },

        staff: {
            type: Boolean,
            default: false,
        }
    },

    {
        versionKey: false,
        collection: "customers",
        timestamps: true,
    }
);

Customer.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('customers', Customer);