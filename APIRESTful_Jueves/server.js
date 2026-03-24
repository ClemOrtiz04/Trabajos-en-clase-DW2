import express from 'express'
import bodyParser from 'body-parser'
import { Curso } from './db.js'

const port = 3000

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Servicio iniciado:', port)
})

app.get('/cursos', async (req, res) => {
    const data = await Curso.findAll(); // regresar todos los objetos (registros) de cursos
    res.send(data);
})

app.get('/cursos/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Curso.findByPk(id); // regresar un objeto (registro) por llave primaria
    if (data) {
        res.send(data);
    } else {
        res.status(404).send('No encontrado')
    }
})

app.post('/cursos', async (req, res) => {
    const body = req.body;
    const data = await Curso.create(body); // crear un objeto (registro) de cursos
    res.send(data);
})

app.put('/cursos/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await Curso.update(
        body,
        {
            where: {
                id
            }
        }
    ); // actualizr un objeto (registro) de cursos
    res.send(data);
})

app.delete('/cursos/:id', async (req, res) => {
     const { id } = req.params;
     const data = await Curso.destroy({
        where: {
            id,
        },
    }); // eliminar un objeto (registro) de cursos
    res.send(data)
})