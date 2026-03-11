const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // obtener el json del body

app.listen(port, () => {
    console.log('Servicio iniciando en el puerto: ', port)
})


// > http://localhost:3000
app.get('/', (req, res) => {
    res.send('Ruta principal /')
})

// > http://localhost:3000/cp/80050    Metodo Get
app.get('/cp/:codigo', (req, res) => {
    console.log(req.params)
    const { codigo } = req.params // extraer codigo del json
    if (codigo.length != 5) {
        res.status(400).json({ mensaje: 'Codigo postal incorrecto'})
    } else {
        res.send('Consulta de codigo postal.')
    }
})

// > http://localhost:3000/cp?codigo=80050   Metodo Get por Parametro

app.get('/cp/', (req, res) => {
    console.log(req.body)
    const { codigo } = req.body // extraer codigo del json
    if (!codigo || codigo.length != 5) {
        res.status(400).json({ mensaje: 'Codigo postal incorrecto'})
    } else {
        res.send('Consulta de codigo postal.')
    }
})

// > http://localhost:3000/cp Metodo post
/* En el body modo raw
 {
    "codigo": "80050"
 }
*/
app.post('/cp/', (req, res) => {
    console.log(req.body)
    const { codigo } = req.body // extraer codigo del json
    if (!codigo || codigo.length != 5) {
        res.status(400).json({ mensaje: 'Codigo postal incorrecto'})
    } else {
        res.send('Consulta de codigo postal.')
    }
})