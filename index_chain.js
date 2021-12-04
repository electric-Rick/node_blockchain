// Autor: Erick Augusto de Almeida
// Última atualização: 04/12/2021 03:55 AM
/*****************************************************************************************************/
// Observações: Ainda é preciso aumentar a funcionalidade deste código por ser apenas um demosntativo /
// Versão: 0.0.2v                                                                                 /
/*****************************************************************************************************/

//Dependências neste arquivo: 
var counter = 0;

// Apenas para verificar as threads do arquivo  e seus respectivos PID's
//var process = require('process');
//const worker = require('worker_threads');
//console.log("(index_chain.js) thread: " + process.pid);
//console.log("(index_chain.js) Meu TID: " + worker.threadId);

// Função assíncrona para poder captar os dados da ORM.

(async ()=>{	
	const Blockchain = require('./block_chain');
	const new_block  = new Blockchain();
	const database = require('./conn_db');

	// Requesita o bloco
	const Bloco = require('./bloco_gerado');

// Loop para iterar até o limite de 100 dados por chamada na url principal.
while(counter < 100){

	// Verifica se o novo bloco é válido para que aí sim seja adicionado ao banco de dados
	if(new_block.isValid() == true){	

	// Identificador do bloco atravé do console, mostrando o índice do bloco correspondente ao dado naquele momento
	console.log(`Aguarde... Adicionando bloco ${counter} ao banco de dados`)

	// Caso seja o seu índice estritamente igual a zero, ele entenderá como bloco gênesis e já faz parte de outra cadeia
	if(counter === 0){

		// Contador apenas para iterar e modificar os dados
		counter++;

		// A cada rodada do counter, é criado um novo item no bloco que foi criado, sendo o limite neste código igual a 100 dados por bloco.
		new_block.addBl(`Dados simbólicos em ${Date.now()}`);
		
		// Sequelize cria o bloco gênesis no banco de dados
		const novos_blocos =  Bloco.create({
		
		block_index: new_block['blocks'][counter]['ind'].toString(), 
		block_data: 'GENESIS', // Força o primeiro dado ser Gênesis
		block_p_hash: null, // Força o hash anterior do gênesis ser nulo
		block_c_hash: new_block['blocks'][counter]['hash'].toString(),
		block_difficulty: new_block['blocks'][counter]['difficulty'].toString(),
		block_nonce: new_block['blocks'][counter]['nonce'].toString(),
		block_timestamp: new_block['blocks'][counter]['time_st'].toString()
	    	
		})

	}
		// Continua caso já exista o bloco inicial.
		counter++;

		new_block.addBl(`Dados simbólicos em ${Date.now()}`);
		
		const novos_blocos =  Bloco.create({

		block_index: new_block['blocks'][counter]['ind'].toString(), 
		block_data: new_block['blocks'][counter]['data'].toString(),
		block_p_hash: new_block['blocks'][counter]['prevHash'],
		block_c_hash: new_block['blocks'][counter]['hash'].toString(),
		block_difficulty: new_block['blocks'][counter]['difficulty'].toString(),
		block_nonce: new_block['blocks'][counter]['nonce'].toString(),
		block_timestamp: new_block['blocks'][counter]['time_st'].toString()

		})
	}


}

// Sincroniza o banco de dados com os dados enviados a partir das chaves - valores da variável novos_blocos
await database.sync();



})(); // Por se tratar de uma IIFE, é preciso realizar o callback da função assim que ela é terminada. Não precisei adicionar nenhum parâmetro, mas poderia ser acoplada a um parâmetro de verificação caso fosse necessário;
