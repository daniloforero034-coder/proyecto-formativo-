const {Sequelize} = require('sequelize');

const db = new Sequelize(
    database = "oviadso",
    username = "root",
    password ="852200769",
    {
    dialect: "mysql",
    host: "localhost",
    port: 3306
    }
);

module.exports = db;


