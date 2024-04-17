const connection = require('../database/connection')
const express = require('express')
/*const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.listen(3000, ()=>{
    console.log("listening to port 3000");
});*/

const router = express.Router()
const AtvController = require('../controllers/AtvController')
const UserController = require('../controllers/UserController')
const UserAtvController = require('../controllers/UserAtvController')

router.post('/novaAtv', AtvController.novaAtividade)
router.get('/atividades', AtvController.listarAtividades)
router.get('/atividade/:id', AtvController.listarAtividade)
router.put('/atualizar/atividade/:id', AtvController.atualizarAtividade)

router.post('/novoUser', UserController.novoUsuario)
router.get('/usuarios', UserController.listarUsuarios)
router.get('/usuario/:id', UserController.listarUsuario)
router.put('/atualizar/usuario/:id', UserController.atualizarUsuario)

router.post('/novaEntrega', UserAtvController.novaEntrega)
router.get('/entregas', UserAtvController.listarEntregas)
router.get('/entrega/:usuario_id/:atividade_id', UserAtvController.listarEntrega)
router.put('/atualizar/entrega/:usuario_id/:atividade_id', UserAtvController.atualizarEntrega)

module.exports = router