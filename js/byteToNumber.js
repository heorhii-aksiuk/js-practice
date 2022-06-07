function byteToNumber(byte) {
  let result = 0
  let power = 0
  let index = byte.length - 1

  while (index >= 0) {
    if (byte[index] === '1') result += 2 ** power
    power += 1
    index -= 1
  }
  return result
}
console.log(byteToNumber('11111111'))
