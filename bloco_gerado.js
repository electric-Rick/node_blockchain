const Sequelize = require('sequelize');
const database = require('./conn_db');

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

module.exports = Blocos;

