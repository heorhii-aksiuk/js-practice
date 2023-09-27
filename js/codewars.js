/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

/* Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */

/* 
1. Превратить строку в массив
2. Перебрать массив
3. 

*/

// const validatePIN = function (pin) {
//   let clearPin = pin.trim();
//   let filteredArray = clearPin.split('')
//     .filter(el => el >= 0 && el <= 9);

//   return filteredArray.length === clearPin.length
//     && (clearPin.length === 4 || clearPin.length === 6)
//   ? true
//   : false;
// };

// console.log(validatePIN("0089")); // true
// console.log(validatePIN("-1.234")); // false
// console.log(validatePIN("098765")); // true
// console.log(validatePIN("123")); // false

// const removeChar = function(str){
//   let arrayFromStr = str.split('');
//   arrayFromStr.shift();
//   arrayFromStr.pop();

//   return arrayFromStr.join('');
// };

// removeChar('eloquent');
// console.log(removeChar('eloquent'));

// const findShort = function (s) {
//   let array = s.split(' ');
//   let sortArray = [...array].sort((a, b) => a.length - b.length);
//   return sortArray[0].length;
// };

// const findShort = function (s) {
//   return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
// };

// findShort('bitcoin take over the world maybe who knows perhaps');

// function minMax(arr) {
//   return [[...arr].sort((a, b) => a - b)[0], [...arr].sort((a, b) => b - a)[0]];
// }

// const arr = [5, 3, 7, 9, 34, 56, 3, 5, 3, 7];
// minMax(arr);
// console.log(minMax(arr));

// function reverseLetter(str) {
//   return str
//     .split('')
//     .filter(e => e.match(/[a-z]/i))
//     .reverse()
//     .join('');
// }

// console.log(reverseLetter('ultr53o?n')); //"nortlu"

// function oddOrEven(array) {
//   let total = 0;
//   array.forEach(el => (total += el));
//   return total % 2 === 0 ? 'even' : 'odd';
// }

// console.log(oddOrEven([1023, 1, 3]));

// const oddOrEven = array =>
//   array.reduce((acc, el) => acc + el, 0) % 2 === 0 ? 'even' : 'odd';

// console.log(oddOrEven([1023, 1, 4]));

// function smallEnough(a, limit) {
//   return a.every(el => el <= limit);
// }

// console.log(smallEnough([66, 501], 200));

// function sumOfMinimums(arr) {
//   return arr.reduce((acc, elem) => {
//     acc += Math.min.apply(null, elem); почитать про этот момент
//     return acc;
//   }, 0);
// }

// console.log(
//   sumOfMinimums([
//     [7, 9, 8, 6, 2],
//     [6, 3, 5, 4, 3],
//     [5, 8, 7, 4, 5],
//   ]),
// );

// function bump(x) {
//   return [...x].filter(el => el === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';
// }

// console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));

// console.log(bump('______n___n_'));

// function maxNumber(n) {
//   return +[...(n + '')].sort().reverse().join('');
// }

// const number = 42695201;

// console.log(maxNumber(number));

// function rowWeights(array) {
//   let firstArraySum = [...array]
//     .filter(el => array.indexOf(el) % 2 === 0)
//     .reduce((acc, el) => {
//       acc += el;
//       return acc;
//     }, 0);
//   let secondArraySum = [...array]
//     .filter(el => array.indexOf(el) % 2 !== 0)
//     .reduce((acc, el) => {
//       acc += el;
//       return acc;
//     }, 0);

//   return [firstArraySum, secondArraySum];
// }

// const array = [100, 51, 50, 100];

// console.log(rowWeights(array));

// тут проблема с одинаковыми элементами в массиве

// function minValue(values) {
//   return Number(
//     [...values]
//       .filter((value, index) => values.indexOf(value) === index)
//       .sort((a, b) => a - b)
//       .join(''),
//   );
// }

// console.log(minValue([4, 7, 5, 7, 10]));

// Your task is to write function factorial.

// function factorial(n) {
//   let array = [];
//   let result;

//   if (n === 0) {
//     result = 1;
//   } else {
//     for (let i = n; i > 0; i -= 1) {
//       array.push(i);
//     }
//     result = array.reduce((el, acc) => el * acc);
//   }
//   return result;
// }

// console.log(factorial(7));
// //  5040;

// function getEvenNumbers(numbersArray) {
//   return [...numbersArray].filter(el => el % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));

// function uniqueInOrder(iterable) {
//   let initialArray = [];
//   let resultArray = [];
//   let prevEl = null;

//   if (typeof iterable === 'string') {
//     initialArray = iterable.split('');
//   } else {
//     initialArray = iterable;
//   }

//   initialArray.forEach(el => {
//     if (el !== prevEl) {
//       resultArray.push(el);
//       prevEl = el;
//     }
//   });

//   return resultArray;
// }

// function uniqueInOrder(iterable) {
//   return [...iterable].filter((el, index) => el !== iterable[index - 1]);
// }

// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// function solution(numbers) {
//   return numbers ? [...numbers].sort((a, b) => a - b) : [];
// }

// console.log(solution([1, 2, 3, 10, 5]));

// function removeUrlAnchor(url) {
//   return url.includes('#')
//     ? [...url].slice(0, [...url].indexOf('#')).join('')
//     : url;
// }

// console.log(removeUrlAnchor('www.codewars.com#about'));

// function XO(str) {
//   let xArray = [];
//   let oArray = [];

//   [...str.toLowerCase()].forEach(el => {
//     if (el === 'x') xArray.push(el);
//     if (el === 'o') oArray.push(el);
//   });

//   return xArray.length === oArray.length;
// }

// console.log(XO('xxOo'));

// function reversedSequence(number) {
//   let count = 0
//   let output = []

//   while (number > count) {
//     output.push(number - count)
//     count += 1
//   }
//   return output
// }

// console.log(reversedSequence(7))

// const noOdds = (values) => values.filter((value) => value % 2 === 0)
// console.log(noOdds([7, 6, 5, 4, 3, 2, 1]))

// const sumDigits = (number) =>
//   number > 0 ? String(number)
//     .split('')
//     .reduce((acc, el) => { Number(acc) + Number(el) : String(number)
//     .split('')
//     .reduce((acc, el) => { Number(acc) + Number(el)

//     })

// console.log(sumDigits(374))

// const digits = (n) => n.length

// function drawing(length) {
//   let count = 0
//   let output = ''

//   while (count < length) {
//     output += '*'
//     console.log(output)
//     count += 1
//   }
// }
//
// drawing(5)

// const array = [3, 4]
// console.log(array.splice(1))

// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// class MyMath {
//   square() {
//     return this.map((el) => Math.pow(el))
//   }
// }

// const numbers = () => [1, 2, 3, 4, 5]

// console.log(numbers())

// const array = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]

// function highestRank(array) {
//   return array.reduce((output, item) => {
//     if (output.length < array.filter((elem) => elem === item).length)
//       output = array.filter((elem) => elem === item)
//     return output
//   }, [])[0]
// }

// console.log(highestRank(array))

// const domainName = (url) =>
//   url
//     .replace('http://', '')
//     .replace('https://', '')
//     .replace('www.', '')
//     .split('.')[0]

// console.log(domainName('http://google.com'))
// console.log(domainName('www.my-site.ua'))

// function generateHashtag(str) {
//   const result =
//     '#' +
//     str
//       .split(' ')
//       .filter((el) => el !== '')
//       .map((el) => el.replace(el[0], el[0].toUpperCase()))
//       .join('')

//   return result === '#' || result.length > 140 ? false : result
// }

// console.log(generateHashtag('multiply function invocation'))

// function validParentheses(parens) {
//   let openingCount = 0
//   let closingCount = 0
//   let noPairless = true

//   parens.split('').forEach((el) => {
//     if (noPairless && el === ')') {
//       noPairless = false
//       return
//     }
//     if (el === '(') openingCount += 1
//     if (el === ')') closingCount += 1
//     noPairless = openingCount === closingCount
//   })

//   return noPairless
// }

// function validParentheses(parens) {
//   let counter = 0

//   for (let i = 0; i < parens.length; i += 1) {
//     if (parens[i] === '(') counter += 1
//     if (parens[i] === ')') counter -= 1
//     if (counter < 0) return false
//   }

//   return counter === 0
// }

// console.log(validParentheses('(())((()())())')) // true
// console.log(validParentheses('(())((()())())(')) // false
// console.log(validParentheses(')(())((()())())(')) // false
// console.log(validParentheses('())(()')) // false
// console.log(validParentheses('(()((()))()()(()))')) // true

// const countSheep = (arrayOfSheep) =>
//   arrayOfSheep.filter((el) => el === true).length

/* const openOrSenior = (data) =>
  data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'))

const input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
]

console.log(openOrSenior(input)) //["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

// function isTriangle(a, b, c) {
//   const array = [a, b, c].sort((a, b) => b - a)
//   return array[0] < array[1] + array[2]
// }

// console.log(isTriangle(1, 2, 2))
// console.log(isTriangle(7, 2, 2))

// const noSpace = (x) => x.replaceAll(' ', '')
// const noSpace = (x) => x.split('')
// .filter((elem) => elem !== ' ')
// .join()

// console.log(noSpace(' kajdfkjadf kf afdf '))

// const arrayDiff = (a, b) => {
//   b.forEach((el) => {
//     if (a.indexOf(el) !== -1) {
//       a.splice(a.indexOf(el), 1)
//     }
//   })
//   return a
// }

// const arrayDiff = (a, b) => {
//   let result = []

//   for (let i = 0; i < b.length; i += 1) {
//     console.log(i)
//     if (result.length < 1) {
//       result = a.filter((elem) => elem !== b[i])
//     } else {
//       console.log(result)
//       result.filter((elem) => elem !== b[i])
//       console.log(result)
//     }
//   }

//   return result
// }

// console.log(arrayDiff([1, 2, 3], [1, 2])) //[3]

/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */

