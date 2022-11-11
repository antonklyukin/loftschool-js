let myObj = {
  firstname: 'Антон',
  lastname: 'Клюкин',
  age: 41,
};

console.log(
  `Имя: ${myObj.firstname}, Фамилия: ${myObj.lastname}, Возраст: ${myObj.age}`
);

console.log(
  `Попытка обращения к неопределенному свойству: ${myObj.profession}`
);

myObj.profession = 'Программист';

console.log(`Добавлено свойство profession: ${myObj.profession}`);
