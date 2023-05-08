const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        username: {
            type: String,
            require: true
        },

        phonenumber: {
            type: String,
            require: true,
            unique : true,
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
            default: false
        },

        shipper: {
            type: Boolean,
            default: false
        }
    },

    {
        versionKey: false,
        collection: "accounts",
        timestamps: true,
    }
);

Account.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('accounts', Account);