const audio = new Audio("x2mate.com - Hollow Knight OST - City of Tears (128 kbps).mp3"); 

function reproducirAudio() {
  audio.loop = true; 
  audio.play();
}

function detenerAudio() {
  audio.pause();
}