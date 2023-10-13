<!DOCTYPE html>
<?php include "signup.php"?>
<?php include "login.php"?>
<?php include "setup.php"?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Sudoku Game</title>
  </head>

  <body>

    <form class="sidebar closed" id="signUpSidebar" action="index.php" method='post'>
      <p>
        <label for="Username">Your Username </label>
        <input type="text"  class="form-control"  name="txtRegUsername" id="txtRegUsername" placeholder="Username" value="" required>
      </p>
      <p>
        <label for="Password">Your Password </label>
        <input type="text"  class="form-control"  name="txtRegPassword" id="txtRegPassword" placeholder="Password" value="" required>
      </p>
      <button id="signupButton2" name="signupButton2">Sign up</button>
    </form>

    <form class="sidebar closed" id="loginSidebar" action="index.php" method='post'>
      <p>
        <label for="Username">Your Username </label>
        <input type="text"  class="form-control"  name="txtLogUsername" id="txtLogUsername" placeholder="Username" value="" required>
      </p>
      <p>
        <label for="Password">Your Password </label>
        <input type="text"  class="form-control"  name="txtLogPassword" id="txtLogPassword" placeholder="Password" value="" required>
      </p>
      <button id="loginButton2" name="loginButton2">Log in</button>
    </form>

    <header class="logo_container">
      <img src="ens_logo.jpg" class="logo_ens" />
      <button id="signupButton">Sign up</button>
      <button id="loginButton">Log in</button>
    </header>
    
    <h1>Sudoku de la mecotronik</h1>
    Hello, <?php echo $_SESSION['username']; ?>
    <div id="completion-message">
      Bravaaa! <br> Sudocul complet en <span id="completion-time"></span>.
      <button id="close-button">Close</button>
    </div>

    <p>
      Timer: <span id="timer"></span> <button id="resetButton">Reset</button>
    </p>
    <script src="timer.js"></script>

    <div class="sudoku-board" id="sudoku-board"></div>
    <div id="keyboard"></div>
    <script src="myscript.js"></script>
  </body>
</html>