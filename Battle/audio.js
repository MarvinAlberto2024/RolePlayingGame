const audio = new Audio("x2mate.com - Hollow Knight OST - Dirtmouth (128 kbps).mp3"); // Reemplaza "fondo.mp3" con la ruta de tu archivo de audio

function reproducirAudio() {
  audio.loop = true; // Reproducir el audio en un bucle
  audio.play();
}

function detenerAudio() {
  audio.pause();
}
