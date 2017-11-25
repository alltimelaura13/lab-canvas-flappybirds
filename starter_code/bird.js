function Bird(id) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  var img = new Image();
  img.src = "./images/flappy.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 200, 200, 50, 50);
  }).bind(this);
}
