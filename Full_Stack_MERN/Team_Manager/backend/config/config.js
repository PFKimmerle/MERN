require('dotenv').config(); // Load environment variables from .env file

const config = {
    port: process.env.PORT || 5000,
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/teammanager'
};

module.exports = config;
