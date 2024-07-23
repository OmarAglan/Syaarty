require('dotenv').config({ path: `${process.cwd()}/.env` });
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: path.join(__dirname, '..', process.env.DB_NAME),
    host: process.env.DB_HOST,
    dialect: 'sqlite'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'sqlite'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
};
