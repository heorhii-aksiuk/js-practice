function generatePassword(
  numberOfSymbols = 10,
  special = null,
  numberOfSpecial = 1,
) {
  let counter = 0
  let resultArray = []
  const symbols =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

  while (counter < numberOfSymbols) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)]

    if (symbol === resultArray[resultArray.length - 1]) continue

    resultArray.push(symbol)
    counter += 1
  }

  if (special) {
    counter = 0

    while (counter < numberOfSpecial) {
      let symbol = special[Math.floor(Math.random() * special.length)]

      if (symbol === resultArray[resultArray.length - 1]) continue

      resultArray.push(symbol)
      counter += 1
    }
  }

  const output = resultArray.join('')

  return console.log(output)
}

generatePassword(12, '*&%#', 2)
