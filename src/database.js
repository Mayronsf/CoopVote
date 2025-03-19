const mysql = require('mysql2');
// require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mjsf",
    database: "votacao"
  });



console.log(process.env.DB_HOST)

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;