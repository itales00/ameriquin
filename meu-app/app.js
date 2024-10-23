const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1><p>Bem-vindo à minha aplicação web!</p>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1><p>Esta é uma aplicação Node.js com múltiplas rotas.</p>');
});

app.get('/contato', (req, res) => {
    res.send('<h1>Contact2</h1><p>Entre em contato pelo email: contato@meuapp.com</p>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});