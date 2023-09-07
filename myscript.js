// Define your Sudoku puzzle as a 2D array (9x9)
let sudokuPuzzle = [
  [5, 3, "", "", 7, "", "", "", ""],
  [6, "", "", 1, 9, 5, "", "", ""],
  ["", 9, 8, "", "", "", "", 6, ""],
  [8, "", "", "", 6, "", "", "", 3],
  [4, "", "", 8, "", 3, "", "", 1],
  [7, "", "", "", 2, "", "", "", 6],
  ["", 6, "", "", "", "", 2, 8, ""],
  ["", "", "", 4, 1, 9, "", "", 5],
  ["", "", "", "", 8, "", "", 7, 9]
];

// Function to generate the Sudoku grid
function generateSudokuBoard() {
  const sudokuBoard = document.getElementById("sudoku-board");

  // Generate the Sudoku grid using a nested loop
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = sudokuPuzzle[row][col];
      if (col % 3 == 2) {
        cell.style.borderRight = "2px solid #333";
      }
      if (col == 0) {
        cell.style.borderLeft = "2px solid #333";
      }
      if (row % 3 == 0) {
        cell.style.borderTop = "2px solid #333";
      }
      if (row == 8) {
        cell.style.borderBottom = "2px solid #333";
      }

      // Add a hover effect to change cursor type for empty cells
      if (sudokuPuzzle[row][col] === "") {
        cell.addEventListener("mouseenter", function () {
          cell.style.cursor = "pointer";
        });
        cell.addEventListener("mouseleave", function () {
          cell.style.cursor = "default";
        });

      // Add click event to show the keyboard and pass the event object
      cell.addEventListener("click", function (event) {
        showKeyboard(row, col, event);
      });  
      }

      sudokuBoard.appendChild(cell);
    }
  }
}

// Function to show the clickable keyboard next to the cursor
function showKeyboard(row, col, event) {
  const keyboard = document.getElementById("keyboard");
  keyboard.innerHTML = ""; // Clear the keyboard

  // Calculate the position of the cursor relative to the viewport
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  // Position the keyboard next to the cursor
  keyboard.style.left = cursorX + "px";
  keyboard.style.top = cursorY + "px";

  // Create a container for the 3x3 grid and the 'X' button
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";

  // Create a 3x3 grid for the digits 1 to 9
  const grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 1; i <= 9; i++) {
    const button = document.createElement("button");
    button.className = "keyboard-button";
    button.textContent = i;
    button.onclick = function () {
      inputNumber(i, row, col);
    };
    grid.appendChild(button);
  }

  // Create the 'X' button to clear the cell
  const buttonX = document.createElement("button");
  buttonX.className = "keyboard-button";
  buttonX.textContent = "X";
  buttonX.onclick = function () {
    inputNumber("", row, col); // Clear the cell
  };

  // Add the 3x3 grid and the 'X' button to the container
  gridContainer.appendChild(grid);
  gridContainer.appendChild(buttonX);

  // Add the container to the keyboard
  keyboard.appendChild(gridContainer);

  keyboard.style.display = "block";
}

// Function to input a number into the Sudoku grid
function inputNumber(number, row, col) {
  sudokuPuzzle[row][col] = number;
  const cell = document.querySelector(`.cell:nth-child(${row * 9 + col + 1})`);
  cell.textContent = number;

  // Hide the keyboard
  const keyboard = document.getElementById("keyboard");
  keyboard.style.display = "none";
}

// Call the function to generate the Sudoku board when the page is loaded
document.addEventListener("DOMContentLoaded", generateSudokuBoard);
