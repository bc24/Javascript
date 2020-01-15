document.write('<script type="text/javascript" src="js/balls/Ball.js"></script>');
document.write('<script type="text/javascript" src="js/com/mrdoob/Stats.js"></script>');

var canvas;
var context;
var width;
var height;

var ballList = new Array();

function init() {
    // canvas
    canvas = document.getElementById("canvasBalls");
    context = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    // init balls and loop
    createBalls(100);
    startLoop();
    // stats
    var stats = new Stats();
    document.getElementById("FPS").appendChild(stats.domElement);
    setInterval(function() {
        stats.update();
    }, 1000 / 60);
}

function createBalls(count) {
    ballList.splice(0, ballList.length);
    for (var i = 0; i < count; i++) {
        createBall();
    }
    document.getElementById("counterBalls").innerHTML = "Anzahl: " + ballList.length;
    return false; // don't reload page
}

function startLoop() {
    setInterval(draw, 33); // 33 milliseconds = ~ 30 frames per sec
}

function draw() {

    context.clearRect(0, 0, width, height);
    for (var i = 0; i < ballList.length; i++) {
        ballList[i].update(width, height);
        context.fillStyle = "#FF0000";
        context.beginPath();
        context.arc(ballList[i].x, ballList[i].y, ballList[i].radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
}

function createBall() {
    var randomX = Math.random() * width;
    var randomY = Math.random() * height;
    var ball = new Ball(randomX, randomY);
    ballList.push(ball);
}