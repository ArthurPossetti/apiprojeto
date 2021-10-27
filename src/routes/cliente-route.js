'use strict';

const express = require('express');
const router = express.Router();
var cors = require('cors');
const controller = require('../controllers/cliente-controller');

router.use(cors());

//Busca pelos dados no banco
router.get('/:id', controller.get); 
//insere dados no banco
router.post('/cadastro', controller.post);
//delete dados do banco
router.post('/delete', controller.delete);
//update dados banco
router.post('/update', controller.update);

module.exports = router;   