const words = [
  'коштувати',
  'різати',
  'попадати(в ціль)',
  'поранити',
  'дозволяти',
  'класти',
  'закрити',
  'позичати',
  'надсилати',
  'тратити',
  'будувати',
  'горіти',
  'вивчати',
  'нюхати',
  'зберігати',
  'спати',
  'відчувати',
  'залишати',
  'зустрічати',
  'мріяти',
  'значити',
  'губити',
  'стріляти',
  'отримувати',
  'освітлювати',
  'сидіти',
  'приносити',
  'купувати',
  'битися',
  'думати',
  'ловити',
  'вчити(когось)',
  'знаходити',
  'мати',
  'чути',
  'тримати',
  'читати',
  'казати',
  'платити',
  'створювати',
  'стояти',
  'розуміти',
  'продавати',
  'розповідати',
  'ламати',
  'вибирати',
  'говорити',
  'красти',
  'прокидатися',
];

const shuffle = (array) => {
  const resultArray = [];
  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array.splice(randomIndex, 1);
    resultArray.push(...element);
  } while (array.length > 0);

  resultArray.map((word) => console.log(word));
};

const date = new Date();

shuffle(words);

console.log('Toral words: ', words.length);
console.log('Date: ', date);
