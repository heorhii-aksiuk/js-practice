// console.log(2 + 2);

// const userName = 'Heorhii';

// console.log(userName);

// let age = 28;

// console.log(age);

// let about = `I am ${userName} and I ${age} years old`;
// console.log(about);

// console.log(age);

// const hasChildren = false;
// const hasJob = true;

// console.log(typeof hasChildren);
// console.log(typeof age);

// // alert(about);

// // const subAccess = 'Вы уверены, что хотите продлить подписку?';

// // console.log(confirm(subAccess));

// // let userAge = prompt('Пожалуйста, укажите свой возраст');

// // console.log(userAge);

// console.log(3 * 7);

// console.log(100 % 32);

// const x = 30;
// const y = 12;
// const z = 36;

// console.log(x > y);
// console.log((x * y) === z);
// console.log(x * y);
// console.log((x / 3) === true);

// const valueA = '5';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// let numberAndString = Number('12and23');
// console.log(Number.parseInt(numberAndString));

// console.log(Number.isNaN(numberAndString));

// console.log(0.1 + 0.2);
// console.log((0.1 *10 + 0.2 * 10) / 10);

// console.log(Math.max( x, y, z));

// console.log(Math.random());
// console.log(Math.random() * (100 - 1) + 1);

// function calculateTotalPrice(order) {
//   let total = 0;

//   for ( let i = 0; i < order.length; i += 1){
//   console.log(order[i]);
//   total = total + order[i];
//     console.log(total);
//   }
// console.log(total);
// return total;
// }


// calculateTotalPrice([2, 3, 6, 4])


// 1. Создать со строки массив
// 2. Высчитать длинну каждого элемента в массиве
// 3. Сравнить длинну каждого элемента с первым элементом который будет считаться изначально самым длинным 
// 4. Если длинна элемента больше, то перезаписать значение большего элемента


// function findLongestWord(string) {
//   let toString = string.split(' ');
  

//   for (let i = 0; i < toString.length; i += 1 ) {
//   let longestWord = toString[0];
    
//     if (toString[i].length <= longestWord.length) {
//       continue;

//     } else {
 
//     longestWord = toString[i];
   
//     }

//   return console.log(longestWord);
//   }
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");




// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (let i = 0; i < toString.length; i += 1 ) {
//     if (toString[i].length > longestWord.length) {
//     longestWord = toString[i];
//     return console.log(longestWord);
//     }
  
//   }
  
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (const word of toString) {
//     if (word <) {
//     longestWord = toString[i];
//     console.log(toString[i]);
//     return console.log(toString[i]);
//     }
//   }
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function findLongestWord(string) {
//   let toString = string.split(' ');
//   let longestWord = toString[0];

//   for (word of toString) {
//     if (word.length > longestWord.length) {
//     longestWord = word;

    
//     }
//   }
//   return longestWord;
// }


// Сравнить каждый элемет массива с праметром валью
// По умолчанию нужно саздать пустой массив 
// Если элемент больше чем валью, то запушить в массив этот элемент


function filterArray(numbers, value) {
  const biggerNumber = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value){
      biggerNumber.push(numbers[i]);
    }
  }
}

 filterArray([12, 24, 8, 41, 76], 38);
// //  возвращает [41, 76]

// Перебрать массив 1 через фор, и сравнить есть ли в массиве 2 элемент массива 1
// если есть, запушить в новый массив



// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for ( let i = 0; i < array1.length; i += 1 ){

//     if ( array2.includes(array1[i])) {

//     newArray.push(array1[i]);
//     }
//   }
//   return newArray;
  
// }


// function getEvenNumbers(start, end) {
//   const newArrey = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArrey.push(i);
//     }
//   }
  


//   return newArrey;
//   }

// getEvenNumbers(3, 11)


// function includes(array, value) {
  
//   for( let element of array) {
    
//     if (element === value){
//     return true;
//     }
//   }
//   return console.log(includes());
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")


const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */
