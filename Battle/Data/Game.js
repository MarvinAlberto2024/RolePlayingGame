// Variables globales
let player;
let enemy;

// Inicialización del juego
function initGame() {
  const playerName = prompt("Ingresa el nombre de tu personaje:");
  player = new Warrior(playerName);
  enemy = new Mage("Enemigo Mago");

  
document.getElementById("player-name").textContent = playerName;
  
  document.getElementById("player-class").textContent = player.className;
  document.getElementById("player-hp").textContent = player.hp;
  document.getElementById("enemy-class").textContent = enemy.className;
  document.getElementById("enemy-hp").textContent = enemy.hp;

  document.getElementById("attack-button").addEventListener("click", () => {
    playerAttack();
    if (enemy.hp > 0) {
      enemyAttack();
    }
  });
}

// Ataque del jugador
function playerAttack() {
  const playerDamage = Math.floor(Math.random() * player.attack);
  enemy.hp -= playerDamage;
  updateEnemyStats();
  checkBattleResult();
}

// Ataque del enemigo
function enemyAttack() {
  const enemyDamage = Math.floor(Math.random() * enemy.attack);
  player.hp -= enemyDamage;
  updatePlayerStats();
  checkBattleResult();
}

// Actualizar estadísticas del jugador
function updatePlayerStats() {
  document.getElementById("player-hp").textContent = player.hp;
}

// Actualizar estadísticas del enemigo
function updateEnemyStats() {
  document.getElementById("enemy-hp").textContent = enemy.hp;
}

// Comprobar el resultado de la batalla
function checkBattleResult() {
  if (player.hp <= 0) {
    alert("¡Perdiste! El enemigo te derrotó.");
    resetGame();
  } else if (enemy.hp <= 0) {
    alert("¡Ganaste! Derrotaste al enemigo.");
    resetGame();
  }
}

// Reiniciar el juego
function resetGame() {
  player = null;
  enemy = null;
  document.getElementById("player-class").textContent = "";
  document.getElementById("player-hp").textContent = "";
  document.getElementById("enemy-class").textContent = "";
  document.getElementById("enemy-hp").textContent = "";
  document.getElementById("attack-button").removeEventListener("click", playerAttack);
  initGame();
}

// Iniciar el juego cuando se cargue la página
window.addEventListener("load", initGame);
