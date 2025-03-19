const Voto = require('../models/voto');

exports.votar = (req, res) => {
    const { cpf, voto, pautaId } = req.body;

    Voto.verificarVoto(cpf, pautaId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao verificar voto' });
        }
        if (results.length > 0) {
            return res.status(400).json({ error: 'Você já votou nesta pauta.' });
        }

        Voto.votar(cpf, voto, pautaId, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao registrar voto' });
            }
            res.status(201).json({ message: 'Voto registrado com sucesso!' });
        });
    });
};