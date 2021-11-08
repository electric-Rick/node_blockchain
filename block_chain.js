const Block = require('./block');

class Blockchain {clear
	constructor(){
		this.blocks = [new Block()];
		this.ind = 1;

	}

	getLastBl() {
		return this.blocks[this.blocks.length-1];

	}

	addBl(data){
		const ind = this.ind;
		const difficulty = this.difficulty;
		const prevHash = this.getLastBl().hash;
		
		const block = new Block(ind, prevHash, data, difficulty);
		
		this.ind++;
		this.blocks.push(block);

	}
	isValid(){
		for(var i = 1; i < this.blocks.length; i++){
			const c_block = this.blocks[i];
			const p_block = this.blocks[i - 1];

			if(c_block.hash !== c_block.gen_hash()){
				return false;
			}
			else if(c_block.ind !== p_block.ind + 1) {
				return false;
			}
			else if(c_block.prevHash !== p_block.hash){
				return false;
			} 
		}
		return true;
	} 
}

module.exports = Blockchain;
