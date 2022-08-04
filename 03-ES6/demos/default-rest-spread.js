// function f(x, y = 12) {
//   console.log(x);
//   console.log(y);
//   //                ↑
//   // y is 12 if not passed (or passed as undefined)

//   return x + y;
// }
// console.log(f(10, 20));
// console.log(f(10));

// function f(x, ...y) {
//   // y is an Array

//   console.log(y);

//   console.log(y);
//   return x * y.length;
// }
// console.log(f(3, 1, 2, 3, 4, 9, "Hola", true));

// function f(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
//   return x + y + z;
// }
// // Pass each elem of array as argument
// f(...[1, 2, 3]);

// console.log(...[1, 2, 3]);

// const miArray = [1, 85, "Hola", false];

// // const miArray2 = miArray;
// const miArray2 = [...miArray];

// miArray2.push(5);

// console.log(miArray);

const miObjeto = { a: "a", b: "b" };

console.log(miObjeto);

const miObjeto2 = { ...miObjeto, a: "Hola", d: false };
console.log(miObjeto2);

miObjeto2["c"] = "c";
console.log(miObjeto2);

console.log(miObjeto);
