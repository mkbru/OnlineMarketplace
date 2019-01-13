const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

router.post('/signup', user_controller.user_signup);

router.post('/signin', user_controller.user_signin);

module.exports = router;