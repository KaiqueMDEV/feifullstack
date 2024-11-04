//módulo http
var http = require('http')
//módulo express
var express = require('express')
//pacote colors
var colors = require('colors')

//variavel para acessar os metodos
var app = express();


// define onde estará o conteúdo estático
// Usa __dirname para garantir o caminho correto
app.use(express.static(__dirname + '/public'));

//cria o servidor
var server = http.createServer(app);

//define o numero da porta que o servidor ouvirá
server.listen(80);

//mensagem exibida no console para debug
console.log("Servidor Rodando..." .rainbow);

