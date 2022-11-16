let myArr = [1, 2, 3, 4];
let myObj = { firstName: 'Сергей', lastName: 'Петров', age: 41 };

// Задание 2.1
// -----------

// myArr.forEach((el) => {
//   console.log(el);
// });

// function forEach(arr, cb) {
//   for (let i of arr) {
//     cb(i);
//   }
// }

// forEach(myArr, (i) => console.log(i));

// Задание 2.2
// -----------

// let myArr2 = myArr.map((i) => {
//   return i ** 2;
// });

// function map(arr, cb) {
//   let modifiedArr = [];
//   for (let i of arr) {
//     modifiedArr.push(cb(i));
//   }
//   return modifiedArr;
// }

// let myArr2 = map(myArr, (el) => el ** 2);

// console.log(myArr2);

//TODO
// Задание 2.3 //Реализация reduce
// -----------

// let result = myArr.reduce((sum, current) => {
//   return sum + current;
// }, 0);

// console.log(result);

// Задание 2.4
// -----------

// function upperProps(obj) {
//   uppedArr = [];
//   for (property in obj) {
//     uppedArr.push(property.toUpperCase());
//   }
//   return uppedArr;
// }

// console.log(upperProps(myObj));

function isAllTrue(arr, cb) {
  for (i of arr) {
    if (!cb(i)) {
      return false;
    }
  }
  return true;
}

console.log(isAllTrue([1, 5, 11], (i) => i < 10));
