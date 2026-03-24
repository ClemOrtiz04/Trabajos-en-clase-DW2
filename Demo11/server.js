import express from 'express';
import bodyParser from 'body-parser';
import { Notificacion } from './db.js';

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Servicio iniciando en el puerto: ', port);
})

app.post('/notificaciones', async (req, res) => {
    const body = req.body;
    const data = await Notificacion.create(body); // create -> Insert
    res.send(data);
})

app.get('/notificaciones', async (req, res) => {
    const data = await Notificacion.findAll(); // findAll -> Select * from
    res.send(data);
})