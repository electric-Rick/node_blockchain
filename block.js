const sha256 = require('crypto-js/sha256');

var process = require('process');

// console.log('(block.js) thread do processo: ' + process.pid);

// Classe para criar a cadeia inicial dos blocos
class Block {

	//Constructor do primeiro bloco
	constructor(ind = 0, prevHash = null, data = 'Genesis', difficulty = 3, time_st, hash, stats_hash){
		this.ind = ind;
		this.prevHash = prevHash;
		this.data = data;
		this.time_st = new Date();
		this.hash = hash;
		this.difficulty = difficulty; // Dificuldade 3, mas pode ser aumentada dependendo da capacidad do computador
		this.nonce = 1; // Nonce inciia com 1
		this.stats_hash = 'default';
		this.mine(); // Minera os hashes
		
	}


	gen_hash(){ // Gera o hash 256 com todos os dados inseridos no bloco de dados
		return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString()

	}


	mine(){ // Minera os hashes

		this.hash = this.gen_hash(); // callback do gerador de hash
		
 		while (!/^0*$/.test(this.hash.toString().substring(0, this.difficulty))) { // Determina a quantidade de zeros e leis que vão reger sob a hash, neste caso, ela precisa iniciar com uma quantia de zeros.
            this.nonce++; // Aumenta o valor do nonce
            this.hash = this.gen_hash(); // gera o hash válido
	      
           }
	}
}

module.exports = Block // exporta o bloco
