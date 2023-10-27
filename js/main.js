const player = new Player();
const obstaclesArr = []; // will store instances of the class Obstacle

// create obstacles
setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 3000);

// update obstacles
setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    // move
    obstacleInstance.moveDown();

    // remove obstacles if outside
    if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
      obstacleInstance.obstacleElm.remove(); // remove dom element
      obstaclesArr.shift(); // remove from the array
    }

    // detect collision
    if (
      player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
      player.positionX + player.width > obstacleInstance.positionX &&
      player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
      player.positionY + player.height > obstacleInstance.positionY
    ) {
      // Collision detected!
      // console.log("game over!");
      location.href = "./gameover.html";
    }
  });
}, 30);

// attach event listeners
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
  }
});
