const express = require('express')
const app = express();
const port = 3000

const fs = require('fs')

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})

app.get('/articulos', (req, res) => {
    const contenido = fs.readFileSync('data.json'); //leer el data.json
    const data = JSON.parse(contenido); //string a json
    res.send(data);
})

app.get('/articulos/:codigo', (req, res) => {
    const { codigo } = req.params;
    const contenido = fs.readFileSync('data.json'); //leer el data.json
    const data = JSON.parse(contenido); //string a json
    const encontrado = data.find((art) => art.id == codigo)
    if(!encontrado) {
        res.status(404).json({mensajee: 'No encontrado'})
    } else {
        res.send(encontrado);
    }
})