var counter = 0;

(async ()=>{

	const Blockchain = require('./block_chain');
	const me  = new Blockchain();
	const database = require('./conn_db');
	const Bloco = require('./bloco_gerado');


while(counter<=10){
	counter++;
	me.addBl(`dado_simbólico_n${counter}`);
	if(me.isValid() == true){	
	
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
	}
 


await database.sync();

})();



/*console.log('Adicionando dados para gerar SHA256...')
for(var i = 0; i < 15; i++){
  me.addBl({ amount: i });
 console.log(me['blocks'][i]);

}
*/



//const neo_block = new Blockchain;
/*var counter = 0;
var arr_0 = [];
do {
	counter++;
	me.addBl({spent: counter })
	console.log(me)
	

} while(counter<=5); 
*/