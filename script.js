var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector('body');
var button = document.querySelector(".random");
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener('click', setRandomColor);

function setGradient()
{
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")"; 
    h3.textContent = body.style.background + ";";
    var h1 = document.querySelector("h1");
    h1.style.color = getRandomColor();
}

function getRandomColor()
{
    var symbols = "0123456789ABCDEF";
    var hex = "#";
    for (var i =0; i<6; i++){
    hex = hex + symbols[Math.floor(Math.random()*16)];
    }
    return hex;
}

function setRandomColor()
{
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}