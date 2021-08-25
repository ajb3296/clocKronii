const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

let date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);


document.addEventListener('scroll', function() {
    var currentScrollValue = document.documentElement.scrollTop;
    if (currentScrollValue/10 < 50 && currentScrollValue > -5) {
        document.getElementById('clock').style.transform = "perspective(500px) rotateX(" + currentScrollValue/10 + "deg)"
        document.getElementById('clock').style.filter = "drop-shadow( " +currentScrollValue/80+ "px " + currentScrollValue/10 + "px 5px #CCCCCC)"
    }
});