var Main = new Vue({
  el: '#app',
  data: {
    campos: [],
    indexClick: null,
    posAtual: [],
    posAnterior: [null, null],
    clicks: 0,
    jogador: "X",
    pontosJogador1: 0,
    pontosJogador2: 0,
  },
  methods: {
    geraTab: function () {
      for (var i = 0; i < 8; i++) {
        var list = [];
        for (var j = 0; j < 8; j++) {
          list.push(" ");
        }
        this.campos.push(list);
      }
      for (var i = 0; i < this.campos.length; i++) {
        for (var j = 0; j < this.campos.length; j++) {
          if (i == 0 || i == 2){
            if (j % 2 == 0){
              this.campos[i][j] = "O";
            }
          } else if (i == 1){
            if (j % 2 != 0){
              this.campos[i][j] = "O";
            }
          } else if(i == 7 || i == 5){
            if (j % 2 != 0){
              this.campos[i][j] = "X";
            }
          } else if(i == 6){
            if (j % 2 == 0){
              this.campos[i][j] = "X";
            }
          }
        }
      }
      console.log(this.campos);
    },
    getIndex: function (i, j, inp) {
      this.indexClick = [i, j];
      this.clicks ++;
      this.move();
    },
    move: function(){
      this.posAnterior[0] = this.posAtual[0];
      this.posAnterior[1] = this.posAtual[1];
      this.posAtual[0] = this.indexClick[0];
      this.posAtual[1] = this.indexClick[1];

      var i = this.posAtual[0];
      var j = this.posAtual[1];
      var iAnt = this.posAnterior[0];
      var jAnt = this.posAnterior[1];

      if (this.clicks == 2){
        if (this.campos[i][j] == " " &&
          this.campos[iAnt][jAnt] == this.jogador){
            if (this.jogador == "X"){
              if (i == iAnt -1){
                this.mover(i, j, iAnt, jAnt);
              }
              else if (i == iAnt -2){
                console.log(i, j, iAnt, jAnt);
                if (j == jAnt -2){
                  if (this.campos[iAnt -1][jAnt -1] == "O"){
                    this.mover(i, j, iAnt, jAnt);
                    this.campos[iAnt -1][jAnt -1] = " ";
                    this.pontosJogador1 ++;
                  }
                }
                if (j == jAnt +2){
                  if (this.campos[iAnt -1][jAnt + 1] == "O"){
                    this.mover(i, j, iAnt, jAnt);
                    this.campos[iAnt -1][jAnt +1] = " ";
                    this.pontosJogador1 ++;
                  }
                }
              } else {
                this.clicks = 0;
              }
            }
            else if (this.jogador == "O") {
              if (i == iAnt +1){
                this.mover(i, j, iAnt, jAnt);
              }
              else if (i == iAnt +2){
                console.log(i, j, iAnt, jAnt);
                if (j == jAnt -2){
                  if (this.campos[iAnt +1][jAnt -1] == "X"){
                    this.mover(i, j, iAnt, jAnt);
                    this.campos[iAnt +1][jAnt -1] = " ";
                    this.pontosJogador2 ++;
                  }
                }
                if (j == jAnt +2){
                  if (this.campos[iAnt +1][jAnt + 1] == "X"){
                    this.mover(i, j, iAnt, jAnt);
                    this.campos[iAnt +1][jAnt +1] = " ";
                    this.pontosJogador2 ++;
                  }
                }
              } else {
                this.clicks = 0;
              }
            }
          } else {
            this.clicks = 0;
          }


        //
        //     this.mover(i, j, iAnt, jAnt);
        //     console.log(this.posAtual);
        //     console.log(this.posAnterior);
        // } else {
        //   this.clicks = 0;
        // }
      }
    },
    mover: function(i, j, iAnt, jAnt){
      this.campos[iAnt][jAnt] = " ";
      this.campos[i][j] = this.jogador;
      this.clicks = 0;
      this.campos.push([]);
      this.campos.splice(this.campos.length -1, 1);
      console.log(this.campos);
      if (this.jogador == "X"){
        this.jogador = "O";
      } else {
        this.jogador = "X";
      }
    }
  },
  created() {
    this.geraTab();
  },
  mounted: function () {
    //
  },
  updated: function(){
    //
  }
});
