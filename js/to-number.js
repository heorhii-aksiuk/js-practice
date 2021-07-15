let value = 'Hello';

let toNumber = Number(value);
console.log(`Приводим к числу ${value} через конструктор Number:` , toNumber);
console.log(`Тип данных ${typeof value} через конструктор Number:` , toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);

value = '5000';
console.log(value);

value = Number(value);
console.log(value);
console.log(typeof value);

value = '3000';
console.log(value);

value = +value;
console.log(value);
console.log(typeof value);

value = '';
console.log(value);

value = +value;
console.log(value);
console.log(typeof value);

value = ' ';
console.log(value);
console.log(typeof value);


value = +value;
console.log(value);
console.log(typeof value);

value = false;
console.log(value);
console.log(typeof value);

value = +value;
console.log(value);
console.log(typeof value);

value = null;
console.log(value);
console.log(typeof value);

value = +value;
console.log(value);
console.log(typeof value);

value = undefined;
console.log(value);
console.log(typeof value);

value = +value;
console.log(value);
console.log(typeof value);

