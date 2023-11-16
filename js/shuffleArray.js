const words = [
  'коштувати',
  'різати',
  'попадати в ціль',
  'поранити',
  'дозволяти',
  'класти',
  'закрити',
  'позичати',
  'надсилати',
  'тратити',
  'будувати',
  'горіти',
  'вчити',
  'нюхати',
  'тримати',
  'спати',
];

const shuffle = (array) => {
  const resultArray = [];
  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array.splice(randomIndex, 1);
    resultArray.push(...element);
  } while (array.length > 0);
  return resultArray;
};

console.log(shuffle(words));
