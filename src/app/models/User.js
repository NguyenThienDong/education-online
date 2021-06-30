const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true},
    password: { type: String, require: true},
},
{
    timestamps: true,
});

mongoose.plugin(slug);

User.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('User', User);