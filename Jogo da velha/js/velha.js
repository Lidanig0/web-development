var main = new Vue({
el: '#app',
data: {
	campos: [
	" ", " ", " ",
	" ", " ", " ",
	" ", " ", " "],
	jogador: "X",
	ganhador: null
},

methods: {
	jogar: function(i){
		event.preventDefault();

		if (this.campos[i] == " " && !this.verifica()){
			if (this.jogador == "X"){
				this.campos[i] = this.jogador;
				if (this.verifica()){
					this.ganhador = 
					"Parabéns, " + this.jogador + " ganhou.";
				} else {
					this.jogador = "O";
				}
			} else {
				this.campos[i] = this.jogador;
				if (this.verifica()){
					this.ganhador = 
					"Parabéns, " + this.jogador + " ganhou.";
				} else {
					this.jogador = "X";
				}
			}
		} else {
			if (this.verifica()){
				//
			} else {
				console.log("Voce já jogou nessa casa.");
			}
		}
	},
	verifica: function(){
		if (this.ganhou(this.campos, "X") ||
			this.ganhou(this.campos, "O")){
			return true;
		}
		return false;
	},
	ganhou: function(campos, jogador){
		if (campos[0] == jogador && 
			campos[1] == jogador &&
			campos[2] == jogador){
			return true;
		}
		if (campos[3] == jogador && 
			campos[4] == jogador &&
			campos[5] == jogador){
			return true;
		}
		if (campos[6] == jogador && 
			campos[7] == jogador &&
			campos[8] == jogador){
			return true;
		}
		if (campos[0] == jogador && 
			campos[3] == jogador &&
			campos[6] == jogador){
			return true;
		}
		if (campos[1] == jogador && 
			campos[4] == jogador &&
			campos[7] == jogador){
			return true;
		}
		if (campos[2] == jogador && 
			campos[5] == jogador &&
			campos[8] == jogador){
			return true;
		}
		if (campos[0] == jogador && 
			campos[4] == jogador &&
			campos[8] == jogador){
			return true;
		}
		if (campos[2] == jogador && 
			campos[4] == jogador &&
			campos[6] == jogador){
			return true;
		} else {
			var arr = [];
			for (var j = 0; j < this.campos.length; j++) {
				if (this.campos[j] != " "){
					arr.push(campos[j]);
				}
			}
			if (arr.length == 9){
				this.ganhador = "Velha";
			} else {
				arr = [];
			}
		}
		return false;
	}
}

});