const mongoose = require('mongoose');

module.exports = function(err,req, res, next) {

    console.log('in middleware')
    if (req.params.id && !mongoose.Types.ObjectId.isValid(req.params.id))
        err = { status: 200};
    next(err);
};