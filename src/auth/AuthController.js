var express = require('express');
//var router = express.Router();
const router = require('./src/routes/routes');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

registrar(request, response){

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const {id,titulo,descricao,data} = request.body

    console.log(id,titulo,descricao,data)

    database.insert({id,titulo,descricao,data}).table("atividade").then(data=>{
        console.log(data)
        response.json({message:"Atividade Criada com Sucesso"})
    }).catch(error=>{
        console.log(error)
    })
}