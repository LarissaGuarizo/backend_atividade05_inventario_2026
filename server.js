const express = require("express")
const itens = require("./dados.json")

const rotaInicial = (req, res) => {
    res.json("API respondendo")
}

//Configurações do servidor
const app = express()
app.use(express.json())
const porta = 3000

const mostrarItens = (req, res) => {
    res.send(itens)
}

const consultarItens = (req, res) => {
    if (req.body) {
        res.send("Paciente recebido, em análise")
        pacientes.push(req.body)
    } else {
        res.send("404 Not Found")
    }
}


app.get('/', mostrarItens)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})

