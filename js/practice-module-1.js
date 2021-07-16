let result = 5 + 6 + '4';
console.log(result);

let massage = 'Hello my friend';
console.log(massage.length);
console.log(massage.toLowerCase());
console.log(massage.toUpperCase());
console.log(massage.indexOf('my'));
console.log(massage.includes('My'));

const randomNumber = 50;
result = randomNumber >= 10 && randomNumber < 40;
console.log(result);

result = randomNumber < 10 || randomNumber < 40;
console.log(result);

console.log(!true);

if (result === false) {
  massage = 'Hello my best friend'
}
else {
  massage = "Lol"
}
console.log(massage);

const userAge = 14;
const minAge = 18;
let massageForUser

if (userAge >= minAge) {
  massageForUser = 'Доступ разрешен'
}
else {
  massageForUser = 
  `Доступ заперщен, нет ${minAge}! Приходите через ${(minAge - userAge)} года=)`
}
console.log(massageForUser);

