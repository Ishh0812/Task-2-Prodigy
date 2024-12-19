let startTime, updatedTime, difference, running = false, lapCounter = 1;  
const display = document.getElementById("display");  
const lapsContainer = document.getElementById("laps");  

function startTimer() {  
    if (!running) {  
        running = true;  
        startTime = new Date().getTime() - (difference || 0);  
        setInterval(updateDisplay, 1000);  
    }  
}  

function pauseTimer() {  
    if (running) {  
        running = false;  
        difference = new Date().getTime() - startTime;  
    }  
}  

function resetTimer() {  
    running = false;  
    difference = 0;  
    display.innerHTML = "00:00:00";  
    lapsContainer.innerHTML = "";  
    lapCounter = 1;  
}  

function updateDisplay() {  
    updatedTime = new Date().getTime();  
    difference = updatedTime - startTime;  

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);  

    display.innerHTML =   
        (hours < 10 ? "0" + hours : hours) + ":" +   
        (minutes < 10 ? "0" + minutes : minutes) + ":" +   
        (seconds < 10 ? "0" + seconds : seconds);  
}  

function recordLap() {  
    if (running) {  
        const lapTime = display.innerHTML;  
        const lap = document.createElement("div");  
        lap.className = "lap";  
        lap.innerHTML = "Lap " + lapCounter + ": " + lapTime;  
        lapsContainer.appendChild(lap);  
        lapCounter++;  
    }  
}  

document.getElementById("start").addEventListener("click", startTimer);  
document.getElementById("pause").addEventListener("click", pauseTimer);  
document.getElementById("reset").addEventListener("click", resetTimer);  
document.getElementById("lap").addEventListener("click", recordLap);
