<?php
session_start();
$email = $_POST['email'];
$senha = md5($_POST['password']);

$mysqli = new mysqli("localhost", "root", "", "dw2");
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: (" . $mysqli->connect_errno
      . ") " . $mysqli->connect_error);
}

$sql = "SELECT * FROM `user` WHERE `email`='$email' AND `password`='$senha'";
$res = $mysqli->query($sql);
if (!$res) {
  die($mysqli->error."<br />Error querying testes table.<br />$sql");
}
$registros = $res->fetch_all();
if (count($registros) > 0) {
  $_SESSION['id'] = $registros[0][0];
  $_SESSION['nome'] = $registros[0][1];
  $_SESSION['email'] = $registros[0][2];
  header("Location: index.php");
} else {
  header("Location: index.php?erro=E-mail+e/ou+senha+inválidos.");
}
?>
