// Задача 1

// Вариант 1. Инструкция if...else

const yearOfBirth = 2021;

if (yearOfBirth % 4 === 0) {
  console.log (`Год ${yearOfBirth} является высокостным`);

} else {
  console.log (`Год ${yearOfBirth} не является высокостным`);
}

// Вариант 2. Тернарный оператор

yearOfBirth % 4 === 0
? console.log (`Год ${yearOfBirth} является высокостным`)
: console.log (`Год ${yearOfBirth} не является высокостным`);