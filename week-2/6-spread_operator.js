let numbers = [1, 2, 3, 4];

let sum = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

let res = sum(...numbers); //три точки - spread-оператор

console.log(res);
