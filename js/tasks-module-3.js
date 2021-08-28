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

// const isObjectEmpty = object => Object.keys(object).length === 0;


// console.log(isObjectEmpty({})) // true
// console.log(isObjectEmpty({name: 'user', age: 21})) // false

// Task 3

/* Створити обєкт піци з полями і методами

В обєкті має бути такі поля і методи:

1. DONE! Поле для збереження розміру піци
2. DONE! Поле для збереження списку добавок
3. DONE! Поле для збереження списку соусів
4. Метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
5. Метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати)
6. Метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
7. Метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
8. Метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
9. Метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
10. Метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
11. Метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
12. Метод що показує час приготуванни в хвилинах в залежності від складності піци
13. Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
Створити всі методи і перевірити чи вони працюють 

Сделать так, чтобы добавки добавлялись отдельно, а их ключи отдельно, или хз
*/

const SIZES = [
  { type: 'small', price : 15, cal: 50, time: 7 },
  { type: 'medium', price : 20, cal: 75, time: 10 },
  { type: 'big', price: 25, cal: 100, time: 15 },
];
const SAUCES = [
  { type: 'mustard', price: 3, cal: 5, time: 1 },
  { type: 'ketchup', price : 4.2, cal: 20, time: 1.5 },
  { type: 'bolognese', price : 7.5, cal: 50, time: 3 },
]
const STUFFING = [
  { type: 'cheese', price : 6.5, cal: 45, time: 2 },
  { type: 'chicken', price : 9.3, cal: 30, time: 5.1 },
  { type: 'beacon', price : 10, cal: 70, time: 6 },
  { type: 'tomato', price : 12.1, cal: 4, time: 5 },
];

const pizza = {
  size: SIZES.find(size => size.type === 'medium'),
  sauce: SAUCES.find(sauce => sauce.type === 'ketchup'),
  stuffing: [],
};

console.log(pizza);
console.table(pizza);
console.log(pizza.size.type);

