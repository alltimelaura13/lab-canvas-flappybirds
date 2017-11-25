function Obstacle(id) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  var img = new Image();
  img.src = "./images/obstacle_bottom.png";


  img.onload = (function() {
    this.ctx.drawImage(img, 900, 350, 100, 200);
  }).bind(this);

}
