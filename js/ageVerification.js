function ageVerification(userAge) {
  if (userAge < 18) {
    return 'Go away child!'
  }

  if (userAge >= 18 && userAge < 21) {
    return 'You can get beer only.'
  }

  if (userAge >= 21 && userAge < 60) {
    return 'Let`s party!'
  }

  if (userAge >= 60) {
    return 'Sorry only tea for you.'
  }
}

module.exports = ageVerification
