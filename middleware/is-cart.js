const mongoose = require('mongoose');
const Cart = require('../models/cart');

module.exports = async (req, res, next) => {

    let err;

    const cart = await Cart.findById(req.params.id);

    if(cart === null){
        err = { status: 200, message: 'Cart does not exist'};
        res.json(err);
    }else{
        next();
    }

};