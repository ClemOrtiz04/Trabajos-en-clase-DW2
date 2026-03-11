const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //permitir el body en el request (req) - json

app.listen(port, () => {
    console.log('Servicio iniciando en puerto: ' + port)
})

//rutas
app.get('/', (req, res) => {
    console.log(req.query) //parametros que vienen por qs
    res.send('Bienvenidos a nodejs por get')
})

app.post('/', (req, res) => {
    console.log(req.body) //parametros que vienen por body
    res.send('Bienvenidos a nodejs por post')
})