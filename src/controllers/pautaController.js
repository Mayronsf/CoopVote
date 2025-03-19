const Pauta = require('../models/pauta');

exports.criarPauta = (req, res) => {
    const { descricao, dataAbertura, dataFechamento } = req.body;
    Pauta.criarPauta(descricao, dataAbertura, dataFechamento, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar pauta' });
        }
        res.status(201).json({ id: result.insertId, descricao, dataAbertura, dataFechamento });
    });
};

exports.listarPautas = (req, res) => {
    Pauta.listarPautas((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao listar pautas' });
        }
        res.json(results);
    });
};