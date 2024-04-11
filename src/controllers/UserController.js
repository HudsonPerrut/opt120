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

    atualizarUsuario(request, response){
        const id = request.params.id
        const changes = request.body

        console.log(changes)

        database.where({id:id}).update(changes).table("usuario").then(data=>{
            response.json({message:"Usuario atualizado com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerUsuario(request, response){
        const id = request.params.id

        database.where({id:id}).del().table("usuario").then(data=>{
            response.json({message:"Usuario removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new UserController()