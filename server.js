const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend')));

const port = 3000;

app.get('/bienvenida/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}! Bienvenido a nuestro servidor.`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
