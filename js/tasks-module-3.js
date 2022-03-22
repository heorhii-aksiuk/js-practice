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

// const SIZES = [
//   { type: 'small', price: 15, cal: 50, time: 7 },
//   { type: 'medium', price: 20, cal: 75, time: 10 },
//   { type: 'big', price: 25, cal: 100, time: 15 },
// ]
// const small = SIZES.find((size) => size.type === 'small')
// const medium = SIZES.find((size) => size.type === 'medium').map()
// const big = SIZES.find((size) => size.type === 'big')

// const SAUCES = [
//   { type: 'mustard', price: 3, cal: 5, time: 1 },
//   { type: 'ketchup', price: 4.2, cal: 20, time: 1.5 },
//   { type: 'bolognese', price: 7.5, cal: 50, time: 3 },
// ]
// const mustard = SAUCES.find((size) => size.type === 'mustard')
// const ketchup = SAUCES.find((size) => size.type === 'ketchup')
// const bolognese = SAUCES.find((size) => size.type === 'bolognese')

// const STUFFING = [
//   { type: 'cheese', price: 6.5, cal: 45, time: 2 },
//   { type: 'chicken', price: 9.3, cal: 30, time: 5.1 },
//   { type: 'beacon', price: 10, cal: 70, time: 6 },
//   { type: 'tomato', price: 12.1, cal: 4, time: 5 },
// ]
// const cheese = STUFFING.find((size) => size.type === 'cheese')
// const chicken = STUFFING.find((size) => size.type === 'chicken')
// const beacon = STUFFING.find((size) => size.type === 'beacon')
// const tomato = STUFFING.find((size) => size.type === 'tomato')

// const pizza = {
//   size: medium,
//   sauce: ketchup,
//   stuffing: [],

//   changeSauce(newSauce) {
//     return (this.sauce = newSauce)
//   },

//   addStuffing(addedStuffing) {
//     if (this.stuffing.length === 0) return 'Stuffing is already added'
//     this.stuffing.push(addedStuffing)
//   },
// }

// console.log(pizza)
// console.log(pizza.size)

// console.log(pizza.size.type)
// pizza.changeSauce(mustard)
// console.log(pizza.sauce.type)
// pizza.addStuffing(cheese)
// pizza.addStuffing(chicken)

// console.table(pizza)

// Task 3
/* Створити обєкт піци з полями і методами
В обєкті має бути такі поля і методи:
1. DONE! Поле для збереження розміру піци
2. DONE! Поле для збереження списку добавок
3. DONE! Поле для збереження списку соусів
4. DONE! Метод для додавання добавки (Можна додати добавку якщо вона відсутня, інакше показувати помилку)
5. DONE! Метод для додавання соусу (Можна додати соус якщо він відсутній, інакше показувати помилку)
6. DONE! Метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці, інакше показувати помилку)
7. DONE! Метод для видалення соусу (Можна видалити соус якщо він присутній в піці, інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
8. DONE! Метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
9. DONE! Метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
10. DONE! Метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
11. DONE! Метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
12. DONE! Метод що показує час приготуванни в хвилинах в залежності від складності піци
13. DONE! Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу))
*/

