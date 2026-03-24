import express from 'express';
import bodyParser from 'body-parser';
import { Usuario } from './db.js';
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Servicio iniciando en el puerto: ', port);
})

app.get('/', async (req, res) => {
    const data = await Usuario.findAll(); // obtener todos los registros de la tabla
    res.send(data);
})

app.post('/', async (req, res) => {
    const body = req.body;
    const data = await Usuario.create(body); // insertar registro en la tabla
    res.send(data);
});
