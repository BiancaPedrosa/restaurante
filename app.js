// app.js para um sistema de reserva simples usando Express e Handlebars
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Importa as rotas da aplicação
const appRoutes = require('./routes');

// Configura o body-parser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve arquivos estáticos de diretórios específicos
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/models', express.static(path.join(__dirname, 'models'))); 

// Configura o mecanismo de template Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Usa as rotas importadas
app.use('/', appRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
