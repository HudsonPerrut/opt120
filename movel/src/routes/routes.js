const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const AtvController = require('../controllers/AtvController')
const UserController = require('../controllers/UserController')
const UserAtvController = require('../controllers/UserAtvController')

router.post('/novaAtv', AtvController.novaAtividade)
router.get('/atividades', AtvController.listarAtividades)
router.get('/atividade/:id', AtvController.listarAtividade)

router.post('/novoUser', UserController.novoUsuario)
router.get('/usuarios', UserController.listarUsuarios)
router.get('/usuario/:id', UserController.listarUsuario)

router.post('/novaEntrega', UserAtvController.novaEntrega)
router.get('/entregas', UserAtvController.listarEntregas)
router.get('/entrega/:usuario_id/:atividade_id', UserAtvController.listarEntrega)

module.exports = router
