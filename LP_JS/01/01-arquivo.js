// Primeiro arquivo, aula introdutória

// Cria-se uma constante chamada numero com o valor 20 atribuido a ela
console.log(teste)
// Var faz algo chamado Hoisting ou içamento, declarando uma 
// variável não inicializada, por isso aparece undefined
var teste = 'Meu teste' // Não se utilza mais var, para evitar bugs


const qualquer = null // -> null => não tem valor; undefined => imprevisto
const qualquer2 = undefined
const numero1 = 7
const numeroFavorito = 5.1 // -> Se for somente 5.000, é tratado como inteiro
const estaChovendo = false
// Let permite alterar o valor
let numero2 = 2
const nome = 'Felipe'
const soma = numero1 + numero2 + qualquer2
// Coerção/conversão implícita
const soma2 = 'ab' + numero1
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2
const elevado = numero1 ** numero2 //Também pode ser: Math.pow(numero1,numero2)
const restoDivisao = numero1 % numero2
const absoluto = Math.abs(numero2 - numero1)

numero2++

// Exibe no teminal o valor da constante
console.log(numero1)
console.log(numero2)
console.log('Oi', nome, '!')
console.log(`Oi, ${nome} !, seu número favorito é: ${numeroFavorito}`)
console.log(`Condição do clima é chuvoso?: ${estaChovendo}`)
console.log(qualquer)
console.log(soma2)

// A chave dentro do do console.log faz um objeto da variável
console.log({ soma })
console.log({ subtracao })
console.log({ multiplicacao })
console.log({ divisao })
console.log({ elevado })
console.log({ restoDivisao })
console.log({ absoluto })

// Garanta que os elementos do array tenham o mesmo tipo
const nomeAlunos = ['Joana', 'Cássia', 'Kevin']

// Escopo
{
  const condicoesTempo = ['chuvoso', 'ensolarado', 'sol entre nuvens']
  console.log({ condicoesTempo })
  console.log({ nomeAlunos })
}
