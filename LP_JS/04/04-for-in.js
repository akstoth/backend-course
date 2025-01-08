const user = {
  name: 'JoSÉ mARIA SOUsa santos',
  email: 'JOSE.M1@gmail.com',
  age: 23,
  address: 'X street'
}

// Exibe as propriedades
// for (const prop in user) {
//   console.log(prop)
// }

// Exibe os valores atribuidos, permitindo também alterarmos diretamente
for (const key in user) {
  // const value = user[key]
  // if (key === 'name' || key === 'email') {
  //   user[key] = user[key].toLowerCase()
  //   user[key] = value.toLowerCase()
  // }
  if (key === 'name') {
    const names = user[key].split(' ') // Divide e transforma em array
    // console.log(names)
    user[key] = ''

    for (const name of names) {
      const normalizedName = name.toLowerCase()

      // utilizando rest operator para pegar a primeira letra e o restante
      const [primeiraLetra, ...restoDoNome] = normalizedName

      // Deixamos a primeira letra maiúscula e juntamos
      // join(') junta o array sem caracteres especiais
      user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
      user[key] = user[key].trim() // retira os espaços a mais
    }
  }
  if (key === 'email') {
    user[key] = user[key].toLowerCase()
  }

  console.log(user)
}

// Não recomendado usar for-in para array
// const numeros = [11, 22, 333]
// numeros[200] = 3123
// for (const key in numeros) {
//   console.log(numeros[key])
// }

// // Assim como não é recomendado usar for-of para objeto, não é iteravel 
// // pois são propriedades
// for (const key of user) {
//   console.log(key)
// }
