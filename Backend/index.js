const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "Hola desde el backend (Node + Express)!" });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
