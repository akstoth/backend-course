const idade = 19
const temCNH = true
const podeDirigir = idade > 18 && temCNH
// let numeroDePassageiros = 0

if (podeDirigir) {
  console.log('Pessoa habilitada para conduzir veículo')
  // numeroDePassageiros = 4
}
else {
  console.log('Pessoa não está habilitada para conduzir veículo')
  // numeroDePassageiros = 0
}
// Existe uma forma de não precisar passar por esse condicional para 
// atribuir valor a numeroDePassageiros? Utilizando ternário

const numeroDePassageiros = podeDirigir ? 4 : 0
// Equivalente à: 
// if(podeDirigir) {
//   numeroDePassageiros = 4
// else {
//   numeroDePassageiros = 0
// }

console.log({ numeroDePassageiros })


