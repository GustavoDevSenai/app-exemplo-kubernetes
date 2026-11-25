const express = require("express")


const app = express()

app.get("/",(req,res)=>{
    res.json({
        app:"App-exemplo-kubernetes",
        ambiente:"dev",
        mensagem:"Rodando no Kubernetes"
    })
})

app.listen(5000,()=>{
    console.log("Aplicacao rodando na porta 50000")
})