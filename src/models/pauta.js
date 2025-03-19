const db = require('../database');

class Pauta {
    static criarPauta(descricao, dataAbertura, dataFechamento, callback) {
        const sql = 'INSERT INTO pautas (descricao, data_abertura, data_fechamento) VALUES (?, ?, ?)';
        db.query(sql, [descricao, dataAbertura, dataFechamento], callback);
    }

    static listarPautas(callback) {
        const sql = 'SELECT * FROM pautas';
        db.query(sql, callback);
    }
}

module.exports = Pauta;