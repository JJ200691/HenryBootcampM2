const nums = [5, 72];

const [num1, otraVariable] = nums;

// const num1 = nums[0]
// const otraVariable = nums[1]
// const miVar = nums[2]

console.log(num1);
console.log(otraVariable);

/********************************************** */

const miObjeto = { a: 1, b: 2, c: 3 };

const { a, b, c } = miObjeto;

console.log(a);
console.log(b);
console.log(c);

// const miObjeto = { a: 1, b: 2, c: 3 };

const { a, b, c: miVar } = miObjeto;

console.log(a);
console.log(b);
console.log(miVar);
