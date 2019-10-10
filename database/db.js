const mongoose = require('mongoose');
const env = require('../config/config')

//connection to cosmos db
const mongoUri = `mongodb://${env.db.accountName}:${env.db.key}@${env.db.accountName}.documents.azure.com:${env.db.port}/${env.db.databaseName}?ssl=true`;
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



