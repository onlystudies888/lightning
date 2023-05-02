let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let km = 0;
let intervalId;

const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");
const resultSpan = document.getElementById("result");

function startTimer() {
  intervalId = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    km = seconds / 3;
    km = (Math.round(km * 100) / 100).toFixed(2);
    updateTimer();
  }, 10);

}

function stopTimer() {
  clearInterval(intervalId);
  resultSpan.textContent = km;

}


function reset() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  km = 0;
  updateTimer();
  resultSpan.textContent = 0

}


function updateTimer() {
  minutesSpan.textContent = padTime(minutes);
  secondsSpan.textContent = padTime(seconds);
  millisecondsSpan.textContent = padTime(milliseconds);

}

function padTime(time) {
  return time.toString().padStart(2, "0");
}


const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const cssResult=document.getElementById("result");
const cssResult1=document.getElementById("result1");
stopButton.style.display = 'none';
resetButton.style.display = 'none';
cssResult.style.visibility='hidden';
cssResult1.style.visibility='hidden';

startButton.addEventListener("click", function () {
  startTimer();
  togglestart();
  togglestop();
  startButton.style.display = 'none';
  stopButton.style.display = 'block';
})
stopButton.addEventListener("click", function () {
  stopTimer();
  updateTimer();
  togglemsg();
  togglestop();
  stopButton.style.display = 'none';
  resetButton.style.display = 'block';
  cssResult.style.visibility='visible'
  cssResult1.style.visibility='visible'
});
resetButton.addEventListener("click", function () {
  reset();
  togglestart();
  togglemsg();
  startButton.style.display = 'block';
  resetButton.style.display = 'none';
  cssResult.style.visibility='hidden';
  cssResult1.style.visibility='hidden';
});

function togglestart(){
  var message=document.getElementById("message")
  message.classList.toggle("visible")
}
function togglestop(){
var message=document.getElementById("message1")
message.classList.toggle("visible")
}
function togglemsg(){
  var message=document.getElementById("message2")
  message.classList.toggle("visible")
}
togglestop();
togglemsg();