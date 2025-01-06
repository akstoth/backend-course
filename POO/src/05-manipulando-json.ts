// Trabalhando com o JSON bruto

//import products from './05-produtos.json'
import fs from 'node:fs'      
import path from 'node:path'

// Primeiro, sem a importação
// Da maneira abaixo, acaba sendo tudo string
const productsJson = JSON.stringify([
  {
    "name": "Pair of Socks",
    "amountInStock": 100,
    "unitValue": 5
  },
  {
    "name": "T-Shirt",
    "amountInStock": 500,
    "unitValue": 45
  }
], null, 2) // Essa formatação, apesar de ser tudo string, separa os dados
// com identação 2

// Arquivo a ser gerado
const fileOutPath = path.join(__dirname, '05-generated-products.json')


const products = JSON.parse(productsJson)

fs.writeFileSync(fileOutPath, productsJson) // Gera o arquivo no diretório atual
console.log({productsJson})
console.log({products})
//console.log({products}) -> quando importar o arquivo json
//products.forEach(product => console.log(product))
//products.forEach(product => console.log(product.name))