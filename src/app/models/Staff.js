const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Staff = new Schema(
    {
        namestaff: { type: String },
        role: { type: String },
        numberphone: { type: String},
        citizenid: { type: String},
        password: { type: String},
        admin: {
            Boolean,
            default: false,
        }

    },
    // __v
    { 
        versionKey: false ,
        collection: "staffs"
    }
);
Staff.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('staffs', Staff);