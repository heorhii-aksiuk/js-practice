function randomNumber(first = 0, last = 100) {
  const output = Math.floor(Math.random() * (last - first + 1)) + first
  return output
}

console.log(randomNumber())
