// Initialize variables
let seconds = 0;
let centiseconds = 0;
let timerInterval; // Variable to store the timer interval

// Function to update the timer display
function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `${seconds}.${centiseconds}`;
}

function generateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `${seconds}.${centiseconds}`;
  timerInterval = setInterval(incrementTimer, 10);
}

function incrementTimer() {
  centiseconds++;
  if (centiseconds == 100) {
    seconds++;
    centiseconds = 0;
  }
  updateTimerDisplay();
}

function resetTimer() {
  clearInterval(timerInterval); // Clear the timer interval
  seconds = 0;
  centiseconds = 0;
  updateTimerDisplay();
}

function checkSudokuCompletion() {
  // Check if the Sudoku board is entirely filled
  let isCompleted = true;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (sudokuPuzzle[row][col] === "") {
        isCompleted = false;
        break;
      }
    }
    if (!isCompleted) {
      break;
    }
  }
}

let myValComplete = true;
// If Sudoku is completed, display the completion message
if (myValComplete) {
  clearInterval(timerInterval); // Stop the timer
  const completionTime = `${seconds}.${centiseconds} seconds`;
  const completionMessage = document.getElementById("completion-message");
  const completionTimeElement = document.getElementById("completion-time");
  completionTimeElement.textContent = completionTime;
  completionMessage.style.display = "block"; // Show the completion message
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function () {
  // Hide the completion message when the close button is clicked
  myValComplete = false;
  const completionMessage = document.getElementById("completion-message");
  completionMessage.style.display = "none";
  
});

// Call the function to generate the timer when the page is loaded
document.addEventListener("DOMContentLoaded", generateTimer);

// Call the function to check Sudoku completion periodically (e.g., every 100 milliseconds)
setInterval(checkSudokuCompletion, 100);
