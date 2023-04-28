const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Staff = new Schema(
    {
        namestaff: { type: String },
        role: { type: String },
        numberphone: { type: String},
        citizenid: { type: String},
        password: { type: String},

    },
    // __v
    { 
        versionKey: false ,
        collection: "staffs"
    }
);
mongoose.plugin(slug);
Staff.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('staffs', Staff);