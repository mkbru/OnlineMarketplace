const express = require('express');
const bodyParser = require('body-parser');

const db = require('./database/db');
const config = require('./config/config');

const product = require('./routes/product');
const cart = require('./routes/cart');
const user = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', product);
app.use('/carts', cart);
app.use('/users', user);

app.use('/', (req,res) => {
   res.status(200).json({
      message: "welcome"
   });
});

app.listen(config.app.port, () => console.log('Application listening on 3000'));

module.exports = app;