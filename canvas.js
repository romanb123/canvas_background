var canvas = document.getElementById("myCanvas");
var crt = canvas.getContext("2d");
crt.canvas.width = window.innerWidth;
crt.canvas.height = window.innerHeight;
var imageObj = new Image();
imageObj.src = "/image.jpg";
let elements;

function Blueprint(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}
Blueprint.prototype.draw = function() {


    crt.beginPath();
    crt.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    crt.fillStyle = this.color;
    crt.fill();
}
Blueprint.prototype.update = function() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();

}


elements = new Blueprint(60, 60, 1, 1, 6, 'blue');
elements.draw();


function animate() {
    requestAnimationFrame(animate);
    crt.clearRect(0, 0, innerWidth, innerHeight);
    elements.update();
    console.log('animated');
}
animate();