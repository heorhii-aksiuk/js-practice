const varNumbers = [63, 34, 98, 73, 8, 123, 80, 213];
console.table(varNumbers);
let firstNumber = varNumbers[0];
let smallestNumber = firstNumber;


for (let i = 0; i < varNumbers.length ; i += 1) {

if 
  (firstNumber > varNumbers[i]) {
smallestNumber = varNumbers[i];
} 


}
  console.log(smallestNumber);