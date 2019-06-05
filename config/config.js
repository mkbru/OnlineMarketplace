module.exports = {
    app: {
        port: process.env.PORT,
        JWT_KEY: process.env.JWT_KEY
    },
    db: {
        mongoDevURL: process.env.MONGO_DEV_URL,
        mongoTestUrl: process.env.MONGO_TEST_URL
    }
};
