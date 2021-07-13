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
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
    dialect: 'postgres',
  },
};
