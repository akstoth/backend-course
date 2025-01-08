if (true) {
  console.log('Sempre aparecerei')
}
if (false) {
  console.log('Nunca aparecerei')
}

console.log(100 >= 20)

// or/ou: ||
// and/e: &&

// Expressões com or sempre retornam verdadeiro, a menos que Todas as expressões
// sejam falsas
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(1 < -20 || 100 < 5 || 30 > 10 || 20 > 50)

// Expresões com and sempre retornam falso, a menos que Todas as expressões 
// sejam verdadeiras
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)