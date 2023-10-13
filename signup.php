<?php
$showAlert = false; 
$showError = false; 
$exists=false;

//database connection

// // Check if name already taken
// if($_SERVER["REQUEST_METHOD"] == "POST") {
//     $username = $_POST["username"]; 
//     $password = $_POST["password"]; 
//     $cpassword = $_POST["cpassword"];
            
    
//     $sql = "Select * from users where username='$username'";
    
//     $result = mysqli_query($conn, $sql);
    
//     $num = mysqli_num_rows($result); 
    
//     // This sql query is use to check if
//     // the username is already present 
//     // or not in our Database
//     if($num == 0) {
//         if(($password == $cpassword) && $exists==false) {
    
//             $hash = password_hash($password, 
//                                 PASSWORD_DEFAULT);
                
//             // Password Hashing is used here. 
//             $sql = "INSERT INTO `users` ( `username`, 
//                 `password`, `date`) VALUES ('$username', 
//                 '$hash', current_timestamp())";
    
//             $result = mysqli_query($conn, $sql);
    
//             if ($result) {
//                 $showAlert = true; 
//             }
//         } 
//         else { 
//             $showError = "Passwords do not match"; 
//         }      
//     }// end if 
    
//    if($num>0) 
//    {
//       $exists="Username not available"; 
//    } 
    
// }//end if  

if(isset($_POST['txtRegUsername'])) {
	include 'db.php';
	echo "Button Clicked";

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
	}
}
?>
