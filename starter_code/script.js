window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    var canvas = new Canvas("canvas");
    var bird = new Bird("bird");
    var obstacle_bottom = new Obstacle("obstacle_bottom");
    var obstacle_top = new Obstacleup("obstacle_top");
    bird.draw();
    obstacle_bottom.draw();
    obstacle_top.draw();
    // canvas.draw();

  }
};
