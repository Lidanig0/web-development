<?php
$mysqli = new mysqli("localhost", "root", "", "dw2");
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: (" . $mysqli->connect_errno
      . ") " . $mysqli->connect_error);
}

$userid = $_SESSION['id'];
$res = $mysqli->query(
  "SELECT * FROM `jogos` WHERE bolinha_id=$userid OR xis_id=$userid"
);
if (!$res) {
  die("Error querying testes table.");
}
$registros = $res->fetch_all();

session_start();
$logado = $_SESSION['nome'];

include 'header.php';
?>

<div class="row" id="root">
  <div class="col s6 offset-s3">
    <div class="card-panel">
      <h4>Meus jogos</h4>
      <a href="novoJogo.php">Criar jogo</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Jogo</th>
            <th>Entrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogo in jogos">
            <td>{{jogo[0]}}</td>
            <td>{{jogo[1]}}</td>
            <td><a :href="`velha.php?id=$jogo[0]`">Entrar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>
<script type="text/javascript">
  var ListaDeJogos = new Vue({
    el: "#root",
    data: {

    }
  });
</script>
