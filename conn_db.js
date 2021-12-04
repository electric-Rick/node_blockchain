
//var process = require('process');
//const worker = require('worker_threads');
//console.log("(conn_db.js  - thread pool) Meu PID: " + process.pid);
//console.log("(conn_db.js) Meu TID: " + worker.threadId);


// Associa o Sequelize a uma varíavel 
const Sequelize = require('sequelize');
// Capta qual banco de dados, senha, tipo de usuário, host e dialeto que está sendo utilizado
const sequelize = new Sequelize('blockchain_hashes', 'root', 'passwordpassword',{
	dialect: 'mysql',
	host: 'localhost'
});


//Autentica e verifica se deu erro
sequelize.authenticate().then(function(){
//	console.log('Banco de dados conectado...'); // Se sim, conectou.
}).catch(function(erro){ // Caso dê erro, mostre qual erro foi gerado. Podendo aqui nesse ocasio incluir um log de erros para algum arquivo.
//	console.log('Falhou ao se conectar ao banco de dados: ' + erro);
});

module.exports = sequelize;

