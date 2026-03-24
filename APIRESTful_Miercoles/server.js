import express from 'express'
import bodyParser from 'body-parser'
import { Articulo } from './db.js'

const port = 3000

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Servicio iniciado:', port)
})

app.get('/articulos', async (req, res) => {
    const data = await Articulo.findAll(); // regresar todos los objetos (registros) de articulos
    res.send(data);
})

app.get('/articulos/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Articulo.findByPk(id); // regresar un objeto (registro) por llave primaria
    if (data) {
        res.send(data);
    } else {
        res.status(404).send('No encontrado')
    }
})

app.post('/articulos', async (req, res) => {
    const body = req.body;
    const data = await Articulo.create(body); // crear un objeto (registro) de articulos
    res.send(data);
})

app.put('/articulos/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await Articulo.update(
        body,
        {
            where: {
                id
            }
        }
    ); // actualizr un objeto (registro) de articulos
    res.send(data);
})

app.delete('/articulos/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Articulo.destroy({
        where: {
            id,
        },
    }); // eliminar un objeto (registro) de articulos
    res.send(data)
})