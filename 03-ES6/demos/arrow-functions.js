// function sumar(a, b) {
//   const resultado = a + b;
//   return resultado;
// }

// const sumar = (a, b) => {
//   const resultado = a + b;
//   return resultado;
// };

// const sumar = (a, b) => {
//   const resultado = a + b;
//   return resultado;
// };

// const sumar = (a, b) => {
//   return a + b;
// };

// const sumar = (a, b) => a + b;

// const nums = [1, 2, 3, 4, 56, 7, 8];

// const pares = nums.filter((num) => num % 2 === 0);

// console.log(pares);

var bob = {
  _name: "Bob",
  _friends: ["Jorge", "Ani", "Nestor"],
  printFriends() {
    this._friends.forEach((friend) =>
      console.log(this._name + " knows " + friend)
    );
  },
};

bob.printFriends();
