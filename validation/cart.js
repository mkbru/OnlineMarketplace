const Joi = require('joi');

module.exports = {
    body: {
        cart: Joi.string().required(),
        products: Joi.array().items(
            Joi.object({
                id: Joi.string().required(),
                quantity: Joi.number().required()
            })
        )
    }
};