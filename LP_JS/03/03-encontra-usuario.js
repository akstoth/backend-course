const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']

let encontrouUsuarioOuPercorreuListaInteira = false
let indice = 0

// Buscar manter somente uma expressão no while e if, para evitar problemas/erros
while (!encontrouUsuarioOuPercorreuListaInteira) {
  const usuarioAtual = listaDeContatos[indice]
  if (indice === listaDeContatos.length) {
    encontrouUsuarioOuPercorreuListaInteira = true
    console.log('Usuário não foi encontrado')
  }
  if (usuarioAtual.startsWith('Z')) {
    encontrouUsuarioOuPercorreuListaInteira = true
    console.log(`Usuário encontrado: ${usuarioAtual}`)
  }
  indice += 1
}


// A solução abaixo não é muito recomendada, pois força o loop a quebrar, mas é permitido
// while (true) {
//   const usuarioAtual = listaDeContatos[indice]
//   if (indice === listaDeContatos.length) {
//     console.log('Usuário não foi encontrado')
//     break
//   }
//   if (usuarioAtual.startsWith('Z')) {
//     console.log(`Usuário encontrado: ${usuarioAtual}`)
//     break
//   }
//   indice += 1
// }

