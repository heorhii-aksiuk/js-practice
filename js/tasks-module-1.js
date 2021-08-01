// Задача 1

// Вариант 1. Инструкция if...else

// const yearOfBirth = 2021;

// if (yearOfBirth % 4 === 0) {
//   console.log (`Год ${yearOfBirth} является высокостным`);

// } else {
//   console.log (`Год ${yearOfBirth} не является высокостным`);
// }

// Вариант 2. Тернарный оператор

// yearOfBirth % 4 === 0
// ? console.log (`Год ${yearOfBirth} является высокостным`)
// : console.log (`Год ${yearOfBirth} не является высокостным`);

// Задача 2

// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його 
// Користувач вводить свій варіант і отримує результат (Виграв чи ні) 
// Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" 
// або "Ви програли, компютер загадав (тут варіант компютера)"

// Вариант 1. Инструкция if...else

// let randomNumber = Math.ceil(Math.random() * (10 -1) + 1);
// let userNuber = prompt('Испытай удачу, введи число от 1 до 10');

// if (randomNumber == userNuber) {
//   alert(`Поздравляю, ты победил! Число ${randomNumber} выиграшное!`)

// } else {
//   alert(`Ты проиграл, выиграшное число ${randomNumber}, попробуй ещё!`)
// };

// Вариант 2. Тернарный оператор

// let winNumber = Math.ceil(Math.random() * (6 - 1) +1);
// let userNumberd = prompt(`Испытай удачу, введи число от 1 до 6`);

// winNumber == userNumberd 
// ? alert(`Поздравляю, ты победил! Число ${winNumber} выиграшное!`)
// : alert(`Ты проиграл, выиграшное число ${winNumber}, попробуй ещё!`)


// Задача 3

// Написати програму яка буде знаходити суму, різницю, добуток, частку двох чисел 
// Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі
//  "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// let userFirstNumber = prompt('Введи первое число.');
// let userSign = prompt('Ввиди знак математического действия (+, -, * или /)');
// let userSecondNumber = prompt('Введи второе число');
// let result = 'ERROR';

// switch(userSign) {
//   case '+':
//     result = Number(userFirstNumber) + Number(userSecondNumber);
//   break;

//   case '-':
//     result = Number(userFirstNumber) - Number(userSecondNumber);
//   break;

//   case '*':
//     result = Number(userFirstNumber) * Number(userSecondNumber);
//   break;

//   case '/':
//     result = Number((userFirstNumber)) / Number(userSecondNumber);
//   break;

//   default: 'ERROR';
// }

// alert(result); 

// function countProps(object) {
//   let propCount = 0;

//   for (let key in object) {
    
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       console.log(key);
//     }
//   }
//   return console.log(propCount);
// }

// countProps({ name: "Mango", age: 2 })

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// console.log(productName)
// console.log(productName)
//   if (productName === products.name) {
//     return console.log(products.price);
//   }

// }

// getProductPrice("Scanner")


// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
// return console.log({completed, category, priority, ...data});

// }

//  makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// { category: "General", priority: "Normal", completed: false }

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
    
//     for (let i = 0; i < this.potions.length; i += 1) {
      
//         if (potionName === this.potions[i]) {
          
//         this.potions.splice(i, 1)         
//    }        
//   }
//  }
// }

// atTheOldToad.removePotion("Dragon breath");

// console.log(atTheOldToad.potions);

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
		for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i]['name'] === potionName) {
      this.potions.splice(i, 1)
      }
    }
  },



  updatePotionName(oldName, newName) {
	for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i]['name'] === oldName) {
      this.potions.splice(i, 1, newName)
      }
    }
  },

  },

};
