const mongoose = require('mongoose');
const Product = require('../models/product');

module.exports = async (req, res, next) => {

    let err;

    const product = await Product.findById(req.body.products[0].id);

    if(product.inventory_count < req.body.products[0].quantity){
        err = { status: 200, message: 'Not enough inventory'}
        res.json(err);
    }else{
        next();
    }

};