<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Damas</title>
    <link rel="stylesheet" href="../libs/css/materialize.min.css">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <br>
    <div id="app" class="container center">
      <h5>Vez do jogador: {{jogador}}, {{pontosJogador1}}: {{clicks}}</h5>
      <div class="tabuleiro">
        <div v-for="campo, i in campos">
          <div v-if="i % 2 == 0">
            <span v-for="pos, j in campo">
              <span v-on:click="getIndex(i, j, this);" class="casa par" v-if="j % 2 == 0 &amp;&amp; i % 2 == 0">&nbsp;{{pos}}&nbsp;</span>
              <span v-on:click="clicks = 0" class="casa impar" v-else>&nbsp;{{pos}}&nbsp;</span>
            </span>
          </div>
          <div v-else>
            <span v-for="pos, j in campo">
              <span v-on:click="clicks = 0;" class="casa impar" v-if="j % 2 == 0">&nbsp;{{pos}}&nbsp;</span>
              <span v-on:click="getIndex(i, j, this);" class="casa par" v-else>&nbsp;{{pos}}&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </body>

  <script type="text/javascript" src="../libs/js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="../libs/js/materialize.min.js"></script>
  <script type="text/javascript" src="../libs/js/vue.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
</html>
