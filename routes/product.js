const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const error = require('../middleware/error');
const validateObject = require('../middleware/validate-object');

const product_controller = require('../controllers/product');

router.post('/', product_controller.product_create);

router.get('/available', product_controller.in_stock_only_products_details);

router.get('/', [error,validateObject] ,product_controller.products_details);

router.get('/:id',[error], product_controller.product_details);

router.put('/:id',[error,validateObject], product_controller.product_update);

router.delete('/:id',[error,validateObject], product_controller.product_delete);

module.exports = router;