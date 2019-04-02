const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const validateObject = require('../middleware/validate-object');

const product_controller = require('../controllers/product');

router.post('/', product_controller.product_create);

router.get('/available', product_controller.in_stock_only_products_details);

router.get('/', [validateObject] ,product_controller.products_details);

router.get('/:id', product_controller.product_details);

router.put('/:id',[validateObject], product_controller.product_update);

router.delete('/:id',[validateObject], product_controller.product_delete);

module.exports = router;