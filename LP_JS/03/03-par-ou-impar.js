const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
// Mesmo como const, é possível alterar o valor com o método push
const listaDePares = []
const listaDeImpares = []

let indice = 0

while (indice < listaDeNumeros.length) {
  if (listaDeNumeros[indice] % 2 === 0) {
    // Como é uma const, utilizaremos um método para poder acrescentar o valor
    listaDePares.push(listaDeNumeros[indice])
  }
  else {
    listaDeImpares.push(listaDeNumeros[indice])
  }
  indice += 1
}
console.log({ listaDeNumeros })
console.log({ listaDePares })
console.log({ listaDeImpares })