// Test

function runTest(testName, tests) {
  const testTitle = `Unit test "${testName}"`;
  const testStartMessage = '🔎 Tests start...';
  const testErrorMessage = '🤦‍♂️ Error... Tests aren`t found!';
  const testFailedMessage = '🚫 Unit test are failed!';
  const testPassedMessage = '😎 All tests are passed!';
  const testFinishMessage = '🏁 Tests finish. ';
  let testResultMessage;

  function subTestRunner() {
    const subTestLogger = message => console.log(message);
    const subTestResultMessage = (subTestNumber, subTestResult) =>
      subTestResult
        ? `✔ Test #${subTestNumber}: passed`
        : `❌ Test #${subTestNumber}: failed`;

    if (Array.isArray(tests)) {
      console.log(testStartMessage);
      testResultMessage = testPassedMessage;

      tests
        .map((subTestResult, index) => {
          if (!subTestResult) testResultMessage = testFailedMessage;
          return subTestResultMessage(++index, subTestResult);
        })
        .forEach(subTestLogger);

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

// Task 21 ======================================================

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
Присвой переменной isInRange выражение проверки вхождения number в числовой промежуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

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

// Testing

const task21Tests = [
  test(isNumberInRange(10, 30, 17), true),
  test(isNumberInRange(10, 30, 5), false),
  test(isNumberInRange(20, 50, 24), true),
  test(isNumberInRange(20, 50, 76), false),
];

runTest('Task 21', task21Tests);

// Task 22 ======================================================

/* Логическое «ИЛИ» (оператор ||)
Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.

выражение || выражение
В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда, которое было приведено к true.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true
Тут результатом тоже будет true, так как хотя бы один из операндов, в этом случае правый, был приведён к true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true
А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false
То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true
Задание
Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция checkIfCanAccessContent(subType)
В выражении проверки использован оператор ||
Вызов checkIfCanAccessContent("pro") возвращает true
Вызов checkIfCanAccessContent("starter") возвращает false
Вызов checkIfCanAccessContent("vip") возвращает true
Вызов checkIfCanAccessContent("free") возвращает false */

// Solution

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
}

// Testing

const task22Tests = [
  test(checkIfCanAccessContent('pro'), true),
  test(checkIfCanAccessContent('starter'), false),
  test(checkIfCanAccessContent('vip'), true),
  test(checkIfCanAccessContent('free'), false),
];

runTest('Task 22', task22Tests);

// Task 23 ======================================================

/* Логическое «НЕ» (оператор !)
Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

!выражение
Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Манго"); // !'Манго' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false
Задание
Функция getDiscount(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

Тесты
Объявлена функция isNumberNotInRange(start, end, number)
В выражении использован оператор !
Вызов isNumberNotInRange(10, 30, 17) возвращает false
Вызов isNumberNotInRange(10, 30, 5) возвращает true
Вызов isNumberNotInRange(20, 50, 24) возвращает false
Вызов isNumberNotInRange(20, 50, 76) возвращает true */

// Solution

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;
  return isNotInRange;
}

// Testing

const task23Tests = [
  test(isNumberNotInRange(10, 30, 17), false),
  test(isNumberNotInRange(10, 30, 5), true),
  test(isNumberNotInRange(20, 50, 24), false),
  test(isNumberNotInRange(20, 50, 76), true),
];

runTest('Task 23', task23Tests);

// Task 24 ======================================================

/* Задача: расчёт скидки
Задание
Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

Тесты
Объявлена функция getDiscount(totalSpent)
Вызов getDiscount(137000) возвращает 0.1
Вызов getDiscount(46900) возвращает 0.05
Вызов getDiscount(8250) возвращает 0.02
Вызов getDiscount(1300) возвращает 0
Вызов getDiscount(5000) возвращает 0.02
Вызов getDiscount(20000) возвращает 0.05
Вызов getDiscount(50000) возвращает 0.1 */

// Solution

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// Solution2

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;

  if (totalSpent < 5000) {
    return BASE_DISCOUNT;
  } else if (totalSpent < 20000) {
    return BRONZE_DISCOUNT;
  } else if (totalSpent < 50000) {
    return SILVER_DISCOUNT;
  } else if (totalSpent >= 50000) {
    return GOLD_DISCOUNT;
  }
}

// Testing

const task24Tests = [
  test(getDiscount(137000), 0.1),
  test(getDiscount(46900), 0.05),
  test(getDiscount(8250), 0.02),
  test(getDiscount(1300), 0),
  test(getDiscount(5000), 0.02),
  test(getDiscount(20000), 0.05),
  test(getDiscount(50000), 0.1),
];

runTest('Task 24', task24Tests);

// Task 25 ======================================================

