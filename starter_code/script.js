window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    var canvas = new Canvas("canvas");
    var bird = new Bird("bird");
    bird.draw();
    // canvas.draw();

  }
};
