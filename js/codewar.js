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

function smallEnough(a, limit) {
  return a.every(el => el <= limit);
}

console.log(smallEnough([66, 501], 200));
