'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//carregar as rotas
const indexRoute = require('./routes/index-route');
const clienteRoute = require('./routes/cliente-route');


app.use('/', indexRoute);
app.use('/cliente', clienteRoute);

//teste
module.exports = app;
