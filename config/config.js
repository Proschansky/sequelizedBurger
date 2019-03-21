require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": 3306,
    "dialect": "mysql",

  },
  "test": {
      "username": process.env.USER,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE,
      "host": process.env.HOST,
      "port": 3306,
      "dialect": "mysql",
  
    },
"production": {
  "dialect": "mysql",
  "use_env_variable": process.env.JAWSDB_URL,
}
}
