// function div(a, b) {
//   if (b === 0) {
//     console.log('Ошибка деления на ноль');
//   } else {
//     return a / b;
//   }
// }

// let result = div(10, 0);

// if (result !== undefined) {
//   console.log(result);
// }

// try {
//   console.log('До');
//   throw new Error('Ошибка!');
//   console.log('После');
// } catch (e) {
//   console.log(e.message);
// }

function div(a, b) {
  try {
    if (b < 0) {
      throw new Error('b должен быть положительным числом!');
    } else if (b === 0) {
      throw new Error('На ноль делить нельзя!');
    } else if (b == undefined) {
      throw new Error('b должен быть передан!');
    } else if (!Number.isFinite(b)) {
      throw new Error('b должен быть числом!');
    }

    return a / b;
  } catch (e) {
    console.log(e.message);
  }
}

let result = div(10, 0);

if (result != undefined) {
  console.log(result);
}
