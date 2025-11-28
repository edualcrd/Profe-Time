const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas:
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(3000, () => {
  console.log("Backend corriendo en http://localhost:3000");
});
