// Esse for é mais simples. imperativo ou declarativo

const listaDeNumeros = [33, 131, 155, 555, 222, -21, 56]

for (let contador = 0; contador < 100; contador += 10) {
  console.log(contador)
}

// código imperativo
for (let contador = 0; contador < listaDeNumeros.length; contador += 1) {
  console.log(listaDeNumeros[contador])
}