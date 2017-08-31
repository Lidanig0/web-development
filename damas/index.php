<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Damas</title>
    <link rel="stylesheet" href="/materialize/css/materialize.min.css">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <br>
    <div id="app" class="container">
      <div class="center" v-for="campo, i in campos">
        <div v-if="i % 2 == 0">
          <span style="width: 200px;" v-for="pos, j in campo">
            <span id="posPar" v-if="j % 2 == 0 &amp;&amp; i % 2 == 0">&nbsp;{{pos}}&nbsp;</span>
            <span id="posImpar" v-else>&nbsp;{{pos}}&nbsp;</span>
          </span><br><br>
        </div>
        <div v-else>
          <span v-for="pos, j in campo">
            <span id="posImpar" v-if="j % 2 == 0">&nbsp;{{pos}}&nbsp;</span>
            <span id="posPar" v-else>&nbsp;{{pos}}&nbsp;</span>
          </span><br><br>
        </div>
      </div>
    </div>
  </body>

  <script type="text/javascript" src="/js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="/materialize/js/materialize.js"></script>
  <script type="text/javascript" src="/js/vue.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
</html>
