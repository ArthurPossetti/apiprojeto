'use strict';

const repository = require('../repositories/cliente-repository');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    const codigo = req.params.id
    console.log(codigo)
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) { 
        res.status(400).send(e);
    }
}

exports.post = async(req, res, next) => {
    try {
        if(req.body.USR_EMAIL == ''){
            res.status(400).send({
                message: 'O campo e-mail obrigatório',
            });
        }
        if(req.body.USR_SENHA == ''){
            res.status(400).send({
                message: 'O campo senha é obrigatório',
            });
        }
        else{
            var data = await repository.create({
                USR_EMAIL:   req.body.USR_EMAIL   ,
                USR_SENHA:   md5(req.body.USR_SENHA) 
            });
            res.status(201).send({
                message: 'Inserido com sucesso'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({
            message: 'Falha na inserção',
            data: e
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
         var data = await repository.delete(req.body.USR_ID);
        res.status(201).send({
            message: 'Excluído com sucesso'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha na exclusão',
            data: e
        });
    }
}

exports.update = async(req, res, next) => {
    try {
        if(req.body.USR_EMAIL == ''){
            res.status(400).send({
                message: 'O campo e-mail obrigatório',
            });
        }
        if(req.body.USR_SENHA == ''){
            res.status(400).send({
                message: 'O campo senha é obrigatório',
            });
        }
        else{
            var data = await repository.put(req.body.USR_ID, {
                USR_EMAIL:   req.body.USR_EMAIL,
                USR_SENHA:   md5(req.body.USR_SENHA) 
            });
            res.status(201).send({
                message: 'Editado com sucesso'
            });
        }
    } catch (e) {
        res.status(400).send({
            message: 'Falha na edição',
            data: e
        });
    }
}