'use strict';

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       const message = `There is no pizza with a name ${pizzaName} in the assortment.`;
//       return onError(message);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  // Change code above this line
  return totalPrice;
}
 */

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// }

// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     console.log(this.MAX_PRICE);
//     // Change code above this line
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// function findPrimeNumbers(maximum) {
//   const resultArray = [];

//   for (let i = 1; i <= maximum; i += 2) {
//     resultArray.push(i);

//     for (let j = i; j > 2; j -= 1) {
//       if (i === j) {
//         continue;
//       }
//       if (i % j === 0) {
//         resultArray.pop();
//         break;
//       }
//     }
//   }

//   return resultArray;
// }

// console.log(findPrimeNumbers(100));

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i += 1) {
//     z.push(i * x);
//   }
//   return z;
// }

// console.log(countBy(2, 5));

// function logicalCalc(array, op) {
//   if (op === 'AND') {
//     return array.every((item) => item);
//   }

//   if (op === 'OR') {
//     return array.some((item) => item);
//   }

//   if (op === 'XOR') {
//     return array.every((item) => item) ? false : array.some((item) => item);
//   }
// }

// console.log(logicalCalc([true, true, true, false], 'XOR'));

// const isSquare = (number) => Math.sqrt(number) % 1 === 0;

// console.log(isSquare(-26));

/* At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years. */

function nbYear(p0, percent, aug, p) {
  const oneYearGrow = p0 + p0 * (percent / 100) + aug - p0;
  return (p - p0) / oneYearGrow;
}

console.log(nbYear(1500, 5, 100, 5000)); //15
