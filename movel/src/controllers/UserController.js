const database = require('../database/connection')

class UserController {
    novoUsuario(request, response){
        const {id,nome,email,senha} = request.body

        console.log(id,nome,email,senha)

        database.insert({id,nome,email,senha}).table("usuario").then(data=>{
            console.log(data)
            response.json({message:"Usuário Criado com Sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUsuarios(request, response){
        database.select("*").table("usuario").then(usuarios=>{
            console.log(usuarios)
            response.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUsuario(request, response){
        const id = request.params.id

        database.select("*").table("usuario").where({id:id}).then(usuarios=>{
            response.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new UserController()