let numbers = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

let [first, ...rest] = numbers; //три точки - rest - оператор

console.log(first, rest);

let sum = function (first, second, ...rest) {
  // rest-arguments
  console.log(first, second, rest);
};

sum(...numbers); //spread - оператор

let concat_array = [...numbers, ...numbers2];

console.log(concat_array);
