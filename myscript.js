// Define your Sudoku puzzle as a 2D array (9x9)
const sudokuPuzzle = [
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
      // Add a hover effect to change cursor type (FRONT)
      cell.addEventListener("mouseenter", function () {
        cell.style.cursor = "pointer";
      });
      cell.addEventListener("mouseleave", function () {
        cell.style.cursor = "default";
      });
      sudokuBoard.appendChild(cell); // (BACK)
    }
  }

  sudokuBoard.addEventListener('click', (e)=>{
    if (e.target.className === 'cell') {
      const currentValue = e.target.textContent;
      const newValue = (Number(currentValue) % 9) + 1;
      e.target.textContent = newValue;
    }
  });
}

// Call the function to generate the Sudoku board when the page is loaded (BACK)
document.addEventListener("DOMContentLoaded", generateSudokuBoard);
// 'DOMContentLoaded' is an event in JavaScript that is fired when the HTML 
// document has been completely loaded and parsed by the browser, and all the 
// DOM elements are available for manipulation via JavaScript. 
