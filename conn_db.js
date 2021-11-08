const Sequelize = require('sequelize');
const sequelize = new Sequelize('blockchain_hashes', 'user_test', '12345passWORD@!##>>',{
	dialect: 'mysql',
	host: 'localhost'
});

sequelize.authenticate().then(function(){
	console.log('Banco de dados conectado...');
}).catch(function(erro){
	console.log('Falhou ao se conectar ao banco de dados: ' + erro);
});

module.exports = sequelize;

