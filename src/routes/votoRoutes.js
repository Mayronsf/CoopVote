const express = require('express');
const router = express.Router();
const votoController = require('../controllers/votoController');

router.post('/', votoController.votar);

module.exports = router;