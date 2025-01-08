const nomeDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

console.log('Olá', nomeDeUsuarios[0])
console.log('Olá', nomeDeUsuarios[1])
console.log('Olá', nomeDeUsuarios[2])
console.log('Olá', nomeDeUsuarios[3])

// const indiceAtual = nomeDeUsuarios.length
let indiceDoUsuario = 0
// console.log(indiceAtual)

while (indiceDoUsuario < nomeDeUsuarios.length) {
  console.log(`Olá ${nomeDeUsuarios[indiceDoUsuario]}`)
  // indiceDoUsuario = indiceDoUsuario + 1
  indiceDoUsuario += 1
}