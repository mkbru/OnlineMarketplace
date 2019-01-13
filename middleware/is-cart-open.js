const mongoose = require('mongoose');
const Cart = require('../models/cart');

module.exports = async (req, res, next) => {

    let err;

    const cart = await Cart.findById(req.params.id);

    if(cart.status !== 'OPEN'){
        err = { status: 200, message: 'Cart has already been CLOSED or CANCELLED'};
        res.json(err);
    }else{
        next();
    }

};