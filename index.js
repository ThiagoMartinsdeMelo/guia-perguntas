const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com o banco de dados!');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// motor de html
app.set('view engine', 'ejs');
app.use(express.static('public'));

// traduz os dados enviados pelo formulario em javascript
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('Formulario recebido!');
});

app.listen(8080, () => {
    console.log('App Rodando');
});



