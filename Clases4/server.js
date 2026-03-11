const express = require('express')
app = express()
const port = 3000

app.listen(port, () => {
    console.log('Servicio iniciando en el puerto: ' + port
    )
})

//El :id significa que recibe cualquier valor
app.get('/codigpostal/:id', (req, res) => {
    const { id } = req.params;
    if(id != '80000' && id != '80050' && id != '80179'){
        res.status(404).json({mensaje: 'Codigo postal no encontrado'});
    } else {
        let resultado;
        if(id == '80000'){
            resultado = ['Centro', 'Centro Sinaloa'];
        } else if (id == '80179') {
            resultado = ['Cañadas', 'Lomas del Bosque'];
        } else {
            resultado = ['Valle Alto', 'Villas del Rio', 'Stanza'];
        }
        res.send(resultado)
    }
})