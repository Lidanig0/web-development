<?php
session_start();
if (array_key_exists("id", $_SESSION)) {
	header("Location: listarJogos.php");
	die();
}

include 'header.php';
?>
<div class="row">
	<div class="col s6 offset-s3">
		<div class="card-panel">
			<h4>Faça seu login</h4>
			<?php
				if (array_key_exists("sucesso", $_GET)) {
					$sucesso = $_GET['sucesso'];
					?>
					<div class="section green lighten-4">
						<p><?php echo $sucesso; ?></p>
					</div>
					<?php
				}
				if (array_key_exists("erro", $_GET)) {
					$erro = $_GET['erro'];
					?>
					<div class="section red lighten-4">
						<p><?php echo $erro; ?></p>
					</div>
					<?php
				}
			?>
			<form action="login.php" method="POST">
        <div class="input-field">
          <input type="email" name="email" id="email" />
          <label for="email">E-mail</label>
        </div>
	        <div class="input-field">
	          <input type="password" name="password" id="password" />
	          <label for="password">Senha</label>
	        </div>
        <div class="input-field">
          <input type="submit" value="Entrar" class="btn" />
        </div>
      </form>
    </div>
	</div>
</div>

<?php include 'footer.php'; ?>
