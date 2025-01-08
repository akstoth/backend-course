const listaDeNumeros = [33, 131, 155, 555, 222, -21, 56]
const usuarios = ['Jose', 'Antonio']

// código imperativo
// for (let contador = 0; contador < listaDeNumeros.length; contador += 1) {
//   console.log(listaDeNumeros[contador])
// }
console.log('Print via While \n')
let indiceDoNumero = 0
while (indiceDoNumero < listaDeNumeros.length) {
  console.log(listaDeNumeros[indiceDoNumero])
  indiceDoNumero += 1
}

// código declarativo
for (const usuario of usuarios) {
  console.log(usuario)
}

console.log('Print via For \n')
for (let numero of listaDeNumeros) {
  console.log(numero)
}

