<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title> Ch 5 php </title>
		<link rel="stylesheet" type="text/css" href="personal.external.1.css">
		<link rel="icon" type="image/x-png" href="http://i.imgur.com/FQxduAG.gif">
	</head>

	<body>
		<?php
		  echo strrev(" .dlrow olleH"); // Reverse string
		  echo str_repeat("Hip ", 2);   // Repeat string
		  echo strtoupper("hooray!");   // String to uppercase
		?>
		<?php
		  $a1 = "WILLIAM";
		  $a2 = "henry";
		  $a3 = "gatES";

		  echo $a1 . " " . $a2 . " " . $a3 . "<br>";
		  fix_names();
		  echo $a1 . " " . $a2 . " " . $a3;

		  function fix_names()
		  {
			global $a1; $a1 = ucfirst(strtolower($a1));
			global $a2; $a2 = ucfirst(strtolower($a2));
			global $a3; $a3 = ucfirst(strtolower($a3));
		  };
		?>
	</body>	
</html>