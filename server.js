const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
    const { lat, lon } = req.body;
    console.log(`Coordenadas recibidas: Latitud ${lat}, Longitud ${lon}`);
    res.send({ message: 'Coordenadas recibidas' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});