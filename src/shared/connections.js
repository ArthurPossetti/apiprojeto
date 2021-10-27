const mysql = require('mysql');

exports.databaseCredentials = {
    host: "localhost",
    database: "cliente",
    user: "root",
    password: "dale1234",
    dialect: "mysql"
};
//Conectando no banco de dados
const { Sequelize, Model, DataTypes } = require('sequelize');
exports.sequelize = new Sequelize(
    exports.databaseCredentials.database,
    exports.databaseCredentials.user,
    exports.databaseCredentials.password,
    {
        host: exports.databaseCredentials.host,
        dialect: exports.databaseCredentials.dialect
    }
);

exports.Usuario = require('../models/cliente').init(exports.sequelize, Sequelize);
