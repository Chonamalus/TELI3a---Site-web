<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Sudoku Game</title>
  </head>

  <body>
    <header class="logo_container">
      <img src="ens_logo.jpg" class="logo_ens" />
    </header>
    <h1>Sudoku de la mecotronik</h1>
    <?php echo "Hello, PHP!"; ?>
    <div id="completion-message">
      <p>
        Bravaaa! <br> Sudocul complet en <span id="completion-time"></span>.
      </p>
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