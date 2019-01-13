const mongoose = require('mongoose');
const Cart = require('../models/cart');


module.exports = async (req, res, next) => {

    let err;

    const cart = await Cart.findById(req.params.id);

    //CART STATES = OPEN,CLOSED,CANCELLED

    if(cart.status === 'COMPLETE'){
        err = { status: 200, message: 'Cart is already closed.'}
        res.json(err);
    }else{
        next();
    }

};