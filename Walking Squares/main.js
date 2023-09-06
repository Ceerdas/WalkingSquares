//shared

const canvas = document.getElementById("squareCanvas");
const ctx = canvas.getContext("2d");
//let raf
setInterval(main, 16)

//square #1 object and functions

function moveForward(square) {
    square.x += square.vx;
};
function moveBackward(square) {
    square.x -= square.vx;
};
function moveUp(square) {
    square.y -= square.vy;
};
function moveDown(square) {
    square.y += square.vy;
};

const square = {

    x: 0,
    y: 0,
    vx: 10,
    vy: 10,
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, 100, 100, true);
        ctx.stroke();
    },
    update(){
        if (w){
            moveUp(this)
        }
        if (a){
            moveBackward(this)
        }
        if (s){
            moveDown(this)
        }
        if (d){
            moveForward(this)
        }
    }
};

var w = false;
var a = false;
var s = false;
var d = false;

window.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "ArrowRight") {
        d = true;
    }
    if (event.key === "a") {
        a = true;
    }
    if (event.key === "w") {
        w = true;
    }
    if (event.key === "s") {
        s = true;
    };
    console.log(event.key);
});
window.addEventListener("keyup", (event) => {
    if (event.key === "d") {
        d = false;
    }
    if (event.key === "a") {
        a = false;
    }
    if (event.key === "w") {
        w = false;
    }
    if (event.key === "s") {
        s = false;
    };
    console.log(event.key);
});

// square #2 object and functions

const square2 = {

    x: 100,
    y: 100,
    vx: 0,
    vy: 1,
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, 100, 100, true);
        ctx.stroke();
        square2.x += square2.vx;
        square2.y += square2.vy;
    
        if (square2.y + square2.vy > canvas.height || square2.y + square2.vy < 0) {
            square2.vy = -square2.vy;
        }
        if (square2.x + square2.vx > canvas.width || square2.x + square2.vx < 0){
            square2.vx = -square2.vx;
        }

    }
};

// square #3 object and functions

const square3 = {

    x: 250,
    y: 250,
    vx: 1,
    vy: 0,
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, 100, 100, true);
        ctx.stroke();
        square3.x += square3.vx;
        square3.y += square3.vy;
    
        if (square3.y + square3.vy > canvas.height || square3.y + square3.vy < 0) {
            square3.vy = -square3.vy;
        }
        if (square3.x + square3.vx > canvas.width || square3.x + square3.vx < 0){
            square3.vx = -square3.vx;
        }
    }
};

//Draw Phase

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.draw();
    square2.draw();
    square3.draw();
    square.update();
    // window.requestAnimationFrame(draw);
};