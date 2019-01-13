const Joi = require('joi');

module.exports = {
    body: {
        title: Joi.string().required(),
        price: Joi.number().integer().required(),
        inventory_count: Joi.number().integer()
    }
};