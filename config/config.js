require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": 3306,
    "dialect": "mysql",
    "use_env_variable": process.env.JAWS_DB_URL
  },
  "test": {
      "username": process.env.USER,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE,
      "host": process.env.HOST,
      "port": 3306,
      "dialect": "mysql",
      "use_env_variable": process.env.JAWS_DB_URL
    },
"production": {
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "host": process.env.HOST,
  "port": 3306,
  "dialect": "mysql",
  "use_env_variable": process.env.JAWS_DB_URL
}
}
