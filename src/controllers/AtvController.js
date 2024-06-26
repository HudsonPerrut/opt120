const database = require('../database/connection')

class AtvController {
    novaAtividade(request, response){
        const {id,titulo,descricao,data} = request.body

        console.log(id,titulo,descricao,data)

        database.insert({id,titulo,descricao,data}).table("atividade").then(data=>{
            console.log(data)
            response.json({message:"Atividade Criada com Sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }


    listarAtividades(request, response){
        database.select("*").table("atividade").then(atividades=>{
            console.log(atividades)
            response.json(atividades)
        }).catch(error=>{
            console.log(error)
        })
    } 
    
    listarAtividade(request, response){
        const id = request.params.id

        database.select("*").table("atividade").where({id:id}).then(atividades=>{
            response.json(atividades)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarAtividade(request, response){
        const id = request.params.id
        const changes = request.body

        console.log(changes)

        database.where({id:id}).update(changes).table("atividade").then(data=>{
            response.json({message:"Tarefa atualizada com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerAtividade(request, response){
        const id = request.params.id

        database.where({id:id}).del().table("atividade").then(data=>{
            response.json({message:"Tarefa removida com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new AtvController()