var interval , minutes , seconds=0;
var clock = document.getElementById("clock");

setTime();
displayTimer();

function setTime(){
    alert("Enter a amount of time by minutes")
    var time = parseInt(prompt("Please Enter your countdown"));
    if(time){
        minutes = time, seconds=0;
    }else{
        alert("Enter a valid amount of time")
        setTime();
    }
}

function displayTimer(){
    seconds = seconds < 10 ? "0"+seconds :seconds;
    minutes = minutes < 10 ? "0"+minutes :minutes;
    totalTime = minutes + " : " + seconds;
    clock.innerText = totalTime;
};

function timer(){
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    seconds = seconds == 0 ? 59 : seconds-1;
    minutes = seconds == 59 ? --minutes :minutes;
    if(minutes == 0 && seconds == 0){clearInterval(interval); seconds=0};
    displayTimer();
}

function start(){
    interval = setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    setTime();
    clearInterval(interval);
    displayTimer();
}