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


const capitalize = function (sentence) {
  const sentenceArray = sentence.split(' ');
  let letter;
  let lettersArray = [];
  let firstLetter;
  let wordsArray;
  for (let word of sentenceArray) {
    letter = word.split('');
    lettersArray.push(letter);
  }
    for (let i = 0; i < lettersArray.length; i += 1) {
    firstLetter = lettersArray[i][0];
    lettersArray[i].splice(0, 1, firstLetter.toUpperCase());
  }
  console.log(lettersArray)


  
    // for (let i = 0; i < lettersArray.length; i += 1) {
    //   wordsArray = i + i;
    //   console.log(wordsArray)

    // }


  
  // wordsArray = lettersArray.join(',');
  

  // return console.log(lettersArray);

//   return console.log(sentenceArray);
};


capitalize('the quick brown fox')