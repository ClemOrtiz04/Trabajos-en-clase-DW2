const express = require('express')
const app = express()
const port = 3000
const path =require('path')

// ruta principal http://localhost:3000
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'inicio.html'))
})

// ruta de informacion http://localhost:3000/information
app.get('/information', (req, res) => {
  res.send('<h1>This is the information section</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
