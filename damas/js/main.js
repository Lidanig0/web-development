var Main = new Vue({
  el: '#app',
  data: {
    campos: [],
    indexClick: null,
    posAtual: [],
    posAnterior: [null, null],
    clicks: 0,
    jogador: "img/img.png",
    pontosJogador1: 0,
    pontosJogador2: 0,
    vencedor: null
  },
  methods: {
    geraTab: function () {
      for (var i = 0; i < 8; i++) {
        var list = [];
        for (var j = 0; j < 8; j++) {
          list.push("img/fundo.png");
        }
        this.campos.push(list);
      }
      for (var i = 0; i < this.campos.length; i++) {
        for (var j = 0; j < this.campos[i].length; j++) {
          if (i == 1){
            if (j % 2 == 0){
              this.campos[i][j] = "img/img2.png";
            }
          } else if (i == 0 || i == 2){
            if (j % 2 != 0){
              this.campos[i][j] = "img/img2.png";
            }
          } else if(i == 6){
            if (j % 2 != 0){
              this.campos[i][j] = "img/img.png";
            }
          } else if(i == 7 || i == 5){
            if (j % 2 == 0){
              this.campos[i][j] = "img/img.png";
            }
          }
        }
      }
      console.log(this.campos);
    },
    getIndex: function (i, j) {
      this.indexClick = [i, j];
      this.clicks ++;
      this.game();
    },
    remover(){
      for (var i = 0; i < this.campos.length; i++) {
        for (var j = 0; j < this.campos.length; j++) {
          if (this.campos[i][j] == "img/fundoP.png"){
            this.campos[i][j] = "img/fundo.png";
          }
        }
      }
    },
    changeOpponent: function(j1){
      var inimigoD;
      if (j1 == "img/img.png"){
        inimigoD = "img/dama2.png";
      } else if (j1 == "img/img2.png"){
        inimigoD = "img/dama.png"
      } else if (j1 == "img/dama.png"){
        inimigoD = "img/dama2.png";
      } else if (j1 == "img/dama2.png"){
        inimigoD = "img/dama.png";
      }
      return inimigoD;
    },
    jogadasPossiveis1: function(i, j, j1, j2){
      var inimigoD = this.changeOpponent(j1);
      if (i >= 0 && i <= 7 && j >= 0 && j <= 7){
        if (this.campos[i][j] == j1){
          if ((i-2 >= 0 && j-2 >= 0)
            && (this.campos[i -1][j -1] == j2
            || this.campos[i -1][j -1] == inimigoD)
            && (this.campos[i -2][j -2] == "img/fundo.png")){
            this.campos[i -2][j -2] = "img/fundoP.png";
          }
          if ((i-2 >= 0 && j+2 <= 7)
            && (this.campos[i -1][j +1] == j2
            || this.campos[i -1][j +1] == inimigoD)
            && (this.campos[i -2][j +2] == "img/fundo.png")){
            this.campos[i -2][j +2] = "img/fundoP.png";
          }
          if ((i-1 >= 0 && j-1 >= 0)
            && this.campos[i -1][j -1] == "img/fundo.png"){
            this.campos[i -1][j -1] = "img/fundoP.png";
          }
          if ((i-1 >= 0 && j+1 <= 7)
            && this.campos[i -1][j +1] == "img/fundo.png"){
            this.campos[i -1][j +1] = "img/fundoP.png";
          }
        }
        return false;
      }
    },
    jogadasPossiveis2: function(i, j, j1, j2){
      var inimigoD = this.changeOpponent(j1);
      if (i >= 0 && i <= 7 && j >= 0 && j <= 7){
        if (this.campos[i][j] == j1){
          if ((i+2 <= 7 && j-2 >= 0)
            && (this.campos[i +1][j -1] == j2
            || this.campos[i +1][j -1] == inimigoD)
            && (this.campos[i +2][j -2] == "img/fundo.png")){
            this.campos[i +2][j -2] = "img/fundoP.png";
          }
          if ((i+2 <= 7 && j+2 <= 7)
            && (this.campos[i +1][j +1] == j2
            || this.campos[i +1][j +1] == inimigoD)
            && (this.campos[i +2][j +2] == "img/fundo.png")){
            this.campos[i +2][j +2] = "img/fundoP.png";
          }
          if ((i+1 <= 7 && j-1 >= 0)
            && this.campos[i +1][j -1] == "img/fundo.png"){
            this.campos[i +1][j -1] = "img/fundoP.png";
          }
          if ((i+1 <= 7 && j+1 <= 7)
            && this.campos[i +1][j +1] == "img/fundo.png"){
            this.campos[i +1][j +1] = "img/fundoP.png";
          }
        }
        return false;
      }
    },
    isPossible: function (i, j) {
      if (i <= 7 && j <= 7){
        if (this.jogador == "img/img.png"){
          if (this.campos[i][j] == "img/dama.png"){
            this.jogadasPossiveis2(i, j, "img/dama.png", "img/img2.png");
            this.jogadasPossiveis1(i, j, "img/dama.png", "img/img2.png");
          } else {
            this.jogadasPossiveis1(i, j, "img/img.png", "img/img2.png");
          }
        }
        if (this.jogador == "img/img2.png"){
          if (this.campos[i][j] == "img/dama2.png"){
            this.jogadasPossiveis1(i, j, "img/dama2.png", "img/img.png");
            this.jogadasPossiveis2(i, j, "img/dama2.png", "img/img.png");
          } else {
            this.jogadasPossiveis2(i, j, "img/img2.png", "img/img.png");
          }
        }
      }
    },
    jogadasPossiveisPD: function(i, j, j1, j2){
      var inimigoD = this.changeOpponent(j1);
      if (j1 == "img/img.png"){
        var j1d = "img/dama.png";
      } else {
        var j1d = "img/dama2.png";
      }
      if (i >= 0 && i <= 7 && j >= 0 && j <= 7){
        if (this.campos[i][j] == j1
          && (j1 == "img/img.png" || j1 == "img/img2.png")){
          if (this.jogador == "img/img2.png"){
            if ((i+2 <= 7 && j-2 >= 0)
              && (this.campos[i +1][j -1] == j2
              || this.campos[i +1][j -1] == inimigoD)
              && (this.campos[i +2][j -2] == "img/fundo.png")){
              this.campos[i +1][j -1] = "img/fundo.png";
              if (i+2 == 7){
                this.campos[i +2][j -2] = j1d;
              } else {
                this.campos[i +2][j -2] = j1;
              }
              this.campos[i][j] = "img/fundo.png";
              this.pontosJogador2 ++;
              return true;
            }
            if ((i+2 <= 7 && j+2 <= 7)
              && (this.campos[i +1][j +1] == j2
              || this.campos[i +1][j +1] == inimigoD)
              && (this.campos[i +2][j +2] == "img/fundo.png")){
              this.campos[i +1][j +1] = "img/fundo.png";
              if (i +2 == 7){
                this.campos[i +2][j +2] = j1d;
              } else {
                this.campos[i +2][j +2] = j1;
              }
              this.campos[i][j] = "img/fundo.png";
              this.pontosJogador2 ++;
              return true;
            }
          }
          else if (this.jogador == "img/img.png"){
            if ((i-2 >= 0 && j-2 >= 0)
              && (this.campos[i -1][j -1] == j2
              || this.campos[i -1][j -1] == inimigoD)
              && (this.campos[i -2][j -2] == "img/fundo.png")){
              this.campos[i -1][j -1] = "img/fundo.png";
              if (i -2 == 0){
                this.campos[i -2][j -2] = j1d;
              } else {
                this.campos[i -2][j -2] = j1;
              }
              this.campos[i][j] = "img/fundo.png";
              this.pontosJogador1 ++;
              return true;
            }
            if ((i-2 >= 0 && j+2 <= 7)
              && (this.campos[i -1][j +1] == j2
              || this.campos[i -1][j +1] == inimigoD)
              && (this.campos[i -2][j +2] == "img/fundo.png")){
              this.campos[i -1][j +1] = "img/fundo.png";
              if (i -2 == 0){
                this.campos[i -2][j +2] = j1d;
              } else {
                this.campos[i -2][j +2] = j1;
              }
              this.campos[i][j] = "img/fundo.png";
              this.pontosJogador1 ++;
              return true;
            }
          }
        }
        else if (this.campos[i][j] == j1 &&
          (j1 == "img/dama.png" || j1 == "img/dama2.png")){
          if ((i-2 >= 0 && j+2 <= 7)
            && (this.campos[i -1][j +1] == j2
            || this.campos[i -1][j +1] == inimigoD)
            && (this.campos[i -2][j +2] == "img/fundo.png")){
            this.campos[i -1][j +1] = "img/fundo.png";
            this.campos[i -2][j +2] = j1;
            this.campos[i][j] = "img/fundo.png";
            if (j1 == "img/dama2.png") this.pontosJogador2 ++;
            else this.pontosJogador1 ++;
            return true;
          }
          if ((i-2 >= 0 && j-2 >= 0)
            && (this.campos[i -1][j -1] == j2
            || this.campos[i -1][j -1] == inimigoD)
            && (this.campos[i -2][j -2] == "img/fundo.png")){
            this.campos[i -1][j -1] = "img/fundo.png";
            this.campos[i -2][j -2] = j1;
            this.campos[i][j] = "img/fundo.png";
            if (j1 == "img/dama2.png") this.pontosJogador2 ++;
            else this.pontosJogador1 ++;
            return true;
          }
          if ((i+2 <= 7 && j-2 >= 0)
            && (this.campos[i +1][j -1] == j2
            || this.campos[i +1][j -1] == inimigoD)
            && (this.campos[i +2][j -2] == "img/fundo.png")){
            this.campos[i +1][j -1] = "img/fundo.png";
            this.campos[i +2][j -2] = j1;
            this.campos[i][j] = "img/fundo.png";
            if (j1 == "img/dama2.png") this.pontosJogador2 ++;
            else this.pontosJogador1 ++;
            return true;
          }
          if ((i+2 <= 7 && j+2 <= 7)
            && (this.campos[i +1][j +1] == j2
            || this.campos[i +1][j +1] == inimigoD)
            && (this.campos[i +2][j +2] == "img/fundo.png")){
            this.campos[i +1][j +1] = "img/fundo.png";
            this.campos[i +2][j +2] = j1;
            this.campos[i][j] = "img/fundo.png";
            if (j1 == "img/dama2.png") this.pontosJogador2 ++;
            else this.pontosJogador1 ++;
            return true;
          }
        }
      }
    },
    isPossiblePD: function(i, j, d){
      if (i <= 7 && j <= 7){
        if (this.jogador == "img/img.png"){
          this.jogadasPossiveisPD(i, j, "img/img.png", "img/img2.png");
        }
        if (this.jogador == "img/img2.png"){
          this.jogadasPossiveisPD(i, j, "img/img2.png", "img/img.png");
        }
        if (this.jogador == "img/img.png" && d == "img/dama.png"){
          this.jogadasPossiveisPD(i, j, "img/dama.png", "img/img2.png");
        }
        if (this.jogador == "img/img2.png" && d == "img/dama2.png"){
          this.jogadasPossiveisPD(i, j, "img/dama2.png", "img/img.png");
        }
      }
    },
    game: function(){
      this.posAnterior[0] = this.posAtual[0];
      this.posAnterior[1] = this.posAtual[1];
      this.posAtual[0] = this.indexClick[0];
      this.posAtual[1] = this.indexClick[1];

      var i = this.posAtual[0];
      var j = this.posAtual[1];
      var iA = this.posAnterior[0];
      var jA = this.posAnterior[1];

      //a de posição jogável em verde.
      if (this.clicks == 1 && i <= 7 && j <= 7){
        if (this.jogador != this.campos[i][j]
          && "img/dama.png" != this.campos[i][j]
          && "img/dama2.png" != this.campos[i][j]
          && "img/fundoP.png" != this.campos[i][j]){
          this.clicks = 0;
        } else {
          this.isPossible(i, j);
        }
      }

      if (this.clicks == 2 && !this.won()){
        if (this.campos[i][j] == "img/fundoP.png" &&
          this.campos[iA][jA] == this.jogador){
          //jogador 1
          if (this.jogador == "img/img.png"){
            if (i == iA -1 && i != 0){
              this.mover(i, j, iA, jA, "img/img.png");
              this.changePlayer();
              this.remover();
            }
            if (i == iA -2){
              console.log(i, j, iA, jA);
              if (j == jA -2){
                if (this.campos[iA -1][jA -1] == "img/img2.png"
                  || this.campos[iA -1][jA -1] == "img/dama2.png"){
                  if (i == 0){
                    this.mover(i, j, iA, jA, "img/dama.png");
                    this.changePlayer();
                    this.campos[iA -1][jA -1] = "img/fundo.png";
                  } else {
                    this.mover(i, j, iA, jA, "img/img.png");
                    this.campos[iA -1][jA -1] = "img/fundo.png";
                    this.isPossiblePD(i, j, "img/img.png", "img/img2.png");
                    this.changePlayer();
                  }
                  this.remover();
                  this.pontosJogador1 ++;
                }
              }
              if (j == jA +2){
                if (this.campos[iA -1][jA + 1] == "img/img2.png"
                  || this.campos[iA -1][jA + 1] == "img/dama2.png"){
                  if (i == 0){
                    this.mover(i, j, iA, jA, "img/dama.png");
                    this.changePlayer();
                    this.campos[iA -1][jA +1] = "img/fundo.png";
                  } else {
                    this.mover(i, j, iA, jA, "img/img.png");
                    this.campos[iA -1][jA +1] = "img/fundo.png";
                    this.isPossiblePD(i, j, "img/img.png", "img/img2.png");
                    this.changePlayer();
                  }
                  this.remover();
                  this.pontosJogador1 ++;
                }
              }
            }
            else if (i == 0){
              this.mover(i, j, iA, jA, "img/dama.png");
              this.changePlayer();
              this.remover();
            }
          }
          //end jogador 1
          //jogador 2
          else if (this.jogador == "img/img2.png") {
            if (i == iA +1 && i != 7){
              this.mover(i, j, iA, jA, "img/img2.png");
              this.changePlayer();
              this.remover();
            }
            if (i == iA +2){
              console.log(i, j, iA, jA);
              if (j == jA -2){
                if (this.campos[iA +1][jA -1] == "img/img.png"
                  || this.campos[iA +1][jA -1] == "img/dama.png"){
                  if (i == 7){
                    this.mover(i, j, iA, jA, "img/dama2.png");
                    this.campos[iA +1][jA -1] = "img/fundo.png";
                    this.changePlayer();
                  } else {
                    this.mover(i, j, iA, jA, "img/img2.png");
                    this.campos[iA +1][jA -1] = "img/fundo.png";
                    this.isPossiblePD(i, j, "img/img2.png", "img/img.png");
                    this.changePlayer();
                  }
                  this.remover();
                  this.pontosJogador2 ++;
                }
              }
              if (j == jA +2){
                if (this.campos[iA +1][jA + 1] == "img/img.png"
                  || this.campos[iA +1][jA +1] == "img/dama.png"){
                  if (i == 7){
                    this.mover(i, j, iA, jA, "img/dama2.png");
                    this.campos[iA +1][jA +1] = "img/fundo.png";
                    this.changePlayer();
                  } else {
                    this.mover(i, j, iA, jA, "img/img2.png");
                    this.campos[iA +1][jA +1] = "img/fundo.png";
                    this.isPossiblePD(i, j, "img/img2.png", "img/img.png");
                    this.changePlayer();
                  }
                  this.remover();
                  this.pontosJogador2 ++;
                }
              }
            }
            else if (i == 7){
              this.mover(i, j, iA, jA, "img/dama2.png");
              this.changePlayer();
              this.remover();
            }
          } else {
            this.clicks = 0;
            this.remover();
          }
          //end jogador 2
        }
        //Jogador 1 as Dama
        else if (this.campos[i][j] == "img/fundoP.png"
          && this.campos[iA][jA] == "img/dama.png"){
          if (i == iA +1 || i == iA -1){
            this.mover(i, j, iA, jA, "img/dama.png");
            this.changePlayer();
            this.remover();
          }
          else if (i == iA -2){
            console.log(i, j, iA, jA);
            if (j == jA -2){
              if (this.campos[iA -1][jA -1] == "img/img2.png"
                || this.campos[iA -1][jA -1] == "img/dama2.png"){
                this.mover(i, j, iA, jA, "img/dama.png");
                this.campos[iA -1][jA -1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama.png", "img/img2.png", "img/dama.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador1 ++;
              }
            }
            else if (j == jA +2){
              if (this.campos[iA -1][jA + 1] == "img/img2.png"
                || this.campos[iA -1][jA + 1] == "img/dama2.png"){
                this.mover(i, j, iA, jA, "img/dama.png");
                this.campos[iA -1][jA +1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama.png", "img/img2.png", "img/dama.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador1 ++;
              }
            }
          } else if (i == iA +2){
            console.log(i, j, iA, jA);
            if (j == jA -2){
              if (this.campos[iA +1][jA -1] == "img/img2.png"
                || this.campos[iA +1][jA -1] == "img/dama2.png"){
                this.mover(i, j, iA, jA, "img/dama.png");
                this.campos[iA +1][jA -1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama.png", "img/img2.png", "img/dama.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador1 ++;
              }
            }
            else if (j == jA +2){
              if (this.campos[iA +1][jA + 1] == "img/img2.png"
                || this.campos[iA +1][jA + 1] == "img/dama2.png"){
                this.mover(i, j, iA, jA, "img/dama.png");
                this.campos[iA +1][jA +1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama.png", "img/img2.png", "img/dama.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador1 ++;
              }
            }
          } else {
            this.clicks = 0;
            this.remover();
          }
        }
        //end jogador 1 as dama
        //jogador 2 as Dama
        else if (this.campos[i][j] == "img/fundoP.png"
          && this.campos[iA][jA] == "img/dama2.png"){
          if (i == iA +1 || i == iA -1){
            this.mover(i, j, iA, jA, "img/dama2.png");
            this.changePlayer();
            this.remover();
          }
          else if (i == iA -2){
            console.log(i, j, iA, jA);
            if (j == jA -2){
              if (this.campos[iA -1][jA -1] == "img/img.png"
                || this.campos[iA -1][jA -1] == "img/dama.png"){
                this.mover(i, j, iA, jA, "img/dama2.png");
                this.campos[iA -1][jA -1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama2.png", "img/img.png", "img/dama2.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador2 ++;
              }
            }
            else if (j == jA +2){
              if (this.campos[iA -1][jA + 1] == "img/img.png"
                || this.campos[iA -1][jA + 1] == "img/dama.png"){
                this.mover(i, j, iA, jA, "img/dama2.png");
                this.campos[iA -1][jA +1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama2.png", "img/img.png", "img/dama2.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador2 ++;
              }
            }
          }
          else if (i == iA +2){
            console.log(i, j, iA, jA);
            if (j == jA -2){
              if (this.campos[iA +1][jA -1] == "img/img.png"
                || this.campos[iA +1][jA -1] == "img/dama.png"){
                this.mover(i, j, iA, jA, "img/dama2.png");
                this.campos[iA +1][jA -1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama2.png", "img/img.png", "img/dama2.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador2 ++;
              }
            }
            else if (j == jA +2){
              if (this.campos[iA +1][jA + 1] == "img/img.png"
                || this.campos[iA +1][jA + 1] == "img/dama.png"){
                this.mover(i, j, iA, jA, "img/dama2.png");
                this.campos[iA +1][jA +1] = "img/fundo.png";
                this.isPossiblePD(i, j, "img/dama2.png", "img/img.png", "img/dama2.png");
                this.changePlayer();
                this.remover();
                this.pontosJogador2 ++;
              }
            }
          } else {
            this.clicks = 0;
            this.remover();
          }
        } else {
            this.clicks = 0;
            this.remover();
        }
      }
    },
    mover: function(i, j, iA, jA, piece){
      this.campos[iA][jA] = "img/fundo.png";
      this.campos[i][j] = piece;
      this.clicks = 0;
      console.log(this.campos);
    },
    changePlayer(){
      if (this.jogador == "img/img.png"){
        this.jogador = "img/img2.png";
        $(".tabuleiro").css({"border" : "3px solid blue"});
      } else {
        this.jogador = "img/img.png";
        $(".tabuleiro").css({"border": "3px solid red"});
      }
    },
    won: function(){
      if (this.pontosJogador1 == 12){
        this.vencedor = 1;
        $(".tabuleiro").css({"border": "3px solid black"});
        return true;
      } else if (this.pontosJogador2 == 12){
        this.vencedor = 2;
        $(".tabuleiro").css({"border": "3px solid black"});
        return true;
      }
      return false;
    }
  },
  created() {
    this.geraTab();
  }
});
