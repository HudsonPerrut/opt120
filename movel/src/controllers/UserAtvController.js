const database = require('../database/connection')

class UserAtvController {
    novaEntrega(request, response){
        const {usuario_id,atividade_id,entrega,nota} = request.body

        console.log(usuario_id,atividade_id,entrega,nota)

        database.insert({usuario_id,atividade_id,entrega,nota}).table("usuario_atividade").then(data=>{
            console.log(data)
            response.json({message:"Atividade Entregue com Sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }


    listarEntregas(request, response){
        database.select("*").table("usuario_atividade").then(entregas=>{
            console.log(entregas)
            response.json(entregas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarEntrega(request, response){
        const usuario_id = request.params.usuario_id
        const atividade_id = request.params.atividade_id

        console.log(usuario_id)
        console.log(atividade_id)

        database.select("*").table("usuario_atividade").where({usuario_id:usuario_id}, {atividade_id:atividade_id} ).then(entregas=>{
            response.json(entregas)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new UserAtvController()