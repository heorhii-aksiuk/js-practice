// Задача 1

// Написати ф-ю capitalize яка буде приймати строку
//  і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// Разбить фразу по словам в массив DONE!
// Перебрать массив слов и каждыое слово разбить на буквы DONE!
// Сшить это слово по буквам в массив DONE!
// Массив слова перебрать сделать первый элемент с большой буквы DONE!
// Сшить обратно в слово
// Сшить обратно в фразу
// Вернуть значение


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
// 2. Перебрать буквы
// 3. Если буква гласная, записать в результующую переменную +1

const countVowels = function (sentence) {

  const lettersArray = sentence.toLowerCase().split(''); 
  let result = 0;

  for (let letter of lettersArray) {
  
    if (letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u") {
      result += 1;
    };
  };
  return console.log(result);
};

countVowels('The Quick Brown Fox') // 5
countVowels('hello my friend') // 4

