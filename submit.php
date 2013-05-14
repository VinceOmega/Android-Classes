<?php

if ( isset($_POST['LName']) && isset($_POST['FName']) && isset($_POST['Numba']) && isset($_POST['Email']) !='' ){
	$text = ' ';
	foreach( $_POST as $name => $value) {
		if (is_array($value)) {
			 $text .= sprintf("%s: %s\n", $name, join(' ', $value));
		} else {
		$text .= sprintf("%s: %s\n", $name, $value);
		
		}	
	}
	
	//$headers .= 'To: '.$_POST['Email'].' ,' . "\r\n";
	  $headers = 'From: You <mailbot@lambdaweb.awardspace.com>' . "\r\n";
	//$headers .= 'Reply-To: You <mailbot@lambdaweb.awardspace.com>' . "\r\n";
	
	mail('staples0357a@wirelessadvocates.com', 'Mobile Class Sign Up: '.date('l jS \of F Y h:i:s A'), $text, $headers);
	
	
echo 1;
}

else

{

echo 0;
echo $_POST['LName'];
echo $_POST['FName'];
echo $_POST['Numba'];
echo $_POST['Email'];
}

 ?>