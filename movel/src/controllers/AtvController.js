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
}

module.exports = new AtvController()