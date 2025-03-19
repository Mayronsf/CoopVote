const db = require('../database');

class Voto {
    static votar(cpf, voto, pautaId, callback) {
        const sql = 'INSERT INTO votos (cpf, voto, pauta_id) VALUES (?, ?, ?)';
        db.query(sql, [cpf, voto, pautaId], callback);
    }

    static verificarVoto(cpf, pautaId, callback) {
        const sql = 'SELECT * FROM votos WHERE cpf = ? AND pauta_id = ?';
        db.query(sql, [cpf, pautaId], callback);
    }
}

module.exports = Voto;