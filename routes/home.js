let express = require('express');
let router = express.Router();

router.get('/', (req, res) => res.send('Hello World')) // req é tudo oq o client envia pra aplicação / e res responde para o client
router.get('/welcome', (req, res) => res.send('Bem vindo romulera!'));
router.get('/character', (req, res) => res.send('Lista de character'))


router.get('/requests/:name', (req, res) => {
    res.send(req.params.name) //utilizando o objeto params para enviar os meus paratmetros
})

router.post('/body', (req, res) => {
    res.json(req.body);
})
    
module.exports = router;