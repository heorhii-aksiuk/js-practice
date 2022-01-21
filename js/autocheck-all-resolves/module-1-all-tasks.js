function runTest(testName, tests) {
  const testTitle = `Unit test "${testName}"`;
  const testStartMessage = '🔎 Tests start...';
  const testErrorMessage = '🤦‍♂️ Error... Tests aren`t found!';
  const testFailedMessage = '🚫 Unit test are failed!';
  const testPassedMessage = '😎 All tests are passed!';
  const testFinishMessage = '🏁 Tests finish. ';
  let testResultMessage;

  function subTestRunner() {
    const subTestLoger = message => console.log(message);
    const subTestResultMessage = (subtTestNumber, subTestResult) =>
      subTestResult
        ? `✔ Test #${subtTestNumber}: passed`
        : `❌ Test #${subtTestNumber}: failed`;

    if (Array.isArray(tests)) {
      console.log(testStartMessage);
      testResultMessage = testPassedMessage;

      tests
        .map((subTestResult, index) => {
          if (!subTestResult) testResultMessage = testFailedMessage;
          return subTestResultMessage(++index, subTestResult);
        })
        .forEach(subTestLoger);

      console.log(testFinishMessage);
    } else {
      testResultMessage = testErrorMessage;
    }
  }

  console.group(testTitle);
  subTestRunner();
  console.log(testResultMessage);
  console.groupEnd();
}

const test = (expected, result) => {
  const testResult = expected === result;
  return testResult;
};

// Task 21
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток.;

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;

  return isInRange;
}

// Testing

const testing = 'test';
const task21Tests = [
  test(isNumberInRange(10, 30, 17), true),
  test(isNumberInRange(10, 30, 5), false),
  test(isNumberInRange(20, 50, 24), true),
  test(isNumberInRange(20, 50, 76), false),
  test(isNumberInRange(20, 50, 76), false),
];

runTest('Task 21', task21Tests);

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

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }

// Test
