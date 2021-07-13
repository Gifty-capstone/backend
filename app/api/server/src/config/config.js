require('dotenv').config();

module.exports = {
  development: {
    database: 'gifty_backend_development',
    username: process.env.DB_USER,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'gifty_backend_test',
    username: process.env.DB_USER,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: null,
    database: "gifty_backend_production",
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,
    use_env_variable: process.env.DATABASE_URL
  }
};
