var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function getGradient()
{
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    
    css.textContent = body.style.background + ";";
}

getGradient();

function getRandomColor()
{
    var symbol = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
        color = color + symbol[Math.floor(Math.random()*16)];
    }
    return color;
}

function setRandomColor()
{
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    getGradient();
    setGradient();
}

color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);
random.addEventListener("click", setRandomColor);