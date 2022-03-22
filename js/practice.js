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

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

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

// const userData = {
//   name: 'Макс',
// };

// function birthdayMessage(name) {
//   return `С Днём Рождения, ${name}!`;
// }

// alert(birthdayMessage(userData.name));

// let message = ('b' + 'a' + +'a' + 'a').toLowerCase();

// console.log(someNumber);

// var someNumber = 123;

// // console.log(someString);

// let someString;

// console.log(CONST_NUMBER);

// someString = 'test';

// const CONST_NUMBER = 45;

// function someFunction() {

//   return CONST_NUMBER;
// }

// console.log(someFunction());

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 1);

// console.log(summ); //

// const songs = [
//   {
//     id: 1,
//     name: 'Curl of the Burl',
//     artist: 'Mastodon',
//   },
//   {
//     id: 2,
//     name: 'Oblivion',
//     artist: 'Mastodon',
//   },
//   {
//     id: 3,
//     name: 'Flying Whales',
//     artist: 'Gojira',
//   },
//   {
//     id: 4,
//     name: "L'Enfant Sauvage",
//     artist: 'Gojira',
//   },
// ];

// const obj = songs.reduce((acc, currValue) => {
//   const artist = currValue.artist;
//   const artistCount = acc[artist] ? acc[artist] + 1 : 1;
//   console.log(acc);

//   return {
//     ...acc,
//     [artist]: artistCount,
//   };
// }, {});

// function foo () {
// 	console.log("Simple function call");
// 	console.log(this === window);
// }

// foo();	//prints true on console
// console.log(this === window) //Prints true on console.
// console.log(this);

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName();  // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName();  // Prints Name: Paul Adams

// function foo () {
// 	'use strict';
// 	console.log("Simple function call")
// 	console.log(this === window);
// }

// let user = {
// 	count: 10,
// 	foo: foo,
// 	foo1: function() {
// 		console.log(this === window);
// 	}
// }

// user.foo()  // Prints false because now “this” refers to user object instead of global object.
// let fun1 = user.foo1;
// fun1() // Prints true as this method is invoked as a simple function.
// user.foo1()  // Prints false on console as foo1 is invoked as a object’s method

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName(); // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName(); // Prints Name: Paul Adams

// person.displayName.call(person2); // Here we are setting value of this to be person2 object
// //Prints Name: Paul Adams

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName(); // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName(); // Prints Name: Paul Adams

// let person2Display = person.displayName.bind(person2);  // Creates new function with value of “this” equals to person2 object
// person2Display(); // Prints Name: Paul Adams

// function multiply(p, q, callback) {
// 	callback(p * q);
// }

// let user = {
// 	a: 2,
// 	b:3,
// 	findMultiply: function() {
// 		multiply(this.a, this.b, function(total) {
// 			console.log(total);
// 			console.log(this === window);
// 		})
// 	}
// }

// user.findMultiply();
//Prints 6
//Prints true

// function checkStorage(available, ordered) {
//   let message;

//   if (!!ordered) return message;
// }

// const ordered = 0;
// const orderedBoolian = !!ordered;
// console.log(orderedBoolian);

// const array = [1, 2, 5, 7, 3, 6];

// function getMedian(array) {
//   const sum = array.reduce((acc, elem) => acc + elem);
//   return sum / array.length;
// }

// console.log(getMedian(array));

// function makeTask(data) {
//   const completed = false
//   const category = 'General'
//   const priority = 'Normal'

//   return {
//     category,
//     priority,
//     completed,
//     ...data,
//   }
// }

// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }))

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName)
//     this.books.splice(index, 1, newName)
//   },
// }

// bookShelf.updateBook('Haze', 'Dungeon chronicles')

// console.log(bookShelf.books)

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`
//       }
//     }
//     this.potions.push(newPotion)
//   },

//   removePotion(potionName) {
//     let potionIndex

//     for (let potion of this.potions) {
//       if (potion.name === potionName) {
//         potionIndex = this.potions.indexOf(potion)
//       }
//     }

//     if (potionIndex === undefined) {
//       return `Potion ${potionName} is not in inventory!`
//     }
//     this.potions.splice(potionIndex, 1)
//   },

//   updatePotionName(oldName, newName) {
//     let potionIndex

//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potionIndex = this.potions.indexOf(potion)
//         this.potions[potionIndex].name = newName
//       }
//     }

//     if (potionIndex === undefined) {
//       return `Potion ${potionName} is not in inventory!`
//     }
//   },
// }

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions
//   },

//   addPotion(newPotion) {
//     if (this.potions.find(({ name }) => name === newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`
//     }
//     this.potions.push(newPotion)
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(
//       ({ name }) => name === potionName,
//     )

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`
//     }
//     this.potions.splice(potionIndex, 1)
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex(({ name }) => name === oldName)

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`
//     }
//     this.potions[potionIndex].name = newName
//   },
// }

// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })
// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }))
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }))

// console.log(atTheOldToad.removePotion('Invisibility'))
// console.log(atTheOldToad.removePotion('Invisibility'))
// atTheOldToad.removePotion('Speed potion')
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 })
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')

// console.log(atTheOldToad.getPotions())

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//     } else {
//       return onSuccess(pizzaName)
//     }
//   },
// }

// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`
// }

// function onOrderError(error) {
//   return `Ошибка! ${error}`
// }

// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError))
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError))
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError))
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError))

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ]

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = []

// for (let i = 0; i < orders.length; i += 1) {
//   const message = composeMessage.call(orders[i], i + 1)
//   messages.push(message)
// }

// console.log(messages)

// function findNumbers(array, number) {
//   const output = []
//   array.reduce((acc, elem) => {
//     if (acc === 0) {
//       console.log(acc)
//       acc += elem
//       console.log(acc)
//     }

//     console.log(acc + elem === number)
//     if (acc + elem === number) {
//       console.log([acc, elem])
//     }
//     return acc
//   })
// }

// console.log(findNumbers([-1, 2, 3, 7, 10], 9))

// class User {
//   email

//   constructor(email) {
//     this.email = email
//   }

//   get email() {
//     return this.email
//   }

//   set email(newEmail) {
//     this.email = newEmail
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   }

//   constructor({ email, accessLevel }) {
//     super(email)
//     this.accessLevel = accessLevel
//     this.blacklistedEmails = []
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email)
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// })

// console.log(mango.email) // mango@mail.com
// console.log(mango.accessLevel) // superuser
// mango.blacklist('poly@mail.com')
// console.log(mango.blacklistedEmails) // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')) //  false
// console.log(mango.isBlacklisted('poly@mail.com')) // true

// function changeEven(numbers, value) {
//   let output = []

//   numbers.forEach((item) => {
//     if (item % 2 === 0) {
//       output.push(item + value)
//     }

//     output.push(item)
//   })

//   return output
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
]

// const getUsersWithFriend = (users) => {
//   const output = users.friends.flatMap((user) => user)
//   return output
// }

// console.log(getUsersWithFriend(users))

// const getFriends = (users) => {
//   const output = []
//   users.forEach((user) => {
//     user.friends.forEach((friend) => {
//       if (!output.includes(friend)) output.push(friend)
//     })
//   })
// }

const getSortedFriends = (users) =>
  [...users]
    .flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((a, b) => a.localeCompare(b))

console.log(getSortedFriends(users))
