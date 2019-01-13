const mongoose = require('mongoose');
const Cart = require('../models/cart');

module.exports = async (req, res, next) => {

    let err;

    const cart = await Cart.findById(req.params.id);

    if(cart.status !== 'COMPLETE'){
        err = { status: 200, message: 'Cart needs to be closed before deletion'};
        res.json(err);
    }else{
        next();
    }

};