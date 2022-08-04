function miFuncion(nums) {
  console.log(nums);
  //                                         ↑
  var numero = 50;
  // MUCHAS COSAS

  // RECORRER EL ARRAY Y GUARDAR LOS NROS PARES EN UN NUEVO ARRAY
  const pares = [];
  for (let i = 0; i < nums.length; i++) {
    const numero = nums[i];
    //
    if (numero % 2 === 0) {
      pares.push(numero);
    }
    console.log(i);
    console.log(numero);
  }

  console.log(numero);

  console.log(pares);
  return pares;
}

miFuncion([1, 2, 3, 4, 10, 13, 15]);

//********************************************************************* */

// var variableConVar = "variable con var";
// let variableConLet = "variable con let";
// const variableConConst = "variable con const";

// console.log(variableConVar);
// console.log(variableConLet);
// console.log(variableConConst);
//********************************************************************* */
// {
//   var variableConVar = "variable con var";
//   let variableConLet = "variable con let";
//   const variableConConst = "variable con const";
// }

// console.log(variableConVar); // variable con var
// // console.log(variableConLet); // variable con let // undefined
// console.log(variableConConst);
//********************************************************************* */

// var nombre = "Ani";

// console.log(nombre);

// var nombre = "Jorge";

// console.log(nombre);
//********************************************************************* */

// let nombre = "Ani";

// console.log(nombre);

// let nombre = "Jorge";

// console.log(nombre);
//********************************************************************* */

// const nombre = "Jorge";

// console.log(nombre);

// nombre = "Ani";
//********************************************************************* */

// const nums = [1, 2, 3];
// console.log(nums);

// nums.push(5);

// console.log(nums);
//********************************************************************* */

// const persona = {
//   nombre: "Jorge",
//   apellido: "Vega",
// };

// console.log(persona);
// console.log(persona.nombre);

// persona["edad"] = 30;

// console.log(persona);

// persona["edad"] = 20;

// console.log(persona);
//********************************************************************* */
