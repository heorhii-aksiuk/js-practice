// console.log(2 + 2);

// const userName = 'Heorhii';

// console.log(userName);

// let age = 28;

// console.log(age);

// let about = `I am ${userName} and I ${age} years old`;
// console.log(about);

// console.log(age);

// const hasChildren = false;
// const hasJob = true;

// console.log(typeof hasChildren);
// console.log(typeof age);

// // alert(about);

// // const subAccess = 'Вы уверены, что хотите продлить подписку?';

// // console.log(confirm(subAccess));

// // let userAge = prompt('Пожалуйста, укажите свой возраст');

// // console.log(userAge);

// console.log(3 * 7);

// console.log(100 % 32);

// const x = 30;
// const y = 12;
// const z = 36;

// console.log(x > y);
// console.log((x * y) === z);
// console.log(x * y);
// console.log((x / 3) === true);

// const valueA = '5';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// let numberAndString = Number('12and23');
// console.log(Number.parseInt(numberAndString));

// console.log(Number.isNaN(numberAndString));

// console.log(0.1 + 0.2);
// console.log((0.1 *10 + 0.2 * 10) / 10);

// console.log(Math.max( x, y, z));

// console.log(Math.random());
// console.log(Math.random() * (100 - 1) + 1);

// function calculateTotalPrice(order) {
//   let total = 0;

//   for ( let i = 0; i < order.length; i += 1){
//   console.log(order[i]);
//   total = total + order[i];
//     console.log(total);
//   }
// console.log(total);
// return total;
// }

// calculateTotalPrice([2, 3, 6, 4])

// 1. Создать со строки массив
// 2. Высчитать длинну каждого элемента в массиве
// 3. Сравнить длинну каждого элемента с первым элементом который будет считаться изначально самым длинным
// 4. Если длинна элемента больше, то перезаписать значение большего элемента

// function findLongestWord(string) {
//   let toString = string.split(' ');

//   for (let i = 0; i < toString.length; i += 1 ) {
//   let longestWord = toString[0];

//     if (toString[i].length <= longestWord.length) {
//       continue;

//     } else {

//     longestWord = toString[i];

//     }

