const Block = require('./block');
//var process = require('process');
//const worker = require('worker_threads');
//console.log("(block_chain.js) - thread pool Meu PID: " + process.pid);
//console.log("(block_chain.js) Meu TID: " + worker.threadId);


// Cria a classe Blockchain
class Blockchain {

	// Construtor do bloco
	constructor(){
		this.blocks = [new Block()];
		this.ind = 1;

	}
 	// Capta qual foi o útlimo bloco criado
	getLastBl() {
		// Aqui pode ser tratado para ele conectar ao banco de dados para captar a cadeia já existente, caso for necessário
		return this.blocks[this.blocks.length-1];

	}
// Adiciona um outro bloco a cadeia
	
	addBl(data){
		// Cria o bloco com índice, dificuldade e seu hash anterior
		const ind = this.ind;
		const difficulty = this.difficulty;
		const prevHash = this.getLastBl().hash;
		//Gera um novo bloco na cadeia existente
		const block = new Block(ind, prevHash, data, difficulty);
		// Incrementa o valor do índice
		this.ind++;
		// Associa o bloco ao array de blocos.
		this.blocks.push(block);

	}
	// Verifica se o bloco é válido, 
	isValid(){

		// Loops de interação para verificar se o bloco é válido ou não
		for(var i = 1; i < this.blocks.length; i++){
			const c_block = this.blocks[i];
			const p_block = this.blocks[i - 1];
			// Sinalizadores em caso de falha...
			if(c_block.hash !== c_block.gen_hash()){
				return false;
			}
			else if(c_block.ind !== p_block.ind + 1) {
				return false;
			}
			else if(c_block.prevHash !== p_block.hash){
				return false;
			} 
		} // Sinaliza verdadeiro caso seja válido
		return true;
	} 
}
// Exporta o bloco.
module.exports = Blockchain;
