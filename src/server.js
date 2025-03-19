const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pautaRoutes = require('./routes/pautaRoutes');
const votoRoutes = require('./routes/votoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/pautas', pautaRoutes);
app.use('/votos', votoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

