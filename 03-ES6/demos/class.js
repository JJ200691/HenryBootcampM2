// function Persona(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
// }

// Persona.prototype.saludar = function () {
//   console.log("Hola! Mi nombre es " + this.nombre);
// };

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  saludar() {
    console.log("Hola! Mi nombre es " + this.nombre);
  }
}

const jorge = new Persona("Jorge", "Vega");
console.log(jorge);
jorge.saludar();
