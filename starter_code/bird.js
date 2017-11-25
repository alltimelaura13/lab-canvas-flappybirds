
function Bird(id) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.width =
  this.height =
  this.speedX = 10;
  this.speedY = 10;
  this.gravity = 0.2;
  this.gravitySpeed = 1;


  var img = new Image();
  img.src = "./images/flappy.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 200, 200, 50, 50);
  }).bind(this);

}
//
//
// Bird.prototype.update = function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   this.draw();
//
//   this.x += this.vx;
//   this.vy += gravity;
//   this.y += this.vy;
// }
//
// var RIGHT_KEY = 39;
// Bird.prototype.onKeyDown = function(event) {
//
//   if (event.keyCode == RIGHT_KEY) {
//     this.moveToRigth();
//   }
// }
//
// Bird.prototype.moveToRigth = function() {
//   if (this.bird > 2) {
//     this.bird = 1;
//   } else {
//       this.bird++;
//   }
//   this.x += this.speed;
// }
