const animal = {
  especie: 'Canis Lupus', // Declara que é uma propriedade do objeto
  habitatComum: 'Florestas dos EUA',
  expectativaDeVida: 20,
  // terestre: true
  'terrestre': true
}

// antes
// const especieDoAnimal1 = 'Canis Lupus'
// const habitatComumDoAnimal1 = 'Florestas dos EUA'
// const expectativaDeVidaDoAnimal1 = 20
// const terestreDoAnimal1 = true

animal.populacao = 6_000_000_000 // Muito mais facil. Ou: 6 * 10 ** 9
console.log(animal.especie)
console.log(animal.populacao)
console.log(animal['terrestre'])