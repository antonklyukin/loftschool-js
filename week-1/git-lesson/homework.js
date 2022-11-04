// function returnFirstArgument(a) {
//   return a;
// }

// console.log(returnFirstArgument(10));
// console.log(returnFirstArgument('Привет!'));

// function returnSumOfTwoArguments(a, b = 100) {
//   return a + b;
// }

// console.log(returnSumOfTwoArguments(10, 20));
// console.log(returnSumOfTwoArguments(10));

// function fn() {
//   return 'Привет из функции!';
// }

// function returnFnResult(fn) {
//   return fn();
// }

// console.log(returnFnResult(fn));

// function returnCounter(i) {
//   counter = i;
//   function incrementCounter() {
//     return counter++;
//   }
//   return incrementCounter;
// }

// let fn = returnCounter(10);

// console.log(fn());
// console.log(fn());
// console.log(fn());

// function returnArgumentsInArray(...arguments) {
//   return arguments;
// }

// console.log(returnArgumentsInArray(1, 2, 3));

// 1.6*
//Rest operator - остаточные параметры
function sumArgs(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

function bindFunction(fn, ...args) {
  let myFunc = function () {
    return fn(...args);
  };
  return myFunc;
}

let newSum = bindFunction(sumArgs, 1, 2, 3);

console.log(newSum());
