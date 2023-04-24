const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Staff = new Schema(
    {
        // id: { type: Number },
        namestaff: { type: String },
        role: { type: String },
        numberphone: { type: String},
        cccd: { type: String},
        pass: { type: String},
        slug: { type: String, slug: "namestaff", unique: true, slugPaddingSize: 2 }

    },
    // __v
    { 
        versionKey: false ,
        collection: "staffs"
    }
);
mongoose.plugin(slug);


module.exports = mongoose.model('staffs', Staff);