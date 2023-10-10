// Constructor para las clases de personajes
function Character(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }
  
  // Clase Guerrero
  function Warrior(name) {
    Character.call(this, name, 100, 10);
    this.className = "Guerrero";
  }
  
  Warrior.prototype = Object.create(Character.prototype);
  
  // Clase Mago
  function Mage(name) {
    Character.call(this, name, 80, 10);
    this.className = "Mago";
  }
  
  Mage.prototype = Object.create(Character.prototype);
  