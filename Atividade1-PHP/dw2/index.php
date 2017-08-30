<?php

	$mysqli = new mysqli("localhost", "root", "", "dw2");
	if ($mysqli->connect_errno) {
    	die("Failed to connect to MySQL: (" . $mysqli->connect_errno
      		. ") " . $mysqli->connect_error);
	}

	$createTable = "CREATE TABLE IF NOT EXISTS `teste` (nome varchar(128), sobrenome varchar(128), senha varchar(128), email varchar(128))";
		
	$mysqli-> query($createTable);

	$res = $mysqli->query("SELECT * FROM teste");
	if (!$res) {
	  die("Error querying testes table.");
	}
	$registros = $res->fetch_all();
?>
<!DOCTYPE html>
<html>
<head>
	<title>kk eae men</title>
	<link rel="stylesheet" type="text/css" href="../materialize/css/materialize.min.css">
	<meta charset="utf-8">
</head>
<body>
<br>
<div class="container">
	<div class="card z-depth-5">
		<div class="card-content">
			<div class="row">
				<form action="cadastro.php" method="POST" class="col s6 offset-m3">
					<div class="input-field">
						<input type="text" name="nome" required>
						<label for="nome">Nome</label>
					</div>
					<div class="input-field">
						<input type="text" name="sobrenome" required>
						<label for="sobrenome">Sobrenome</label>
					</div>
					<div class="input-field">
						<input type="email" name="email" required>
						<label for="email">Email</label>
					</div>
					<div class="input-field">
						<input type="password" name="senha" required>
						<label for="senha">Senha</label>
					</div>
					<div class="input-field center">
						<input type="submit" class="btn blue-grey darken-3" value="Cadastrar">
					</div>
				</form>
			</div>
		</div>
	</div>

	<?php if (count($registros) > 0){ ?>
		<div class="card">
			<div class="card-content">
				<table>
					<thead>
						<th>Nome</th>
						<th>Sobrenome</th>
						<th>Email</th>
					</thead>
					<tbody>
						<?php
	            			foreach($registros as $linha) {
	            		?>
	              		<tr>
	                		<td><?php echo $linha[0]; ?></td>
	                		<td><?php echo $linha[1]; ?></td>
	                		<td><?php echo $linha[3]; ?></td>
	              		</tr>
	            		<?php } ?>
					</tbody>
				</table>
			</div>
		</div>
	<?php } ?>
</div>

<script type="text/javascript" src="../materialize/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
</body>
</html>