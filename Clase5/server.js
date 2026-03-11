const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') // utilizar el json del body
const fs = require('fs') //Para utilizar el sistema de archivos FileSystem

app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Servicio iniciando en el puerto: ' + port)
})

app.post('/datos', (req, res) => {
    const { body } = req; // id, nombre telefono
    const bodyText = JSON.stringify(body); // convertir JSON a string
    //const body = req.body lo mismo que la linea pasada
    fs.writeFileSync('datos.json', bodyText);
    res.send(body);
})

app.get('/datos', (req, res) => {
    const contenido = fs.readFileSync('datos.json'); // leer archivo json
    const contenidoJson = JSON.parse(contenido); //convertir txt a json
    res.send(contenidoJson);
})