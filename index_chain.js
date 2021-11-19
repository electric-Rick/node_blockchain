var counter = 0;
var process = require('process');

console.log('(Filho)Meu PID é: ' + process.pid);

(async ()=>{

	const Blockchain = require('./block_chain');
	const me  = new Blockchain();
	const database = require('./conn_db');
	const Bloco = require('./bloco_gerado');


while(counter<=10){
	counter++;

	if(me.isValid() == true){	
		me.addBl(`dado_simbólico_n${counter}`);
		const novos_blocos =  Bloco.create({
		block_index: me['blocks'][counter]['ind'].toString(), // No lugar dos identificadores, pode ser usual utilizar funções para comparar os dados
		block_data: me['blocks'][counter]['data'].toString(),
		block_p_hash: me['blocks'][counter]['prevHash'],
		block_c_hash: me['blocks'][counter]['hash'].toString(),
		block_difficulty: me['blocks'][counter]['difficulty'].toString(),
		block_nonce: me['blocks'][counter]['nonce'].toString(),
		block_timestamp: me['blocks'][counter]['time_st'].toString()
	    	
		})
	}

	}

await database.sync()	
 

})();

/*

function Bloco_(block){
	
	me.addBl(`dado_simbólico_n${counter}`);
	while(counter<=10){
	counter++;

	const id = block['blocks'][counter]['ind'].toString();
	const data = block['blocks'][counter]['data'].toString();
	const hash = block['blocks'][counter]['prevHash'].toString();
	const c_hash = block['blocks'][counter]['hash'].toString();
	const diffic = block['blocks'][counter]['difficulty'].toString();
	const nonce = block['blocks'][counter]['nonce'].toString();
	const timestamp = block['blocks'][counter]['time_st'].toString();
	
	return this.block;

}


*/