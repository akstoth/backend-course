const numero1 = 100
const numero2 = 20
const numero3 = 20
const stringnumero3 = '20'

if (numero1 > 1) {
  console.log('Esse número é maior do que 1')
}
if (numero1 > 200) {
  console.log('Esse número é maior do que 200')
}
else {
  console.log('Esse número é menor do que 200')
}

if (numero2 < numero1) {
  console.log(`O ${numero2} é menor do que o ${numero1}`)
}

// Um igual é atribuição, dois iguais ele não compara tipo, pois pode ocorrer
// coersões implícitas, logo precisamos de três, que comparará o valor e o tipo
if (numero2 === numero3) {
  console.log('Os números são iguais em valor e tipo')
}
if (numero3 == stringnumero3) {
  console.log('Os números são iguais em valor')
}