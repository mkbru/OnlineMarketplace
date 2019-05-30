const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const validateObject = require('../middleware/validate-object');
const productInStock = require('../middleware/product-in-stock');
const cartOpen = require('../middleware/cart-open');
const isCart = require('../middleware/is-cart');
const isCartClosed = require('../middleware/is-cart-closed');
const isCartOpen = require('../middleware/is-cart-open');


const cart_controller = require('../controllers/cart');

router.post('/', cart_controller.cart_create);

router.post('/addproduct',[productInStock], cart_controller.cart_add_product);

router.post('/checkout/:id',[validateObject,cartOpen], cart_controller.cart_checkout);

router.post('/cancel/:id', [validateObject,isCart,isCartOpen], cart_controller.cart_cancel_checkout);

router.get('/',[checkAuth], cart_controller.carts_details);

router.get('/:id',[validateObject], cart_controller.cart_details);

router.put('/:id', [validateObject,isCart,isCartOpen], cart_controller.cart_update);

router.delete('/:id', [validateObject,isCart,isCartClosed], cart_controller.cart_delete);

module.exports = router;