//   return console.log(longestWord);
//   }
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (let i = 0; i < toString.length; i += 1 ) {
//     if (toString[i].length > longestWord.length) {
//     longestWord = toString[i];
//     return console.log(longestWord);
//     }

//   }

// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (const word of toString) {
//     if (word <) {
//     longestWord = toString[i];
//     console.log(toString[i]);
//     return console.log(toString[i]);
//     }
//   }
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (word of toString) {
//     if (word.length > longestWord.length) {
//     longestWord = word;

//     }
//   }
//   return longestWord;
// }

// Сравнить каждый элемет массива с праметром валью
// По умолчанию нужно саздать пустой массив
// Если элемент больше чем валью, то запушить в массив этот элемент

// function filterArray(numbers, value) {
//   const biggerNumber = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value){
//       biggerNumber.push(numbers[i]);
//     }
//   }
// }

//  filterArray([12, 24, 8, 41, 76], 38);
// //  возвращает [41, 76]

// Перебрать массив 1 через фор, и сравнить есть ли в массиве 2 элемент массива 1
// если есть, запушить в новый массив

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for ( let i = 0; i < array1.length; i += 1 ){

//     if ( array2.includes(array1[i])) {

//     newArray.push(array1[i]);
//     }
//   }
//   return newArray;

// }

// function getEvenNumbers(start, end) {
//   const newArrey = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArrey.push(i);
//     }
//   }

//   return newArrey;
//   }

// getEvenNumbers(3, 11)

// function includes(array, value) {

//   for( let element of array) {

//     if (element === value){
//     return true;
//     }
//   }
//   return console.log(includes());
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//   	for (let pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//       	return console.log(onSuccess(pizzaName));
//       }

//     }
//     return console.log(onError(`В ассортименте нет пиццы с названием ${pizzaName}`));
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {

//       if (this.pizzas.includes(pizzaName)) {
//       	return console.log(onSuccess(pizzaName));
//       }

//     return console.log(onError(`В ассортименте нет пиццы с названием ${pizzaName}`));
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// 	return console.log(`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`);
// }

// 	const messages = [];

// 	for( let i = 0; i < orders.length; i += 1) {
//     let dish = orders.dish[i];
//     let email = orders.email[i];
//   	let pushMessage = composeMessage.call([i+1]);
//     console.log(pushMessage);
//      messages.push(pushMessage);
// 	}

//   const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {

//   return console.log(`Готовим ${orders.dish[i]} для ${orders.email}. Ваш заказ ${position}-й в очереди.`)
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {

//   composeMessage.call(orders[i +1])

//   messages.push(composeMessage(i +1));
// }

// Запушить сообщение в переменную меседж
// перебрать массив
// записать в сообщение данные

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// const messages = [];

// function composeMessage(position) {
//   messages.push(`Готовим ${this[position - 1].dish} для ${this[position - 1].email}. Ваш заказ ${position}-й в очереди.`)
// }

// for (let i = 0; i < orders.length; i += 1) {
//   composeMessage.call(orders,(i + 1))
// }

// console.log(messages)

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// function Storage (items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function() {
//   return this.items;
// }

// Storage.prototype.addItem = function(newItem) {
//   this.items.push(newItem);
// }

// Storage.prototype.removeItem = function(item ) {
//   this.items.splice(this.items.indexOf(item), 1);
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]ы", "Антигравитатор", "Дроид"]

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

// class Storage {
//   constructor(items) {
//     this.items = items;
//   };

//   getItems() {
//     return this.items;
//   };

//   addItem(newItem) {
//     this.items.push(newItem);
//   };

//   removeItem(item) {
//     const itemIndex = this.items.indexOf(item);
//     this.items.splice(itemIndex, 1);
//   };
// };
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// class StringBuilder {

//   #value;

//   constructor(baseValue) {
//     this.#value = baseValue;
//   };

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// class Car {
//   model;
//   price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.model;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

// numbers.forEach(number => {
//   if(number > value)
// 	return filteredNumbers.push(number)});

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

// firstArray.forEach(firstArrayElement => {
// 	if (secondArray.includes(firstArrayElement)) {
//     commonElements.push(firstArrayElement)
//       }
// })

//   return console.log(commonElements);
//   // Пиши код выше этой строки
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// 6.9

// function changeEven(numbers, value) {
//   const changeNumbers = [];

//   numbers.forEach(number => number % 2 === 0
//     ? changeNumbers.push(number + value)
//     : changeNumbers.push(number));

//   return changeNumbers;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// 6.14

// Пиши код ниже этой строки
// const getUserEmails = users => {
//   return users.map(user => user.email)

//   };
// Пиши код выше этой строки

// 6.16

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.map(book => book.genres);
// const uniqueGenres = allGenres.filter((ganre, index, array) => array.indexOf(ganre) === index);

// 6.17

/*   Используя метод filter() дополни код так, чтобы:
В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating)
 больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) 
которое совпадает со значением в переменной AUTHOR.
 */
//   const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

// 6.18

// const getUsersWithEyeColor = (users, color) => {
//  users.filter(({eyeColor, name }) => (eyeColor === color) {
//  	return name })

// };

// const getUsersWithEyeColor = (users, color) => {
//  users.filter(user => if (user.eyeColor === color)
//      user.name };

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

/* Дополни функцию getUsersWithEyeColor(users, color) так, 
чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) 
совпадает со значением параметра color. */

// const getUserEmails = users => {
//   return users.map(user => user.email)

//   };

// console.log(getUserEmails(users))

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => {
//     if(user.eyeColor === color){
//       return [user.name]
//     }})

// };

// console.log(getUsersWithEyeColor(users, 'brown'))
// console.log()

// const getUsersWithAge = (users, minAge, maxAge) => {
//  const result = users.filter(user => user.age > minAge && user.age <=maxAge)
// return result
// };

// console.log(getUsersWithAge(users, 20, 30))

// const getFriends = (users) => {
//   return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index)
// };

// console.log(getFriends(users))

// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive)
// };

// console.log(getActiveUsers(users))

const userData = {
  name: 'Макс',
};

function birthdayMessage(name) {
  return `С Днём Рождения, ${name}!`;
}

alert(birthdayMessage(userData.name));
