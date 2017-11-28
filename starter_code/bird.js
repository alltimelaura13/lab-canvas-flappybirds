
function Bird(id) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  var img = new Image();
  img.src = "./images/flappy.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 200, 200, 50, 50);
  }).bind(this);

  // this.width =
  // this.height =
  // this.speedX = 10;
  // this.speedY = 10;
  // this.gravity = 0.2;
  // this.gravitySpeed = 1;

  var bird = {
    x: 25,
    y: 25,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: bird.moveUp();    console.log('up',    bird); break;
      case 40: bird.moveDown();  console.log('down',  bird); break;
      case 37: bird.moveLeft();  console.log('left',  bird); break;
      case 39: bird.moveRight(); console.log('right', bird); break;
    }
    updateCanvas();
  }

  function updateCanvas() {
    ctx.clearRect(0,0,1500,1700);
    ctx.fillText("Bird_x: " + ghost.x, 580,40);
    ctx.fillText("Bird_y: " + ghost.y, 580,60);
    draw(bird)
  }


}
