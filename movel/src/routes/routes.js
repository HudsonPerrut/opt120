const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const AtvController = require('../controllers/AtvController')

router.post('/novaAtv', AtvController.novaAtividade)

module.exports = router
