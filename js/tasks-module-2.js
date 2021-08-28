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


const capitalize = function (sentence) {
  const sentenceArray = sentence.split(' ');
  let letter;
  let lettersArray = [];
  let firstLetter;
  let wordsArray = [];
  let finalSentence;

  for (let word of sentenceArray) {
    letter = word.split('');
    lettersArray.push(letter);
  }

  for (let i = 0; i < lettersArray.length; i += 1) {
    firstLetter = lettersArray[i][0];
    lettersArray[i].splice(0, 1, ' ', firstLetter.toUpperCase());
  
    for (let j = 0; j < lettersArray[i].length; j += 1) {
      wordsArray += lettersArray[i][j];
    }
  } 
  finalSentence = wordsArray.slice(1);

  return console.log(finalSentence);
}

capitalize('the quick brown fox');
capitalize('hello my dear friend');

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

// Задача 6

// Написати ф-ю rgbToHex яка приймає колір
//  в форматі rgb і повертає колір в форматі hex


// const rgbToHex = function(r, g, b) {
//   if(r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255)
//     return console.log(`ERROR! Wrong format of RGB!`);

//   const calcHex = function(hexToCalc) {
//     let hexFirstValue = Math.floor(hexToCalc / 16);
//     let hexSecondValue = hexToCalc % 16;

//     const to16Bit = function(hexValue) {
//       switch(hexValue) {
//         case 10:
//           hexValue = 'a';
//         break;
//         case 11:
//           hexValue = 'b';
//         break;
//         case 12:
//           hexValue = 'c';
//         break;
//         case 13:
//           hexValue = 'd';
//         break;
//         case 14:
//           hexValue = 'e';
//         break;
//         case 15:
//           hexValue = 'f';
//         break;
//         default: hexValue = hexValue;
//       };
//     return hexValue;
//   };

//   hexFirstValue = to16Bit(hexFirstValue);
//   hexSecondValue = to16Bit(hexSecondValue);

//   return `${hexFirstValue}${hexSecondValue}`;
// };

//   let hexR = calcHex(r);
//   let hexG = calcHex(g);
//   let hexB = calcHex(b);
//   let hex = `#${hexR}${hexG}${hexB}`;
  
//   return console.log(hex);
// };

// rgbToHex (41, 171, 128); // #29ab80
// rgbToHex (246, 71, 228); // #f647e4

// Задача 7
/* 
Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // []
nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9] */

/* 
1. Объявить функцию DONE!
2. Скопировать массив DONE!
3. Перебрать массив DONE!
4. На каждой итерации вырезаем первый элемент и добавляем в новый массив
5. Сравнить, если такое значение есть в обоих массивах, продолжить выполнение итераций
если, такое значение только в одном массиве, удалить элемент с последнего массива
 */

// const nonUniqueElements = function(array) {
//   const initialArray = [...array];
//   const resultArray = [];
//   let element;
  
//   for (let i = 0; i < array.length; i += 1) {
//     element = array[i];
//     initialArray.shift();

//     if (initialArray.includes(element) || resultArray.includes(element))
//       resultArray.push(element);
//   };
//   return resultArray;
// };

// nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]); // []
// nonUniqueElements([5, 5, 5, 5, 5]); // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]); // [10, 9, 10, 10, 9]

// console.log(nonUniqueElements([1, 2, 3, 1, 3]))

// Задача 8

/* Написати ф-ю median яка приймає масив і знаходить його медіану
Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини.
У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. 
Для масиву з парним числом елементів, де нема ні одного елемента точно посередині,
медіана – це середнє значення двох чисел, які знаходяться в середині масиву. 
В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
 */

/* 
1. Объявить функцию DONE!
2. Высчитать длинну массива DONE!
3. Поделить массив на два DONE!
4. Если число не целое, в массиве не четное количество элементов, 
округливаем это число в низ, и под этим индексом медиана, возращаем ее как результат DONE!
5. Если число целое, то результат между этим чилом и этим чилом минус 1, берм эти два числа,
слаживаем, и выводим результат. DONE!
*/

const median = function(array) {
  let medianIndex = (array.length / 2) - 0.5;  
  let rightIndex = medianIndex + 0.5;          
  let leftIndex = medianIndex - 0.5;           

  let result = array.length % 2 === 0 
    ? (array[rightIndex] + array[leftIndex]) / 2
    : array[medianIndex];
    
  return result;
}

median([3, 6, 10, 15, 20, 99]); // 12.5
median([1, 2, 3, 4, 5]);        // 3  



