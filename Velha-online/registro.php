
<?php include 'header.php'; ?>

<div class="row">
	<div class="col s6 offset-s3">
		<div class="card-panel">
			<h4>Faça seu cadastro</h4>
			<?php
				if (array_key_exists("erro", $_GET)) {
					$erro = $_GET['erro'];
					?>
					<div class="section red lighten-4">
						<p><?php echo $erro; ?></p>
					</div>
					<?php
				}
			?>
			<form action="cadastro.php" method="POST">
			  <div class="input-field">
			    <input type="text" name="nome" id="nome" />
			    <label for="nome">Nome completo</label>
			  </div>
			  <div class="input-field">
			    <input type="email" name="email" id="email" />
			    <label for="email">E-mail</label>
			  </div>
			  <div class="input-field">
			    <input type="submit" value="Cadastrar" class="btn" />
			  </div>
			</form>
		</div>
	</div>
</dvi>

<?php include 'footer.php'; ?>
