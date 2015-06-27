<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title> Short Cuts! </title>
		<link rel="stylesheet" type="text/css" href="\css\Forms.external.1.css">
		<link rel="icon" type="image/x-png" href="\img\Shark.gif">
		<script>
			function Back() {
				window.location.assign("http://www.alessandroguaresti2017.rop.santasusana.org/");
			}
		</script>
	</head>

	<body>
			<?php 
				$name = $_POST['Name'];
				$email = $_POST['Email'];
				$message = $_POST['Message'];
				$subj = 'Feedback';
				$recipiant = 'agitsjustsilver@gmail.com'
			?>
		<div>
			<table>
				<tr>
					<td>
						<?php 
							echo "<p>Thank you " . $name . " for submitting your feedback.</p>";
						?>
					</td>
				</tr>
				<tr>
					<td>
						<?php 
							echo "<p>You sent this through " . $email . ".</p>";
						?>
					</td>
				</tr>
				<tr>
					<td>
						<?php 
							echo "<p>This is what your message was " . $message . ".</p>";
						?>
						<input type="button" value="Go Back" onclick="Back()">
					</td>
				</tr>
			</table>
		</div>
			<?php 
				$mail = $name . " left some feedback: \n" . $message . ".";
				mail($recipiant, $subj, $mail, 'From:' . $email);
			?>
	</body>
</html>