const dotenv = require('dotenv').config();

const development = {
    database: dotenv.parsed.DB_NAME,
    username: dotenv.parsed.DB_USERNAME,
    password: dotenv.parsed.DB_PASSWORD,
    dialect: "sqlite",
    storage: './sqlite-dev.db',

};

const test = {
    database: dotenv.parsed.DB_NAME,
    username: dotenv.parsed.DB_USERNAME,
    password: dotenv.parsed.DB_PASSWORD,
    dialect: "sqlite",
    storage: './sqlite-test.db',
    logging: true
};

const production = {
    database: dotenv.parsed.DB_NAME,
    username: dotenv.parsed.DB_USERNAME,
    password: dotenv.parsed.DB_PASSWORD,
    dialect: "sqlite",
    storage: './sqlite-prod.db',
};

module.exports = {
    development,
    test,
    production
}
