<?php

if(isset($_POST['txtRegUsername'])) {
	include 'db.php';

	// get the post records
	$txtRegUsername = $_POST['txtRegUsername'];
	$txtRegPassword = $_POST['txtRegPassword'];

	// database insert SQL code
	$sql = "INSERT INTO `user_list` (`username`, `password`) VALUES ('$txtRegUsername', '$txtRegPassword')";

	// insert in database 
	$rs = mysqli_query($con, $sql);
	if($rs)
	{
		echo "Contact Records Inserted";
		$_SESSION['username'] = $txtRegUsername;
	}
	
}
?>
