function encrypt(key, string) {
  const array = string.split('');
  const codeArray = array.map((letter) => letter.charCodeAt(0) + key);
  return String.fromCodePoint(...codeArray);
}

console.log(encrypt(10, 'test'));
