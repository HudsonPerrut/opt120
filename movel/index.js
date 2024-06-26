const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(router)

app.listen(3000, ()=>{
    console.log("Aplicação rodando na porta 3000")
})

app.get('/',(request,response)=>{
    response.send("Hello world")
 })