const SIZES = {
  BIG: { name: 'big', price: 25, cal: 100, time: 15 },
  MEDIUM: { name: 'medium', price: 15, cal: 75, time: 10 },
  SMALL: { name: 'small', price: 15, cal: 50, time: 7 },
}
const STUFFING = {
  CHEESE: { name: 'cheese', price: 6.5, cal: 45, time: 2 },
  BEACON: { name: 'beacon', price: 10, cal: 70, time: 6 },
  TOMATO: { name: 'tomato', price: 12.1, cal: 4, time: 5 },
  CHICKEN: { name: 'chicken', price: 9.3, cal: 30, time: 5.1 },
}
const SAUCES = {
  MUSTARD: { name: 'mustard', price: 3, cal: 5, time: 1 },
  KETCHUP: { name: 'ketchup', price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { name: 'bolognese', price: 7.5, cal: 50, time: 3 },
}

const pizza = {
  size: SIZES.MEDIUM,
  stuffing: [],
  souces: [],

  changeSize(newSize) {
    this.size = newSize
    return `Pizza size changing to ${newSize.name}.`
  },

  addStuffing(stuffing) {
    if (this.stuffing.find(({ name }) => name === stuffing.name)) {
      return `Stuffing ${stuffing.name} is alredy added!`
    }
    this.stuffing.push(stuffing)
    return `Stuffing ${stuffing.name} added.`
  },

  addSouce(souce) {
    if (this.souces.find(({ name }) => name === souce.name)) {
      return `Souce ${souce.name} is alredy added!`
    }
    this.souces.push(souce)
    return `Souce ${souce.name} added.`
  },

  deleteStuffing(stuffing) {
    if (this.stuffing.length === 0) {
      return `Error! Stuffing is empty!`
    }
    const index = this.stuffing.findIndex(({ name }) => name === stuffing.name)

    if (index === -1) {
      return `Error! Stuffing ${stuffing.name} is missing!`
    }
    this.stuffing.splice(index, 1)
    return `Stuffing ${stuffing.name} is deleted.`
  },

  deleteSouce(souce) {
    if (this.souces.length === 0) {
      return `Error! Souces is empty!`
    }
    const index = this.souces.findIndex(({ name }) => name === souce.name)

    if (index === -1) {
      return `Error! Souce ${souce.name} is missing!`
    }
    this.souces.splice(index, 1)
    return `Souce ${souce.name} is deleted.`
  },

  getPrice() {
    const sizePrice = this.size.price
    const stuffingPrice =
      this.stuffing.length > 0
        ? this.stuffing
            .map(({ price }) => price)
            .reduce((acc, elem) => acc + elem)
        : 0
    const soucesPrice =
      this.souces.length > 0
        ? this.souces
            .map(({ price }) => price)
            .reduce((acc, elem) => acc + elem)
        : 0
    const totalPrice = (sizePrice + stuffingPrice + soucesPrice).toFixed(2)
    return `Total price: ${totalPrice}$.`
  },

  geCalories() {
    const sizeCalories = this.size.cal
    const stuffingCalories =
      this.stuffing.length > 0
        ? this.stuffing.map(({ cal }) => cal).reduce((acc, elem) => acc + elem)
        : 0
    const soucesCalories =
      this.souces.length > 0
        ? this.souces.map(({ cal }) => cal).reduce((acc, elem) => acc + elem)
        : 0
    const totalCalories = sizeCalories + stuffingCalories + soucesCalories
    return `Total calories: ${totalCalories}.`
  },

  getCookingTime() {
    const sizeTime = this.size.time
    const stuffingTime =
      this.stuffing.length > 0
        ? this.stuffing
            .map(({ time }) => time)
            .reduce((acc, elem) => acc + elem)
        : 0
    const soucesTime =
      this.souces.length > 0
        ? this.souces.map(({ time }) => time).reduce((acc, elem) => acc + elem)
        : 0
    const totalTime = sizeTime + stuffingTime + soucesTime
    return `Total cooking time: ${totalTime} minutes.`
  },

  isValid() {
    const valid =
      this.size && this.stuffing.length > 0 && this.souces.length > 0
    if (!valid) console.log(this.getInfo())
    return valid
  },

  getInfo() {
    let infoMessage = 'Error!'

    if (!this.size) infoMessage += ' Size is empty!'
    if (this.stuffing.length === 0) infoMessage += ' Stuffing is empty!'
    if (this.souces.length === 0) infoMessage += ' Souces is empty!'

    const valid =
      this.size && this.stuffing.length > 0 && this.souces.length > 0

    if (valid) {
      const sizeInfo = `Pizza size: ${this.size.name}.`
      const stuffingInfo = `Stuffing: ${this.stuffing
        .map(({ name }) => name)
        .join(', ')}.`
      const soucesInfo = `Souces: ${this.souces
        .map(({ name }) => name)
        .join(', ')}.`

      infoMessage = `
      ${sizeInfo}
      ${stuffingInfo} 
      ${soucesInfo} 
      ${this.getCookingTime()} 
      ${this.geCalories()} 
      ${this.getPrice()}
      `
    }
    return infoMessage
  },
}

console.table(pizza)
console.log(pizza.size)
console.log(pizza.stuffing)
console.log(pizza.souces)

console.log(pizza.changeSize(SIZES.BIG))

console.log(pizza.deleteStuffing(STUFFING.CHEESE))
console.log(pizza.deleteSouce(SAUCES.MUSTARD))

console.log(pizza.addStuffing(STUFFING.BEACON))
console.log(pizza.addStuffing(STUFFING.BEACON))
console.log(pizza.addStuffing(STUFFING.CHEESE))
console.log(pizza.addStuffing(STUFFING.TOMATO))
console.log(pizza.addStuffing(STUFFING.CHICKEN))

console.log(pizza.deleteStuffing(STUFFING.CHEESE))
console.log(pizza.deleteStuffing(STUFFING.CHEESE))

console.log(pizza.addSouce(SAUCES.BOLOGNESE))
console.log(pizza.addSouce(SAUCES.BOLOGNESE))
console.log(pizza.addSouce(SAUCES.KETCHUP))
console.log(pizza.addSouce(SAUCES.MUSTARD))

console.log(pizza.deleteSouce(SAUCES.MUSTARD))
console.log(pizza.deleteSouce(SAUCES.MUSTARD))

console.log(pizza.size)
console.log(pizza.stuffing)
console.log(pizza.souces)

console.log(pizza.getPrice())
console.log(pizza.geCalories())
console.log(pizza.getCookingTime())
console.log(pizza.getInfo())
console.log(pizza.isValid())
