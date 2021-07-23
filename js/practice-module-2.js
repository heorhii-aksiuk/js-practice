// const varNumbers = [63, 34, 98, 73, 8, 123, 80, 213];
// console.table(varNumbers);
// let firstNumber = varNumbers[0];
// let smallestNumber = firstNumber;


// for (let i = 0; i < varNumbers.length ; i += 1) {

// if 
//   (firstNumber > varNumbers[i]) {
// smallestNumber = varNumbers[i];
// } 


// }
//   console.log(smallestNumber);


function makeArray(firstArray, secondArray, maxLength) {

  const allArray = firstArray.concat(secondArray);
  return allArray.split(0, maxLength);
  
  
  }


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));