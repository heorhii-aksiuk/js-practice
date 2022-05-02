const ageVerification = require('../js/ageVerification')

describe('ageVerification test: normal data', () => {
  beforeAll(() => console.log('test begin'))
  afterAll(() => console.log('test end'))

  test('should return "Go away child!"', () => {
    expect(ageVerification(7)).toBe('Go away child!')
  })
  test('should return "You can get beer only."', () => {
    expect(ageVerification(18)).toBe('You can get beer only.')
  })
  test('should return "Let`s party!"', () => {
    expect(ageVerification(23)).toBe('Let`s party!')
  })
  test('should return "Sorry only tea for you."', () => {
    expect(ageVerification(89)).toBe('Sorry only tea for you.')
  })
})
