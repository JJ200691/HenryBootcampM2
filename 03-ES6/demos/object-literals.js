function miFuncion(nombre, apellido, edad, mail, direccion) {
  const ciudad = "Posadas";
  const miFuncion = () => {
    console.log("Hola");
  };
  return {
    nombre,
    apellido,
    edad,
    mail,
    direccion,
    ciudad,
    miFuncion,
  };
}

console.log(
  miFuncion("Carlos", "Ludueña", 20, "mail@mail.com", "calle falsa 123")
);
