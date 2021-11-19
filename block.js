const sha256 = require('crypto-js/sha256');
var process = require('process');

console.log('Meu PID é: ' + process.pid);
// Superclasse bloco, precisa ser redefinido para os padrões SOLID ## 
class Block {

	constructor(ind = 0, prevHash = null, data = 'Genesis', difficulty = 3, time_st, hash, stats_hash){
		this.ind = ind;
		this.prevHash = prevHash;
		this.data = data;
		this.time_st = new Date();
		this.hash = hash;
		this.difficulty = difficulty;
		this.nonce = 1;
		this.stats_hash = 'default';
		this.mine();
		
	}
	gen_hash(){
		return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString()

	}


	mine(){

		this.hash = this.gen_hash();
		
 		while (!/^0*$/.test(this.hash.toString().substring(0, this.difficulty))) {

            this.nonce++;
            this.hash = this.gen_hash();
	      
           }
	}
}

module.exports = Block
