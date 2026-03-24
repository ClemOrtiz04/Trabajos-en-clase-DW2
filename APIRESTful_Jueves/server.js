import express from 'express'
import bodyParser from 'body-parser'
import { Venta } from './db.js'

const port = 3000

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Servicio iniciado:', port)
})

app.get('/ventas', async (req, res) => {
    const data = await Venta.findAll(); // regresar todos los objetos (registros) de ventas
    res.send(data);
})

app.get('/ventas/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Venta.findByPk(id); // regresar un objeto (registro) por llave primaria
    if (data) {
        res.send(data);
    } else {
        res.status(404).send('No encontrado')
    }
})

app.post('/ventas', async (req, res) => {
    const body = req.body;
    const data = await Venta.create(body); // crear un objeto (registro) de ventas
    res.send(data);
})

app.put('/ventas/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await Venta.update(
        body,
        {
            where: {
                id
            }
        }
    ); // actualizr un objeto (registro) de ventas
    res.send(data);
})

app.delete('/ventas/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Venta.destroy({
        where: {
            id,
        },
    }); // eliminar un objeto (registro) de ventas
    res.send(data)
})