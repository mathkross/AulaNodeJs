let express = require('express');
let router = express.Router();

router.get('/', (req, res) => res.send('Client Page'))                                                             
router.get('/welcome', (req, res) => res.send('Bem vindo a client page!'))
router.get('/character', (req, res) => res.send('Lista de character'))
    
module.exports = router;