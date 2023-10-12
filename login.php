<?php
//database connection
include 'db.php';

if(isset($_POST['txtLogUsername'])) {
	echo "Button Clicked";

	// get the post records
	$txtLogUsername = $_POST['txtLogUsername'];
	$txtLogPassword = $_POST['txtLogPassword'];

    //query the data
    $sql = "SELECT * FROM user_list WHERE username='$txtLogUsername' AND password='$txtLogPassword'";

	// insert in database 
	$result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);

        if ($row['username'] === $txtLogUsername && $row['password'] === $txtLogPassword) {
            echo "Logged in!";
            $_SESSION['username'] = $row['username'];
        }
    }
    else {
        echo "not Logged in";
    }
}
?>