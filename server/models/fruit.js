const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
    "name": String,
    "imageUrl": String,
    "price": String
});

module.exports = mongoose.model('fruit', fruitSchema, 'fruits');