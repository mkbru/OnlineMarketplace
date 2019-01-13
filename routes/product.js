const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const validateObject = require('../middleware/validate-object');
const validate = require('express-validation');
const productValidation = require('../validation/product');

const product_controller = require('../controllers/product');

router.post('/',validate(productValidation), product_controller.product_create);

router.get('/available', product_controller.in_stock_only_products_details);

router.get('/', [checkAuth,validateObject] ,product_controller.products_details);

router.get('/:id',[checkAuth], product_controller.product_details);

router.put('/:id',[checkAuth,validateObject], product_controller.product_update);

router.delete('/:id',[checkAuth,validateObject], product_controller.product_delete);

module.exports = router;