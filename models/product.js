const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {type: String, required: true, max: 255},
    price: {type: Number, required: true},
    inventory_count: {type: Number, required: true, min:[0,'item cannot be less than 0']}
});


module.exports = mongoose.model('Product', ProductSchema);