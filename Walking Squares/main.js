//shared

const canvas = document.getElementById("squareCanvas");
const ctx = canvas.getContext("2d");
setInterval(main, 16)

var keys = {
    K_w: false,
    K_a: false,
    K_s: false,
    K_d: false,
    K_UP: false,
    K_Down: false,
    K_Right: false,
    K_Left: false,
}
function draw_square(up_key_name, left_key_name, down_key_name, right_key_name) {
    return {
        x: 0,
        y: 0,
        vx: 1,
        vy: 1,
        draw() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, 100, 100);
            ctx.stroke();
        },
        update() {
            if (keys[up_key_name]) {
                this.y -= this.vy;
            };
            if (keys[down_key_name]) {
                this.y += this.vy;
            };
            if (keys[right_key_name]) {
                this.x += this.vx;
            };
            if (keys[left_key_name]) {
                this.x -= this.vx;
            };
        }
    };
};

window.onkeydown = function (e) {
    if (e.key === 'w') {
        keys['K_w'] = true;
    };
    if (e.key === 'a') {
        keys['K_a'] = true;
    };
    if (e.key === 's') {
        keys['K_s'] = true;
    };
    if (e.key === 'd') {
        keys['K_d'] = true;
    };
    if (e.key === 'ArrowUp') {
        keys['K_UP'] = true;
    };
    if (e.key === 'ArrowLeft') {
        keys['K_Left'] = true;
    };
    if (e.key === 'ArrowDown') {
        keys['K_Down'] = true;
    };
    if (e.key === 'ArrowRight') {
        keys['K_Right'] = true;
    };
}

window.onkeyup = function (e) {
    if (e.key === 'w') {
        keys['K_w'] = false;
    };
    if (e.key === 'a') {
        keys['K_a'] = false;
    };
    if (e.key === 's') {
        keys['K_s'] = false;
    };
    if (e.key === 'd') {
        keys['K_d'] = false;
    };
    if (e.key === 'ArrowUp') {
        keys['K_UP'] = false;
    };
    if (e.key === 'ArrowLeft') {
        keys['K_Left'] = false;
    };
    if (e.key === 'ArrowDown') {
        keys['K_Down'] = false;
    };
    if (e.key === 'ArrowRight') {
        keys['K_Right'] = false;

        console.log(e);
        console.log(e.key);
    };
}

var square = draw_square('K_w', 'K_a', 'K_s', 'K_d');
var square2 = draw_square('K_UP', 'K_Left', 'K_Down', 'K_Right');

//Draw Phase

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.update();
    square.draw();
    square2.update();
    square2.draw();
    // window.requestAnimationFrame(draw);
};