// class Ball {
//   constructor(type) {
//     this.type = type;
//   }

//   get ballType() {
//     return this.type ? this.type : 'regular';
//   }
// }

// const Ball1 = new Ball('test');
// const Ball2 = new Ball();
// console.log(Ball1.ballType, Ball2.ballType);

/* Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array. */

// const take = (arr, n) => arr.slice(0, n);

// console.log(take([0, 1, 3, 4, 4, 5, 6, 3, 2], 5));

/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck! */

// const doubleChar = (str) => [...str].map((el) => el + el).join('');

// console.log(doubleChar('str'));

// const getAge = (inputString) => Number(inputString[0]);

// console.log(getAge('4 years old'));

// const arr = (N) => {
//   let n = N;
//   const arr = [];

//   while (n > 0) {
//     arr.unshift(n - 1);
//     n -= 1;
//   }
//   return arr;
// };

// console.log(arr(5));

/* function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const array = [];
  text
    .toLowerCase()
    .split('')
    .forEach((el) => {
      const index = alphabet.split('').indexOf(el);
      if (index !== -1) {
        array.push(index + 1);
      }
    });
  return array.join(' ');
} */

// function alphabetPosition(text) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return text
//     .toLowerCase()
//     .split('')
//     .reduce((acc, el) => {
//       const index = alphabet.split('').indexOf(el);

//       if (index !== -1) {
//         acc.push(index + 1);
//       }
//       return acc;
//     }, [])
//     .join(' ');
// }

// console.log(alphabetPosition('t ext'));

// const sum = (numbers) => numbers.reduce((acc, elem) => (acc += elem), 0);

// console.log(sum([1, 5.2, 4, 0, -1]));

// const sumArray = (array) =>
//   array.length > 0
//     ? array
//         .sort((a, b) => a - b)
//         .map((el) => {
//           console.log(el);
//           return el;
//         })
//         .slice(1, -1)
//         .map((el) => console.log(el))
//         .reduce((acc, elem) => (acc += elem), 0)
//     : 0;

// console.log(sumArray([6, 2, 1, 8, 10]));

// function squareDigits(num) {
//   return Number(
//     num
//       .toString()
//       .split('')
//       .map((el) => {
//         console.log(el);
//         return el ** 2;
//       })

//       .join(''),
//   );
// }

// console.log(squareDigits(34565));

// const solution = (str, ending) =>
//   ending.split('').reverse().join('') ===
//   str.split('').reverse().join('').slice(0, ending.length);

// console.log(solution('abcde', 'cde'));

// function passed(list) {
//   const passedScores = list.filter((score) => score <= 18);

//   if (passedScores.length === 0) {
//     return 'No pass scores registered.';
//   }

//   const averagePassed = Math.round(
//     passedScores.reduce((total, score) => total + score) / passedScores.length,
//   );

//   return averagePassed;
// }

// function spinWords(string) {
//   const arrayOfWords = string.split(' ');
//   const resultArray = arrayOfWords.map((word) => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     }
//     return word;
//   });

//   const result = resultArray.join(' ');

//   return result;
// }

// const spinWords = (string) =>
//   string
//     .split(' ')
//     .map((word) =>
//       word.length >= 5 ? word.split('').reverse().join('') : word,
//     )
//     .join(' ');

// function findOdd(array) {
//   const resultArray = [];

//   array.forEach((number) => {
//     const index = resultArray.indexOf(number);

//     if (index === -1) {
//       resultArray.push(number);
//     } else {
//       resultArray.splice(index, 1);
//     }
//   });

//   return resultArray[0];
// }

// console.log(findOdd([1, 1, 2]));

/* function seriesSum(n) {
  let i = 0;
  let x = 1;
  let result = 0;

  while (i < n) {
    result += 1 / x;
    x += 3;
    i += 1;
  }

  return result.toFixed(2);
} */

// console.log('test')

// function highAndLow(numbers){
//   return `${numbers.split(' ').sort((a, b) => b - a)[0]} ${numbers.split(' ').sort((a, b) => a - b)[0]}`
// }

// const highAndLow = (numbers) => {
//   const array = numbers.split(' ')
//   const sortedArray = [...array].sort((a, b) => b - a)
//   const resultArray = [sortedArray[0], sortedArray]
//   return
// }

// console.log(highAndLow("1 2 3 4 5"))

// const findNeedle = (haystack) => {
//   const index = haystack.indexOf("needle")
//   return `found the needle at position ${index}`
// };

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// complete the function
// const solution = (string) => {
//   const array = [...string];
//   const indexes = [];
//   array.map((item, index) => {
//     if (item.toUpperCase() === item) {
//       indexes.push(index);
//     }
//   });
//   indexes.map((item, index) => array.splice(item + index, 0, ' '));
//   const result = array.join('');
//   return result;
// };

// console.log(solution('sortedArrayTest'));
