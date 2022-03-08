// const http = require('http');
//const handle = require('./handle');
//const hello = require('console-log-hello-world');

//let server = http.createServer(handle);

//server.listen(3000, () => {
//    console.log("Servidor rodando na porta 3k")
//}); // meu servidor escute uma determinada porte e execute uma determinada função (1 parametro a porta, segunda a funçao)

//CONFIG DE ROTAS ******
 const express = require('express');
 const app = express();
 const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})                                                               // rota / é raiz  // res = resposta


app.get('/welcome', (req, res) =>{
    res.send('Bem vindo romulera!');
})

app.get('/character', (req, res) =>{
    res.send('Lista de character');
})

 app.listen(port, () => console.log(`App listening http://localhost:${port}`));