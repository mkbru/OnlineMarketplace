const mongoose = require('mongoose');
const async = require("async");

const Cart = require('../models/cart');
const Product = require('../models/product');

exports.cart_create = (req, res, next) => {

    const id = {_id: mongoose.Types.ObjectId()};

    Cart.create(id)
        .then(data => {
            res.status(200).json({
                message: 'New cart created',
                data: data
            });
        })
        .catch(err => console.log(err));

};

exports.cart_add_product = async (req, res, next) => {

    const id = {_id: req.body.cart};
    const update = {$addToSet: {products: req.body.products}};

    await Cart.findOneAndUpdate(id, update, async err => {
        if (err) throw next(err);

        const conditions = {_id: req.body.products[0].id};
        const update = {$inc: {inventory_count: -req.body.products[0].quantity}};

        await Product.findByIdAndUpdate(conditions, update);

    }).then(err => {
        return res.status(200).json({
            message: 'Added product to cart',
            user: 'user',
            data: {'Product': req.body.products}
        });
    });

};

exports.cart_checkout = async (req, res) => {

    const id = {_id: req.params.id};
    const update = {$set: {status: 'COMPLETE'}};

    Cart.findOneAndUpdate(id, update, (err, cart) => {
        async.eachSeries(cart.products, (obj, done) => {

        }, err => {
            if (err) return next(err);
            return res.status(200).json({
                message: 'Cart checkout complete.',
                user: '',
                data: {'Cart Id': cart.id}
            });

        });
    }, err => {
    });
};

exports.cart_cancel_checkout = (req, res, next) => {

    const id = {_id: req.params.id};
    const update = {$set: {status: 'CANCELLED'}};

    Cart.findOneAndUpdate(id, update, (err, cart) => {
        async.eachSeries(cart.products, (obj, done) => {
            const conditions = {_id: obj.id};
            const update = {$inc: {inventory_count: obj.quantity}};

            Product.findOneAndUpdate(conditions, update, done);

        }, err => {
            if (err) return next(err);
            return res.status(200).json({
                message: 'Cart has been cancelled.',
                user: '',
                data: {'Cart Id': cart._id}
            });

        });
    }, err => {
    });

};

exports.cart_details = (req, res, next) => {

    const id = req.params.id;

    Cart.findById(id)
        .populate('products.id')
        .exec((err, cart) => {
            if (err) return next(err);

            cart.total = cart.products.map(c => {
                return c.quantity * c.id.price;
            }).reduce((a, b) => a + b, 0);

            res.status(200).json({
                message: 'Get Cart by ID',
                data: cart
            });
        });

};

exports.carts_details = (req, res) => {

    Cart.find({})
        .populate('products.id')
        .exec((err, carts) => {
            if (err) return next(err);

            for (let c in carts) {
                carts[c].total = carts[c].products.map(x => {
                    return x.quantity * x.id.price;
                }).reduce((a, b) => a + b, 0);
            }

            res.status(200).json({
                message: 'Get all carts',
                data: {carts: carts}
            });
        });

};

exports.cart_update = (req, res, next) => {

    const id = req.params.id;
    const update = {$set: {products: req.body.products}};

    Cart.findOneAndUpdate(id, update, (err, data) => {
        res.status(200).json({
            message: 'Update Cart by ID',
            user: '',
            data: {'Cart Id': data._id}
        });
    });

};

exports.cart_delete = (req, res, next) => {

    const id = req.params.id;

    Cart.findByIdAndRemove(id, (err, data) => {
        if (err) return next(err);
    }).then(data => {
        res.status(200).json({
            message: 'Delete Cart by ID',
            user: '',
            data: {'Cart Id': req.params.id}
        });
    });

};


