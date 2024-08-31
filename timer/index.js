const startButton = document.getElementById("startbtn");
const stopButton = document.getElementById("stopbtn");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const secondInput = document.getElementById("secondInput");
const hoursDisplay = document.getElementById("hour");
const minutesDisplay = document.getElementById("minute");
const secondsDisplay= document.getElementById("second");

let time;
let countdown;

function stopTimer(){
    clearInterval(countdown);
}

function updateDisplay() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer(){
    const hours = parseInt(hourInput.value)|| 0;
    const minutes = parseInt(minuteInput.value)|| 0;
    const seconds = parseInt(secondInput.value)|| 0;

    time = hours*3600 + minutes*60 + seconds;

    countdown = setInterval(function(){
        if(time===0){
            clearInterval(countdown)
            alert("times up!");
        }
        else{
              time--;
              updateDisplay();
        }
    }, 1000  )

}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);


updateDisplay(); 








  


