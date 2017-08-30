<?php
	session_start();

	$mysqli = new mysqli("localhost", "root", "", "dw2");

	if(!$mysqli){
		die($mysqli ->errno());	
	} else {
		$nome = $_POST['nome'];		
		$sobrenome = $_POST['sobrenome'];
		$email = $_POST['email'];
		$senha = md5($_POST['senha']);

		$createTable = "CREATE TABLE IF NOT EXISTS `teste` (nome varchar(128), sobrenome varchar(128), senha varchar(128), email varchar(128))";
		
		$mysqli-> query($createTable);

		if (!($stmt = $mysqli->prepare("INSERT INTO teste(nome, sobrenome, senha, email) VALUES (?, ?, ?, ?)"))) {
     		echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
		}

		if (!$stmt->bind_param("ssss", $nome, $sobrenome, $senha, $email)) {
		    echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
		}

		if (!$stmt->execute()) {
		    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
		} else {
			header("Location: /dw2/");
		}

		$stmt->close();
	}
?>