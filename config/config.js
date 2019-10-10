module.exports = {
    app: {
        port: process.env.PORT,
        JWT_KEY: process.env.JWT_KEY
    },
    db: {
        accountName: process.env.ACCOUNT_NAME,
        databaseName: process.env.DATABASE_NAME, 
        key: process.env.KEY,
        port: 10255
    }
};
