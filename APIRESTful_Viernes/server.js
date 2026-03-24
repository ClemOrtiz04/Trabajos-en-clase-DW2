import express from 'express'
import bodyParser from 'body-parser'
import { Cliente } from './db.js'

const port = 3000

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Servicio iniciado:', port)
})

app.get('/clientes', async (req, res) => {
    const data = await Cliente.findAll(); // regresar todos los objetos (registros) de clientes
    res.send(data);
})

app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Cliente.findByPk(id); // regresar un objeto (registro) por llave primaria
    if (data) {
        res.send(data);
    } else {
        res.status(404).send('No encontrado')
    }
})

app.post('/clientes', async (req, res) => {
    const body = req.body;
    const data = await Cliente.create(body); // crear un objeto (registro) de clientes
    res.send(data);
})

app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await Cliente.update(
        body,
        {
            where: {
                id
            }
        }
    ); // actualizr un objeto (registro) de clientes
    res.send(data);
})

app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Cliente.destroy({
        where: {
            id,
        },
    }); // eliminar un objeto (registro) de clientes
    res.send(data)
})