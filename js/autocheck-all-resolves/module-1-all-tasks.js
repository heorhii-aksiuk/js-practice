function unitTest(testName, ...tests) {
  const passed = 'passed';
  const failed = 'failed';
  const passedSign = '✔';
  const failedSign = '❌';
  let unitTestResult = undefined;
  let unitTestResultMessage = null;

  if (tests) {
    unitTestResult = true;
    tests.forEach((response, index) => {
      const sign = response ? passedSign : failedSign;
      const testNumber = index + 1;
      const testResult = response ? passed : failed;
      const testMessage = `${sign} Test ${testNumber} is ${testResult}`;
      console.log(testMessage);
      if (!response) unitTestResult = false;
    });
  }

  if (unitTestResult === undefined) {
    unitTestResultMessage = `🤦‍♂️ UnitTest is broken... Tests aren't found!`;
  } else if (unitTestResult === false) {
    unitTestResultMessage = `🚫 UnitTest: ${testName} - Some tests are failed!`;
  } else {
    unitTestResultMessage = `😎😎😎 UnitTest: ${testName} - All tests are passed!`;
  }

  console.log(unitTestResultMessage);

  return unitTestResultMessage;
}

unitTest('22', true, false, true);
// const test = (expected, result) => expected === result;

// console.log(test(5, 5));

// test(isNumberInRange(10, 30, 17));

// const task21Tests = [
//   test(isNumberInRange(40, 30, 17)),
//   test(isNumberInRange(10, 30, 17)),
//   test(isNumberInRange(10, 50, 17)),
//   test(isNumberInRange(10, 56, 17)),
// ];

// allTestsPass('Task 21', task21Tests);

// Task 21
/*


Логическое «И» (оператор &&)
Логические операторы используются для проверки условий с множественными выражениями, например в ветвлениях.

Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к false, и правый в остальных случаях.

выражение && выражение
В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true
Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false
То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3
Полезно
Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Манго"); // false && true -> ''
console.log("Манго" && ""); // true && false -> ''
console.log("Манго" && "Поли"); // true && true -> 'Поли'
console.log("Поли" && "Манго"); // true && true -> 'Манго'
Задание
Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция isNumberInRange(start, end, number)
В выражении проверки использован оператор &&
Вызов isNumberInRange(10, 30, 17) возвращает true
Вызов isNumberInRange(10, 30, 5) возвращает false 
Вызов isNumberInRange(20, 50, 24) возвращает true
Вызов isNumberInRange(20, 50, 76) возвращает false
*/

// Solution

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;

  return isInRange;
}

//Test

console.log(isNumberInRange(10, 30, 17)); //
console.log(isNumberInRange(10, 30, 5)); //
console.log(isNumberInRange(20, 50, 24)); //
console.log(isNumberInRange(20, 50, 76)); //
