// const mySymbol = Symbol();
// const myNewSymbol = Symbol();

// console.log(mySymbol === myNewSymbol);

// const obj = {
//   firstname: 'Сергей',
//   lastname: 'Петров',
// };

// obj.age = 40;

// obj[mySymbol] = 'Привет!'; // Символы при переборе свойтств не выводятся
// obj[myNewSymbol] = 'Еще привет!';

// for (const property in obj) {
//   console.log(property);
// }

// console.log(obj[mySymbol]);
// console.log(obj[myNewSymbol]);

// let myArr = [1, 2, 3, 4];

// function range(from, to) {
//   //Функция-итератор
//   for (let i = from; i <= to; i++) {
//     console.log(i);
//   }
// }

// range(3, 15);

//Sumbol.iterator
// let iterator = {
//   next() {
//     // обязательный метод для объекта итератора
//     return {
//       value: '', //Значение элемента массива (1, 2, 3, 4)
//       done: '', // Флаг окончания итерирования. Пока false, итерирует
//     };
//   },
// };

// let numbers = [1, 2, 3, 4];

// let objectWithIterator = {};

// objectWithIterator[Symbol.iterator] = function () {
//   let i = 0;
//   return {
//     next() {
//       return {
//         value: i,
//         done: i++ === 10,
//       };
//     },
//   };
// };

// for (const number of objectWithIterator) {
//   console.log(number);
// }

let range = function (from, to) {
  let objectWithIterator = {};

  objectWithIterator[Symbol.iterator] = function () {
    let i = from;
    return {
      next() {
        return {
          value: i,
          done: i++ === to + 1,
        };
      },
    };
  };

  return objectWithIterator;
};

for (const number of range(3, 15)) {
  console.log(number);
}
