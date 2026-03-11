import express from 'express'
const app = express()
const port = 3000

import { sequelize, Clientes } from './db.js'

app.listen(port, () => {
    console.log(' Servicio iniciando: ', port)
})

app.get('/clientes', async (req, res) => {
    const resultado = await Clientes.findAll()
    res.send(resultado);
})