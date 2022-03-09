// function averageSpeedToPassMessage(distance, time) {
//   const result = Math.floor(distance / (time / 3600));
//   return `Чтобы проехать ${distance} км за ${time} секунд - нужна средняя скорость ${result} км/час.`;
// }

// console.log(averageSpeedToPassMessage(10, 100));
// console.log(averageSpeedToPassMessage(150, 1805));
// console.log(averageSpeedToPassMessage(1, 200));

function tripTimeMessage(distance, speed) {
  const result = (distance / speed).toFixed(1)
  return `Чтобы проехать ${distance} км со средней скоростью в ${speed} км/час - нужно ${result} часа`
}

console.log(tripTimeMessage(286, 12))
console.log(tripTimeMessage(284, 50))
