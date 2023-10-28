// Constructor para crear un objeto Personaje
function Personaje(nombre, clase, nivel, salud, ataque, defensa) {
    this.nombre = nombre;
    this.clase = clase;
    this.nivel = nivel;
    this.salud = salud;
    this.ataque = ataque;
    this.defensa = defensa;
}

// Crear un nuevo personaje usando el constructor
var personaje1 = new Personaje("Aragorn", "Guerrero", 10, 100, 15, 10);
var personaje2 = new Personaje("Legolas", "Arquero", 8, 90, 18, 8);

// Acceder a las propiedades del personaje
console.log("Nombre del personaje 1: " + personaje1.nombre);
console.log("Clase del personaje 2: " + personaje2.clase);
console.log("Nivel del personaje 1: " + personaje1.nivel);
console.log("Salud del personaje 2: " + personaje2.salud);

// Modificar las propiedades del personaje
personaje1.salud -= 10;
personaje2.nivel += 1;

// Mostrar las propiedades modificadas
console.log("Salud del personaje 1 después del ataque: " + personaje1.salud);
console.log("Nivel del personaje 2 después de subir de nivel: " + personaje2.nivel);
