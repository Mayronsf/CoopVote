const express = require('express');
const router = express.Router();
const pautaController = require('../controllers/pautaController');

router.post('/', pautaController.criarPauta);
router.get('/', pautaController.listarPautas);

module.exports = router;