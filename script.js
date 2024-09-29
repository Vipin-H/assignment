// Variables for time and interval
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

// Selecting DOM elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Function to format the time as MM:SS
function updateTimerDisplay() {
    let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    let secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    timerDisplay.textContent = `${minutesDisplay}:${secondsDisplay}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay();
        }, 1000);
        isRunning = true;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateTimerDisplay();
}

// Event listeners for the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
