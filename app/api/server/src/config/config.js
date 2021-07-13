require('dotenv').config();

module.exports = {
  development: {
    database: 'gifty_backend_development',
    username: process.env.DB_USER,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    database: 'gifty_backend_test',
    username: process.env.DB_USER,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
