// Initialize variables
let seconds = 0;
let centiseconds = 0;

// Function to update the timer display
function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = seconds;
}

function generateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = seconds;
  setInterval(IncrementTimer, 10);
}

function IncrementTimer() {
  centiseconds++;
  if (centiseconds == 100) {
    seconds++;
    centiseconds = 0;
  }
  updateTimerDisplay();
}

// Function to reset the timer
function resetTimer() {
  seconds = 0;
  centiseconds = 0;
  updateTimerDisplay();
}

document.getElementById("resetButton").addEventListener("click", resetTimer);
document.addEventListener("DOMContentLoaded", generateTimer);
