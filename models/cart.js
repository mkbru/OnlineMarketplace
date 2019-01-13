const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CART STATES: OPEN,CANCELLED,CLOSED

const CartSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    products: [{
        id : {type: Schema.ObjectId, ref:'Product'},
        quantity: {type: Number, default: 1}
        }],
    total: {type: Number},
    status: {type: String, default: 'OPEN'}
});



module.exports = mongoose.model('Cart', CartSchema);