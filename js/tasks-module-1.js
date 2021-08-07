// Задача 1

// Вариант 1. Инструкция if...else

// const yearOfBirth = 2021;

// if (yearOfBirth % 4 === 0) {
//   console.log (`Год ${yearOfBirth} является высокостным`);

// } else {
//   console.log (`Год ${yearOfBirth} не является высокостным`);
// }

// Вариант 2. Тернарный оператор

// yearOfBirth % 4 === 0
// ? console.log (`Год ${yearOfBirth} является высокостным`)
// : console.log (`Год ${yearOfBirth} не является высокостным`);

// Задача 2

// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його 
// Користувач вводить свій варіант і отримує результат (Виграв чи ні) 
// Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" 
// або "Ви програли, компютер загадав (тут варіант компютера)"

// Вариант 1. Инструкция if...else

// let randomNumber = Math.ceil(Math.random() * (10 -1) + 1);
// let userNuber = prompt('Испытай удачу, введи число от 1 до 10');

// if (randomNumber == userNuber) {
//   alert(`Поздравляю, ты победил! Число ${randomNumber} выиграшное!`)

// } else {
//   alert(`Ты проиграл, выиграшное число ${randomNumber}, попробуй ещё!`)
// };

// Вариант 2. Тернарный оператор

// let winNumber = Math.ceil(Math.random() * (6 - 1) +1);
// let userNumberd = prompt(`Испытай удачу, введи число от 1 до 6`);

// winNumber == userNumberd 
// ? alert(`Поздравляю, ты победил! Число ${winNumber} выиграшное!`)
// : alert(`Ты проиграл, выиграшное число ${winNumber}, попробуй ещё!`)


// Задача 3

// Написати програму яка буде знаходити суму, різницю, добуток, частку двох чисел 
// Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі
//  "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// let userFirstNumber = prompt('Введи первое число.');
// let userSign = prompt('Ввиди знак математического действия (+, -, * или /)');
// let userSecondNumber = prompt('Введи второе число');
// let result = 'ERROR';

// switch(userSign) {
//   case '+':
//     result = Number(userFirstNumber) + Number(userSecondNumber);
//   break;

//   case '-':
//     result = Number(userFirstNumber) - Number(userSecondNumber);
//   break;

//   case '*':
//     result = Number(userFirstNumber) * Number(userSecondNumber);
//   break;

//   case '/':
//     result = Number((userFirstNumber)) / Number(userSecondNumber);
//   break;

//   default: 'ERROR';
// }

// alert(result); 

// Задача 4

// Написати програму яка буде переводити температуру з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії

// const toFahrenheit = function (celsius) {

// let result = celsius * (9 / 5) + 32;

// return console.log(result);
// };

// toFahrenheit(43);


// const toCelsius = function (fahrenheit) {

//   return console.log((fahrenheit - 32) * (5 / 9))
// };

// toCelsius(39);


// Задача 5

// Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// const isInclude = function (number) {
//   if (number >= 55 && number <= 99) {
//     return console.log(`Число ${number} входит в диапазон`);
//   };
//   return console.log(`Число ${number} не входит в диапазон`);
// };

// isInclude(64);

// Задача 6

// Написати програму де користувач вводить 3 числа, 
// після вводу всіх трьох чисел йому на екрані показується найбільше з них.
//  Додатково перевіряти чи це взагалі числа

// 1. Сделать переменные-промпты для введения числ
// 2. Предположить что число 1 самое большое
// 3. Сравнить 2 числоа с 1, если оно больше, переписать значение
// 4. Сравнить 3 с большим из двух предидущих, если оно больше - переписать значение
// 5. Вывести через алерт результат

// let firstNumber = prompt('Введите первое число');
//   if (Number.isNaN(+firstNumber)) {
//     alert(`Вы ввели ${firstNumber}, это не число!`);
//   }

// let secondNumber = prompt('Введите второе число');
//  if (Number.isNaN(+secondNumber)) {
//     alert(`Вы ввели ${secondNumber}, это не число!`);
//   }

// let thirtNumber = prompt('Введите последнее число');
//   if (Number.isNaN(+thirtNumber)) {
//     alert(`Вы ввели ${thirtNumber}, это не число!`);
//     }

// let largestNumber = +firstNumber;

//   if (largestNumber < +secondNumber) {
//     largestNumber = +secondNumber;
//   }

//    if (largestNumber < +thirtNumber) {
//     largestNumber = +thirtNumber;
//   }

// alert(`Самое большое число из введенных это ${largestNumber}!`);

// Задача 7

// Написати програму яка переведе введену оцінку студента до болонського формату
//  89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// const toBolon = (mark) => {

//   let bolonMark = '';

//   if (mark >= 0 && mark < 20) {
//     bolonMark = 'F';
//   }
//   else if (mark >= 20 && mark < 45) {
//     bolonMark = 'E';
//   } 
//   else if (mark >= 45 && mark < 60) {
//     bolonMark = 'D';
//   }
//   else if (mark >= 60 && mark < 75) {
//     bolonMark = 'C';
//   }
//   else if (mark >= 75 && mark < 90) {
//     bolonMark = 'B';
//   }
//   else if (mark >= 90 && mark <=100) {
//     bolonMark = 'A';
//   }
//   else {
//     return console.log(`Оценка ${mark} не верная. Оценка должна быть в диапазоне от 0 до 100 баллов`);
//   }

