const Sequelize = require("sequelize");

module.exports = new Sequelize("bookmydb", "postgres", "hashim", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});
