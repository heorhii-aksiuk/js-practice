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



const validatePIN = function (pin) {
  let filteredArray = pin.split('').filter(el => el >= 0 && el <= 9);
  
  return filteredArray.length === pin.length
    && (pin.length === 4 || pin.length === 6)
  ? true
  : false;
};

console.log(validatePIN("0089")); // true
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("098765")); // true
console.log(validatePIN("123")); // false




