function encrypt(shift, string) {
  const encryptCode = string
    .split('')
    .map((letter) => letter.charCodeAt(0) + shift);

  return String.fromCodePoint(...encryptCode);
}

console.log(encrypt(10, 'test'));

function decrypt(shift, string) {
  const decryptCode = string
    .split('')
    .map((letter) => letter.charCodeAt(0) - shift);

  return String.fromCodePoint(...decryptCode);
}

console.log(decrypt(10, '~o}~'));
