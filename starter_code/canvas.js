function Canvas(id) {
  var canvas = document.getElementById('canvas');
  canvas.width = 1000;
  canvas.height = 500;
  this.ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = "./images/bg.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 0, 0, 1000, 500);
  }).bind(this);

}
