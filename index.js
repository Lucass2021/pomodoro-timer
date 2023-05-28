const timerElement = document.querySelector("#timer");
const startElement = document.querySelector("#start");
const stopElement = document.querySelector("#stop");
const resetElement = document.querySelector("#reset");

let interval;
let timeLeft = 1500; // 1500 seconds is 25 minutes

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerElement.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is over");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
