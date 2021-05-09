var display = document.getElementById("display");

function startClock() {
    var clock = new Date();
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    hours = update(hours);
    minutes = update(minutes);
    seconds = update(seconds);
    display.innerText = hours + " : " + minutes + " : " + seconds;
}

function update(t) {
    if(t < 10) {
        t = "0" + t;
    }
    return t;
}
setInterval(startClock, 1000);
