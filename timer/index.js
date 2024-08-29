const startButton = document.getElementById("startbtn");
const stopButton = document.getElementById("stopbtn");
const hourInput = document.getElementById("hrs");
const minuteInput = document.getElementById("min");
const secondInput = document.getElementById("sec");
const hoursDisplay = document.getElementById("hrInput");
const minutesDisplay = document.getElementById("minInput");
const secondsDisplay = document.getElementById("secondInput");

let countdown;
let time;

function updateDisplay() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer() {
    clearInterval(countdown); 

    const hours = parseInt(hourInput.value) || 0;
    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;

    time = hours * 3600 + minutes * 60 + seconds;

  

    countdown = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            time--;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}



startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);


updateDisplay(); 



  


