// let myArray = ['Антон', 'Алексей', 'Андрей', 'Кирилл'];

// for (let element of myArray) {
//   console.log(element);
// }

// console.log(`Размер массива: ${myArray.length}`);

// console.log(myArray.push('Александр'));

// console.log(myArray);

// console.log(myArray.pop());

// console.log(myArray);

let author1 = {
  firstname: 'Сергей',
  age: 33,
};

let author2 = {
  firstname: 'Николай',
  age: 45,
};

let author3 = {
  firstname: 'Петр',
  age: 40,
};

let authors = [author1, author2, author3];

for (let i = 0; i < authors.length; i++) {
  console.log(authors[i].firstname);
}
