const mongoose = require('mongoose');
const config = require('../config/config');

const mongoDB = config.db.mongoDevURL;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));