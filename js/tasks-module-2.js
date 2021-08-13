// Задача 1

// Написати ф-ю capitalize яка буде приймати строку
//  і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// Разбить фразу по словам в массив DONE!
// Перебрать массив слов и каждыое слово разбить на буквы DONE!
// Сшить это слово по буквам в массив DONE!
// Массив слова перебрать сделать первый элемент с большой буквы DONE!
// Сшить обратно в слово DONE!
// Сшить обратно в фразу DONE!
// Вернуть значение DONE!


// const capitalize = function (sentence) {
//   const sentenceArray = sentence.split(' ');
//   let letter;
//   let lettersArray = [];
//   let firstLetter;
//   let wordsArray = [];
//   let finalSentence;

//   for (let word of sentenceArray) {
//     letter = word.split('');
//     lettersArray.push(letter);
//   }

//   for (let i = 0; i < lettersArray.length; i += 1) {
//     firstLetter = lettersArray[i][0];
//     lettersArray[i].splice(0, 1, ' ', firstLetter.toUpperCase());
  
//     for (let j = 0; j < lettersArray[i].length; j += 1) {
//       wordsArray += lettersArray[i][j];
//     }
//   } 
//   finalSentence = wordsArray.slice(1);

//   return console.log(finalSentence);
// }

// capitalize('the quick brown fox');
// capitalize('hello my dear friend');

// Задача 2

// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. 
// aeiouAEIOU - рядок з голосними в англ алфавіті

// 1. Разбить строку на массив букв DONE!
// 2. Перебрать буквы DONE!
// 3. Если буква гласная, записать в результующую переменную +1 DONE!

// const countVowels = function (sentence) {

//   const lettersArray = sentence.toLowerCase().split(''); 
//   let result = 0;

//   for (let letter of lettersArray) {
  
//     if (letter === "a" ||
//         letter === "e" ||
//         letter === "i" ||
//         letter === "o" ||
//         letter === "u") {
//       result += 1;
//     };
//   };
//   return console.log(result);
// };

// countVowels('The Quick Brown Fox') // 5
// countVowels('hello my friend') // 4

// Задача 3

// Написати ф-ю яка приймає 2 параметра 
// (розміри в ремах - "2rem) і велечину базового шрифта ("20px")
//  і вертає конвертований розмір в пікселях

// 1. Объявить функкцию DONE!
// 2. У полученных данных взять только цифры DONE!
// 3. Перемножить параметры и получить результат DONE!
// 3. Вернуть результат с дописаным значениям пикселей DONE!

// const remToPixels = function (rem, baseFontSize) {
//   const remValue = Number.parseFloat(rem);
//   const baseFontSizeValue = Number.parseInt(baseFontSize);
//   const resultValue = remValue * baseFontSizeValue;
//   const result = `${resultValue}px`;

//   return console.log(result);
// }

// remToPixels('2rem', '20px');

// Задача 4

// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// 1. Обьявить функцию DONE!
// 2. Сделать вычисления DONE!
// 3. Вернуть результат DONE!

// const toCelsiusFromFahrenheit = function (celsius) {
//   const result = (celsius * (9 / 5)) + 32;

//   return console.log(result);
// };

// toCelsiusFromFahrenheit(25.5);

// Задача 5

// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки.
//  Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини);

// const calculateDogAge = function(dogAge) {
//   const dogAgeInHumans = dogAge * 7;

//   return console.log(dogAgeInHumans);
// }

// calculateDogAge(5);
// calculateDogAge(12);
