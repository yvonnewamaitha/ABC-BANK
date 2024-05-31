# ABC-BANK
<!DOCTYPE html>
<html>
<head>
	<title>ABC BANK</title>
	<link rel="stylesheet" type="text/css" href="main.css">
	<script type="module" src="main.js"></script>
</head>
<body>
	<div class="center-div">
		<h1>ABC BANK</h1>

		<div id="login-portal">
			<h3>Login</h3><br>
			<label>Account no:</label><br>
			<input type="text" id="lAccNo" class="textbox-style margin-buttom-12"required><br>
			<label>Pin no:</label><br>
			<input type="text" id="lAccPin" class="textbox-style margin-buttom-12"required><br>
			<button id="login-btn"class="margin-buttom-12">Login</button><br>
			<label id="swithToReg" class="switch"><a href="Don't have an account?">Don't have an account? Register</label>
		</div>


		<div id="register-portal">
			<h3>Register</h3><br>
			<label>Name:</label><br>
			<input type="text" id="rAccName" class="textbox-style margin-buttom-12"required><br>
			<label>Account no:</label><br>
			<input type="text" id="rAccNo" class="textbox-style margin-buttom-12"required><br>
			<label>Pin no:</label><br>
			<input type="text" id="rAccPin" class="textbox-style margin-buttom-12"required><br>
			<label>Confirm Pin no:</label><br>
			<input type="text" id="rConAccPin" class="textbox-style margin-buttom-12" required><br>
			<button id="register-btn"class="margin-buttom-12">Register</button><br>
			<label id="swithToLogin" class="switch"><a href="Don't have an account?">Don't have an account? Login</label>
		</div>

		<div id="portal">
			<h3 id="userName">....</h3>
			<h3 id="totalBal">....</h3>

			<div id="deposit-portal">
				<h4>Deposit</h4>
				<label>Enter Amount:</label><br>
				<input type=text id="deposit-amt" class="textbox-style margin-buttom-12"required><br>
				<button id="deposit-submit">Deposit</button>
		</div><br>
			
			<div id="withdraw-portal">
				<h4>Withdraw</h4>
				<label>Enter Amount:</label><br>
				<input type=text id="Withdraw-amt" class="textbox-style"required><br>
				<button id="Wit-submit">Deposit</button>
		</div><br>

		<div id="transfer-portal">
				<h4>Transfer</h4>
				<label>Enter Amount:</label><br>
				<input type=text id="transfer-amt" class="textbox-style margin-buttom-12"required><br>
				<label>Enter transfer Account no:</label><br>
				<input type=text id="transfer-acc-no" class="textbox-style" required><br>
				<button id="trans-submit">Transfer</button>
		</div><br>

		<div id="options">
			<h3>Please select an option</h3>
			<button id="deposit-btn">Deposit</button>
			<button id="withdraw-btn">Withdraw</button>
			<button id="transfer-btn">Transfer</button>
		</div>
	</div>

		



</body>
</html>