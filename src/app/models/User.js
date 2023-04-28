const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        nameuser: {type: String},
        numberphone: {type: String},
        email: {type: String},
        pass: {type: String},
        sex: {type: String},
        dob: {type: Date},
        address: {type: String},
    },

    {
        versionKey: false,
        collection: "users"
    }
);

mongoose.plugin(slug);
User.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('Users', User);