//   return console.log(`Ваша оценка - ${bolonMark}`);
// }

// toBolon(34);
// toBolon(334);
// toBolon(100);
// toBolon(60 - 43);
// toBolon(0 + 90);

// Задача 8

// Написати програму яка отримає від користувача число (кількість хвилин)
//  і виведе на екран строку в форматі години і хвилини Приклад 70 покаже 1:10, 450 покаже 7:30, 1441 покаже 24:1

// let userMinutes = prompt('Введите количество минут, которые нужно преобразить в формат "часы:минуты"');

// const toHoursAndMinutes = inMinutes => {
//   let hours = 0;
//   let minutes = 0;
//   let tensMinutes = 0;
  
//   hours = Math.floor(inMinutes / 60);
//   minutes = Math.round(((inMinutes / 60) - hours) * 60);

//   if (minutes >= 10) {
//     tensMinutes = '';
//   }
  
//   let result = alert(`${inMinutes} минут в формате "часы:минуты" это - ${hours}:${tensMinutes}${minutes}`);
//   return result;
// }

// toHoursAndMinutes(userMinutes);

// Задача 9

// Написати гру камінь ножиці папір. 
// Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екрані хто виграв

// 1. Вывести окно с предложением ввести камень, ножнецы или бумага
// 2. Создать функцию которая будет рамдомно выводить камень, ножницы и бумагу через мат рандом (цифровое значение приравнивать к строке)
// 3. Прописать логику что над чем побеждает
// 4. Сравнить данные от пользователя с компьютером и вывести результат в окно

// const rock = 'камень';
// const scissors = 'ножницы';
// const paper = 'бумага';

// const userChoose = prompt(`Игра "камень-ножницы-бумага". Введите свой выбор: "камень", "ножницы" или "бумага".`);

// const randomNumber = Math.floor(Math.random()*(4 - 1) + 1);

// let botChoose;

// switch(randomNumber) {
//   case 1:
//     botChoose = rock;
//   break;

//   case 2:
//     botChoose = scissors;
//   break;

//   case 3:
//     botChoose = paper;
//   break;
// }

// if (botChoose === userChoose){
//   alert(`Ничия. Бот тоже поставил "${botChoose}"`);

// } else if (botChoose === rock && userChoose === scissors) {
//   alert(`Бот поставил "${botChoose}", а ты "${userChoose}". Ты проиграл`);

// } else if (botChoose === rock && userChoose === paper) {
//   alert(`Ура! Бот поставил "${botChoose}", а ты "${userChoose}". Ты выиграл!`);

// } else if (botChoose === scissors && userChoose === rock) {
//   alert(`Ура! Бот поставил "${botChoose}", а ты "${userChoose}". Ты выиграл!`);

// } else if (botChoose === scissors && userChoose === paper) {
//   alert(`Бот поставил "${botChoose}", а ты "${userChoose}". Ты проиграл`);

// } else if (botChoose === paper && userChoose === rock) {
//   alert(`Бот поставил "${botChoose}", а ты "${userChoose}". Ты проиграл`);

// } else if (botChoose === paper && userChoose === scissors) {
//   alert(`Ура! Бот поставил "${botChoose}", а ты "${userChoose}". Ты выиграл!`);

// } else {
//   alert(`Ошибка! Введи одно слово: "камень", "ножницы" или "бумага" без кавычек и ещё чего либо`);
// }

// console.log(`Бот поставил: ${botChoose}`);
// console.log(`Игрок поставил: ${userChoose}`);

// Оптимизированый вариант

// Переменные
const rock = 'камень';
const scissors = 'ножницы';
const paper = 'бумага';
const userChoose = prompt(`Игра "камень-ножницы-бумага". Введи свой выбор: "камень", "ножницы" или "бумага".`);
const randomNumber = Math.floor(Math.random()*(4 - 1) + 1);
let botChoose;
// Свич для определения выбора компьютера
switch(randomNumber) {
  case 1:
    botChoose = rock;
  break;
  case 2:
    botChoose = scissors;
  break;
  case 3:
    botChoose = paper;
  break;
};
// Логика и определение победителя с выводом сообщения
if (botChoose === userChoose){
  alert(`Ничия. Бот тоже поставил "${botChoose}".`);

} else if ((botChoose === rock && userChoose === scissors) ||
          (botChoose === scissors && userChoose === paper) || 
          (botChoose === paper && userChoose === rock))  {
  alert(`Ты проиграл. Бот поставил "${botChoose}", а ты "${userChoose}".`);

} else if ((botChoose === rock && userChoose === paper) ||
          (botChoose === scissors && userChoose === rock) || 
          (botChoose === paper && userChoose === scissors)) {
  alert(`Ты выиграл! Бот поставил "${botChoose}", а ты "${userChoose}".`);
  
} else {
  alert(`Ошибка! Введи одно слово: "камень", "ножницы" или "бумага" без кавычек и ещё чего либо!`);
};
// Провека выбора бота и игрока в консоли
console.log(`Бот поставил: ${botChoose}`);
console.log(`Игрок поставил: ${userChoose}`);





