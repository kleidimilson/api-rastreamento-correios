const express = require('express')
const { rastrearEncomendas } = require('correios-brasil')

const app = express()
app.use(express.json())

app.get('/:code',(req,res) => {
    const code = req.params.code;
    let  codRastreio = [`${code}`] // array de códigos de rastreios
     rastrearEncomendas(codRastreio).then((response)=> {
         res.json(response)
     }) 
})

app.listen(8080)



