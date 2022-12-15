import express from 'express';

const app = express();
const port = 3100;

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:3100`)
  });