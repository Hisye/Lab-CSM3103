var container = document.getElementById("container");
var insideSquare1 = document.getElementById("insideSquare1");
var insideSquare2 = document.getElementById("insideSquare2");
var animationInterval;

function moveSquares() {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var squareWidth = insideSquare1.clientWidth;

    var randomX1 = Math.floor(Math.random() * (containerWidth - squareWidth));
    var randomY1 = Math.floor(Math.random() * (containerHeight - squareWidth));
    insideSquare1.style.left = randomX1 + "px";
    insideSquare1.style.top = randomY1 + "px";

    var randomX2 = Math.floor(Math.random() * (containerWidth - squareWidth));
    var randomY2 = Math.floor(Math.random() * (containerHeight - squareWidth));
    insideSquare2.style.left = randomX2 + "px";
    insideSquare2.style.top = randomY2 + "px";
}

function startAnimation() {
    moveSquares();
    animationInterval = setInterval(moveSquares, 1000);
}

function stopAnimation() {
    clearInterval(animationInterval);
}