/* Тернарный оператор
Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

<условие> ? <выражение если условие истинно> : <выражение если условие ложно>
Работает по такой схеме:

Вычисляется условие.
Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
Если условие ложно, то есть приводится к false, вычисляется выражение после :.
Значение вычисленного выражения возвращается как результат работы тернарного оператора.
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"
Выполним рефакторинг, заменив if...else тернарным оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"
Внимание
Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

Задание
Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

Тесты
Объявлена функция checkStorage(available, ordered).
Использован тернарный оператор.
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!" */

// Task 25 Solution

function checkStorage(available, ordered) {
  return ordered > available
    ? 'Not enough goods in stock!'
    : 'The order is accepted, our manager will contact you';
}

// Task 25 Testing

const accepted = 'The order is accepted, our manager will contact you';
const rejected = 'Not enough goods in stock!';

const task25Tests = [
  test(checkStorage(100, 50), accepted),
  test(checkStorage(100, 130), rejected),
  test(checkStorage(200, 20), accepted),
  test(checkStorage(200, 150), accepted),
  test(checkStorage(150, 180), rejected),
];

runTest('Task 25', task25Tests);

// Task 26 ======================================================

/* Задача: проверка пароля
Задание
Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

Используя тернарный оператор дополни функцию так, что:

Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
В противном случае, присвой message строку "Access denied, wrong password!".
Тесты
Объявлена функция checkPassword(password)
Использован тернарный оператор
Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!" */

// Task 26 Solution

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  return password !== ADMIN_PASSWORD
    ? 'Access denied, wrong password!'
    : 'Access is allowed';
}

// Task 26 Testing

const task26Tests = [
  test(checkPassword('jqueryismyjam'), 'Access is allowed'),
  test(checkPassword('angul4r1sl1f3'), 'Access denied, wrong password!'),
  test(checkPassword('r3actsux'), 'Access denied, wrong password!'),
];

runTest('Task 26', task26Tests);

// Task 27 ======================================================

/* Инструкция switch
В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.

Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;
}
Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение: по порядку, сверху вниз.

Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

Задание
Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

"starter" - цена подписки 0 кредитов.
"professional" - цена подписки 20 кредитов.
"organization" - цена подписки 50 кредитов.
Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

Тесты
Объявлена функция getSubscriptionPrice(type)
Вызов getSubscriptionPrice("professional") возвращает число 20
Вызов getSubscriptionPrice("organization") возвращает число 50
Вызов getSubscriptionPrice("starter") возвращает число 0 */

// Task 27 Solution

function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      return 0;
    case 'professional':
      return 20;
    case 'organization':
      return 50;
    default:
      return 'Invalid arguments';
  }
}

// Task 27 Testing

const task27Tests = [
  test(getSubscriptionPrice('professional'), 20),
  test(getSubscriptionPrice('organization'), 50),
  test(getSubscriptionPrice('starter'), 0),
];

runTest('Task 27', task27Tests);

// Task 28 ======================================================

/* Инструкция switch c блоком default
Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}
Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

Задание
Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword(null) возвращает "Canceled by user!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword('"jqueryismyjam") возвращает "Welcome!" */

// Task 28 Solution

function checkPasswordV2(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  switch (password) {
    case null:
      return 'Canceled by user!';

    case ADMIN_PASSWORD:
      return 'Welcome!';

    default:
      return 'Access denied, wrong password!';
  }
}

// Task 28 Testing

const task28Tests = [
  test(checkPasswordV2('mangohackzor'), 'Access denied, wrong password!'),
  test(checkPasswordV2(null), 'Canceled by user!'),
  test(checkPasswordV2('polyhax'), 'Access denied, wrong password!'),
  test(checkPasswordV2('jqueryismyjam'), 'Welcome!'),
];

runTest('Task 28', task28Tests);

// Task 29 ======================================================

/* Задача: доставка товара
Задание
Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

China - 100 кредитов
Chile - 250 кредитов
Australia - 170 кредитов
Jamaica - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

Тесты
Объявлена функция getShippingCost(country)
В теле функции использована инструкция switch
Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country" */

// Task 29 Solution

function getShippingCost(country) {
  let price;

  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Jamaica':
      price = 120;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Chile':
      price = 250;
      break;

    default:
      return 'Sorry, there is no delivery to your country';
  }

  return `Shipping to ${country} will cost ${price} credits`;
}

// Task 29 Testing

const task29Tests = [
  test(
    getShippingCost('Australia'),
    'Shipping to Australia will cost 170 credits',
  ),
  test(
    getShippingCost('Germany'),
    'Sorry, there is no delivery to your country',
  ),
  test(getShippingCost('China'), 'Shipping to China will cost 100 credits'),
  test(getShippingCost('Chile'), 'Shipping to Chile will cost 250 credits'),
  test(getShippingCost('Jamaica'), 'Shipping to Jamaica will cost 120 credits'),
  test(
    getShippingCost('Sweden'),
    'Sorry, there is no delivery to your country',
  ),
];

runTest('Task 29', task29Tests);
