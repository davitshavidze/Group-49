let currentDate = new Date();
console.log(currentDate);

let timer;
let seconds = 0;

function updateTimer() {
    document.getElementById('timer').innerText = seconds + ' seconds';
    seconds++;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById('timer').innerText = '0 seconds';
}

let count = 0;
const interval = setInterval(() => {
    console.log(count);
    count++;
    if (count > 15) {
        clearInterval(interval);
    }
}, 500);