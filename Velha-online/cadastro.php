<?php
session_start();
$userid = $_SESSION['id'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = md5($_POST['password']);
$confirmasenha = md5($_POST['passwordconfirm']);

if ($senha !== $confirmasenha) {
  header("Location: registro.php?erro=As+senhas+digitadas+não+são+iguais.");
  die();
}

$mysqli = new mysqli("localhost", "root", "", "dw2");
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: (" . $mysqli->connect_errno
      . ") " . $mysqli->connect_error);
}

/* Prepared statement, stage 1: prepare */
$stmt = $mysqli->prepare(
  "INSERT INTO `jogos`(id, titulo, tabuleiro, vez, status, bolinha_id) ".
  "VALUES (NULL, ?, '[[\"\",\"\",\"\"],[\"\",\"\",\"\"],[\"\",\"\",\"\"]]', 0, 0, ?)"
);
if (!$stmt) {
    die("Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error);
}
/* Prepared statement, stage 2: bind and execute */
if (!$stmt->bind_param("si", $nome, $userid)) {
    die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error
    . "<br />Nome: $fullname");
}

if (!$stmt->execute()) {
    die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
}
$stmt->close();

header("Location: index.php?sucesso=Usuário+cadastrado+com+sucesso.");

?>
