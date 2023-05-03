const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Admin = new Schema(
    {
        nameadmin: { type: String },
        phonenumber: { type: String},
        password: { type: String},
        admin: {
            type:Boolean,
            default: false,
        }

    },
    // __v
    { 
        versionKey: false ,
        collection: "admins"
    }
);
Admin.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('admins', Admin);