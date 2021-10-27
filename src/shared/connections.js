const mysql = require('mysql');

exports.databaseCredentials = {
    host: "dbarthur.cbxtqvy4b0ku.sa-east-1.rds.amazonaws.com",
    database: "cliente",
    user: "adminArthur",
    password: "Euamoanana123",
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
