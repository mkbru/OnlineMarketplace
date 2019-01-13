const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = (req,res,next) => {
    try{
        const decoded = jwt.verify(req.headers.authorization, config.app.JWT_KEY);
        req.userData = decoded;
    }catch(err){
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
    next();
};