// task#1
// Створити числовий масив та проініціалізувати його
// const numbers = [];
// const amountNumbers = 7;
// for (let i = 0; i < amountNumbers; i++) {
//   numbers.push(Math.floor(Math.random() * 10));
// }
// console.log(numbers);
// // Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// const lastEl = numbers.pop();
// const firstEl = numbers.shift();
// numbers.push(25);
// numbers.unshift(11);

// //Вивести розмір масиву.
// console.log(numbers.length);
// //Зробити копію масиву.
// const numbers2 = [...numbers];
// // Вивести елементи з парними індексами.
// for (const index in numbers) {
//   if (index % 2 === 0 && index >= 0) {
//     console.log(index);
//   }
// }
// Знайти добуток елементів масиву.

// function multArray(arr) {
//   let mult = 1;
//   for (let i = 0; i < arr.length; i++) {
//     mult *= arr[i];
//   }
//   return mult;
// }
// console.log(multArray(numbers));

// Задано масив з описом телефонів з полями id, brand, model, color, price, RAM

// const phones = [
//   {
//     id: 1,
//     brand: "Apple",
//     model: "iPhone 13",
//     color: "Black",
//     price: 999,
//     RAM: "4GB",
//   },
//   {
//     id: 2,
//     brand: "Samsung",
//     model: "Galaxy S21",
//     color: "White",
//     price: 849,
//     RAM: "8GB",
//   },
//   {
//     id: 3,
//     brand: "Google",
//     model: "Pixel 6",
//     color: "Sorta Seafoam",
//     price: 699,
//     RAM: "8GB",
//   },
//   {
//     id: 4,
//     brand: "OnePlus",
//     model: "9 Pro",
//     color: "Morning Mist",
//     price: 969,
//     RAM: "12GB",
//   },
//   {
//     id: 5,
//     brand: "Xiaomi",
//     model: "Mi 11",
//     color: "Horizon Blue",
//     price: 749,
//     RAM: "8GB",
//   },
//   {
//     id: 6,
//     brand: "Oppo",
//     model: "Find X3 Pro",
//     color: "Gloss Black",
//     price: 1149,
//     RAM: "12GB",
//   },
//   {
//     id: 7,
//     brand: "Sony",
//     model: "Xperia 1 III",
//     color: "Frosted Black",
//     price: 1299,
//     RAM: "12GB",
//   },
//   {
//     id: 8,
//     brand: "Nokia",
//     model: "8.3 5G",
//     color: "Polar Night",
//     price: 649,
//     RAM: "8GB",
//   },
//   {
//     id: 9,
//     brand: "Huawei",
//     model: "P40 Pro",
//     color: "Silver Frost",
//     price: 999,
//     RAM: "8GB",
//   },
//   {
//     id: 10,
//     brand: "Asus",
//     model: "ROG Phone 5",
//     color: "Phantom Black",
//     price: 999,
//     RAM: "16GB",
//   },
// ];
// // Сформувати розмітку для карток.
// for (let i = 0; i < phones.length; i++) {
//   document.write(`
// <article>
// <h2>${phones[i].brand}</h2>
// <p>${phones[i].model}</p>
// <p>${phones[i].color}</p>
// <p>${phones[i].RAM}</p>
// <p>${phones[i].price}</p>
// </article>
// `);
// }
// // Знайти середню ціну телефонів.

// function calcAveragePrice(pricePhones) {
//   let sum = 0;
//   for (let i = 0; i < pricePhones.length; i++) {
//     sum += pricePhones[i].price;
//   }
//   return sum / pricePhones.length;
// }
// console.log(calcAveragePrice(phones));

// // Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10)

// // const numbers = [-1, 5, 0, 9, -10];

// const notnullNumbers = numbers.filter(newArrNumbers);
// function newArrNumbers(n) {
//   return n !== 0;
// }
// console.log(notnullNumbers);

// Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

const numbers = [99, 5, 0, 9, 30];
const divideNumbers = numbers.map((numbers) => ({
  ...numbers,
  numbers: numbers / 100,
}));
console.log(divideNumbers);

// // Вивести елементи масиву, зведені у куб. // forEach

// // const numbers = [3, 5, 2, 1, 4];

// numbers.forEach((num) => {
//   let cube = num ** 3;
//   console.log(cube);
// });

// Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
// або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function findSqrIndex(element) {
//   return element ** 2 === 100;
// }
// console.log(numbers.findIndex(findSqrIndex));

// const findSqrIndex = numbers.findIndex((element) => element ** 2 === 100);
// console.log(findSqrIndex);
// numbers.splice(findSqrIndex, 1);
// console.log(numbers);

// // *Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
// const evenNumbers = numbers.every((num) => num % 2 === 0);
// console.log(evenNumbers);

// // Перевірити, чи є у масиві бодай один від'ємний елемент. // some
// const negNumbers = numbers.some((num) => num < 0);
// console.log(negNumbers);
