function Canvas(id){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//se declara el alto y ancho para el lienzo de canvas
canvas.width = 1000;
canvas.height = 500;

//se añade la imagen
var img = new Image();
img.src = "./images/bg.png"

//se declaran las variables de los ejes
var x = 0;
var y = 0;

//se llama a la funcion draw en un intervalo de 20, recordar que 1000 equivale a 1 segundo
setInterval(draw, 20);

//funcion para el pintado de la imagen
function draw() {
  //si X tiene un valor menor que 0 se le asigna el ancho del canvas
  if (x < 0) {
    x = canvas.width;
  }
  //si X es menor que el ancho del canvas
  if (x < canvas.width) {
    //pinta la imagen por detras al valor de la X
    ctx.drawImage(img, x -img.width, y, img.width, img.height);
  }

  // se pinta una linea para ver el corte de la imagen
  ctx.beginPath();
  ctx.moveTo(x,0);
  ctx.lineWidth = 5
  ctx.lineTo(x,600);
  ctx.stroke();

  //pinta la imagen despues del valor de la X
  ctx.drawImage(img, x, y,img.width, img.height);

  x -= 0.5; //incremento de la x para dar movimiento a la imagen
}
}
