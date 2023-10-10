const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "mapa.jpg";

const sprite = new Image();
sprite.src = "../battle/image/sprite-PhotoRoom.png-PhotoRoom.png";

let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 39,  // Anchura de cada cuadro de animación
  height: 51, // Altura de cada cuadro de animación
  numberOfFrames: 6, // Número total de cuadros de animación
  tickCount: 0,
  ticksPerFrame: 10, // Cuántos frames deben pasar antes de cambiar a la siguiente fase
  frame: 0, // La fase de la animación actual
};

function updatePlayerFrame() {
  player.tickCount += 1;
  if (player.tickCount > player.ticksPerFrame) {
    player.tickCount = 0;

    // Cambia al siguiente cuadro de animación
    player.frame += 1;
    if (player.frame >= player.numberOfFrames) {
      player.frame = 0;
    }
  }
}

//En desarrollo porque no me cuadra el mapa XD 36 - 39

function draw() {
  // Dibujar el fondo del mapa
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  const spriteX = player.frame * player.width;
  ctx.drawImage(sprite, spriteX, 0, player.width, player.height, player.x, player.y, player.width, player.height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGameArea() {
  clearCanvas();
  updatePlayerFrame();
  drawPlayer();
}

  

function movePlayer(event) {
  // Mover al jugador con las teclas de flecha
  switch (event.keyCode) {
    case 37: // Izquierda
      player.x -= 5; // Ajusta la velocidad de movimiento según sea necesario
      break;
    case 39: // Derecha
      player.x += 5; // Ajusta la velocidad de movimiento según sea necesario
      break;
    case 38: // Arriba
      player.y -= 5; // Ajusta la velocidad de movimiento según sea necesario
      break;
    case 40: // Abajo
      player.y += 5; // Ajusta la velocidad de movimiento según sea necesario
      break;
  }
}

window.addEventListener("keydown", movePlayer);
setInterval(updateGameArea, 20);
