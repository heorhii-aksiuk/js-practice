function generatePassword(length = 10) {
  let counter = 0
  let output = ''
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

  while (counter < length) {
    const randomIndex = Math.floor(Math.random() * symbols.length)
    const symbol = symbols[randomIndex]

    if (symbol === output[output.length - 1]) continue

    output += symbol
    counter += 1
  }

  return output
}

console.log(generatePassword())
