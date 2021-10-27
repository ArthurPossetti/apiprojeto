'use strict'

//console.log('Teste');
const app = require('../src/app')
const http = require('http');
const { normalize } = require('path');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port); 

const server=http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('Rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){ 
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(e){
    'Erro:' + e;
}
function onListening(e){
    'Pronto';
}