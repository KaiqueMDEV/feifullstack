//módulo http
var http = require('http')
//módulo express
var express = require('express')
//pacote colors
var colors = require('colors')

var bodyParser = require('body-parser');


//variavel para acessar os metodos
var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');



// define onde estará o conteúdo estático
// Usa __dirname para garantir o caminho correto
app.use(express.static(__dirname + '/public'));

//cria o servidor
var server = http.createServer(app);

//define o numero da porta que o servidor ouvirá
server.listen(80);

//mensagem exibida no console para debug
console.log("Servidor Rodando..." .rainbow);

app.get('/', function (requisicao, resposta){
    resposta.redirect('project.html')
 })

 app.get('/inicio', function (requisicao, resposta){
    var nome = requisicao.query.info;
    console.log(nome);
})

app.post('/inicio', function (requisicao, resposta){
    var data = requisicao.body.data;
    console.log(data);

})
    
    app.get('/cadastro',function (requisicao, resposta){
    var nome = requisicao.query.nome;
    var sobrenome = requisicao.query.sobrenome;
    var nascimento = requisicao.query.nascimento;
    var civil = requisicao.query.civil;
    
    resposta.render('resposta_cadastro', {nome, sobrenome, nascimento, civil})
})
    

    

app.set('view engine', 'ejs')
app.set('views', './views')



