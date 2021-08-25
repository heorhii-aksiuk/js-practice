// Task 1

/* Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару)
 Ця ф-я має повернути ціну замовлення
const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } 
const orderA = { apple: 5, cheese: 1, bread: 3 } 
const orderB = { orange: 10, pork: 2, bread: 1 } */

/* 
1. Объявить функцию
2. Вернуть цену заказа
*/

// const totalPrice = function (order, prices) {
//   let total = 0;

//   for (let product in order) {
//     for (let price in prices) {
//       if (product === price) {
//         total += order[product] * prices[price];
//       }
//     }
//   }
//   return total;
// }

// const productsPrice = { apple: 20, orange: 5, cheese: 12, bread: 23 };
// const orderA = { apple: 5, cheese: 1, bread: 3 };

// totalPrice(orderA, productsPrice); // 181

// Task 2

/* Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. 
Якщо обєкт пустий то повернути true інакше false
isObjectEmpty({}) // true
isObjectEmpty({name: 'user, age: {21}}) // false */


// const isObjectEmpty = function (object) {
//   return Object.keys(object).length === 0
// };

const isObjectEmpty = object => Object.keys(object).length === 0;


console.log(isObjectEmpty({})) // true
console.log(isObjectEmpty({name: 'user', age: 21})) // false
