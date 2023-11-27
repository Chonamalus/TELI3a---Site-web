// Initialize variables
let seconds = 0;
let centiseconds = 0;
let timerInterval; // Variable to store the timer interval

function runPHPFile() {
  // Defube the URL of your PHP file
  const phpURL = 'your-php-file.php';

  // MAke a GET request to the PHP file
  fetch(phpURL).then(response => {
    if (response.ok) {
      return response.text(); // or response.json() if your PHP script outputs JSON
    }else {
        throw new Error('HTTP request failed');
    }
  })
  .then(data => {
    //Handle the response data from the PHP file
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
  })
}

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
  //clearInterval(timerInterval); // Clear the timer interval
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

  // If Sudoku is completed, display the completion message
  if (isCompleted) {
    clearInterval(timerInterval); // Stop the timer
    const completionTime = `${seconds}.${centiseconds} seconds`;
    const completionMessage = document.getElementById("completion-message");
    const completionTimeElement = document.getElementById("completion-time");
    completionTimeElement.textContent = completionTime;
    completionMessage.style.display = "block"; // Show the completion message
  }
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function () {
  // Hide the completion message when the close button is clicked
  const completionMessage = document.getElementById("completion-message");
  completionMessage.style.display = "none"
});


document.getElementById("resetButton").addEventListener("click", resetTimer);
// Call the function to generate the timer when the page is loaded
document.addEventListener("DOMContentLoaded", generateTimer);

// Call the function to check Sudoku completion periodically (e.g., every 100 milliseconds)
setInterval(checkSudokuCompletion, 100);
