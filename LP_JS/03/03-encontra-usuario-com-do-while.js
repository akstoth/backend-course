const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']
// const listaDeContatos = []

let encontrouUsuarioOuPercorreuListaInteira = false
let indice = 0

// do-while -> Executa ao menos uma vez
// do {
//   const usuarioAtual = listaDeContatos[indice]
//   if (indice === listaDeContatos.length) {
//     encontrouUsuarioOuPercorreuListaInteira = true
//     console.log('Usuário não foi encontrado')
//   }
//   if (usuarioAtual.startsWith('Z')) {
//     encontrouUsuarioOuPercorreuListaInteira = true
//     console.log(`Usuário encontrado: ${usuarioAtual}`)
//   }
//   indice += 1
// } while (!encontrouUsuarioOuPercorreuListaInteira)

do {
  const usuarioAtual = listaDeContatos[indice]
  if (indice >= listaDeContatos.length) {
    encontrouUsuarioOuPercorreuListaInteira = true
    console.log('Usuário não foi encontrado')
  }
  if (usuarioAtual && usuarioAtual.startsWith('Z')) {
    encontrouUsuarioOuPercorreuListaInteira = true
    console.log(`Usuário encontrado: ${usuarioAtual}`)
  }
  indice += 1
} while (!encontrouUsuarioOuPercorreuListaInteira)