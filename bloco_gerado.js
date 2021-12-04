// Cria o bloco inteiro no banco de dados

const Sequelize = require('sequelize');
const database = require('./conn_db');
//var process = require('process');
//const worker = require('worker_threads');
//console.log("(bloco_gerado.js)   - thread pool Meu PID: " + process.pid);
//console.log("(bloco_gerado.js) Meu TID: " + worker.threadId);

const Blocos = database.define('Blocos',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	block_index: {
		type: Sequelize.INTEGER,
		autoIncrement: false
	},
	block_data:{
		type: Sequelize.TEXT
	},
	block_p_hash: {
		type: Sequelize.STRING,
		allowNull: true
	},
	block_c_hash: {
		type: Sequelize.STRING,
		allowNull: false
	},
	block_timestamp:{
		type: Sequelize.STRING,
		allowNull: true
	},
	block_nonce:{
		type: Sequelize.STRING,
		allowNull: false
	},
	block_difficulty:{
		type: Sequelize.STRING,
		allowNull: false
	}

});

// exporta a variavél Blocos para ser reaproveitada em outros arquivos
module.exports = Blocos;

