// Quando for algo não implementado, um type, e algo que for, uma interface

// Primeiro, definimos a tipagem
export type Product = {
  name: string
  amountInStock: number
  unitValue: number
  barCode?: string
}

// Criando um produto (objeto) que seguirá a tipagem indicada
const product1: Product = {
  name: 'Pair of Socks',
  amountInStock: 100,
  unitValue: 5,
  barCode: 'asgegrbdv', // A vírgula no final é uma boa prática para o git
}

const product2: Product = {
  name: 'T-Shirt',
  amountInStock: 500,
  unitValue: 45,
}

// Como interagir com o arquivo JSON?