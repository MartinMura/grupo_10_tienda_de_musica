module.exports = {
  "development": {
    "username": "b6f4b858489799",
    "password": "c7ca5ff8",
    "database": "heroku_1596162e78197f5",
    "host": "us-cdbr-east-05.cleardb.net",
    port: process.env.DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
