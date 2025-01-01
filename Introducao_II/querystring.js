// Importa o módulo
const querystring = require('node:querystring')
const url = require('node:url')

const baseUrl = 'http://siteviagem.com.br'

// stringigy transforma um objeto javascript numa string
const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verão'
})

// Acrescentamos os itens na url base (como se fosse o filtro, ou uma página)
const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

// Aqui podemos retornar o que foi acrescentado na url para o fomato objeto
const parsedUri = querystring.parse(uri)
console.log(uri)
console.log(parsedUri) // Se usar console.log(parsedUri.destino), mostrará somente destino, etc
console.log(parsedUri.destino)
console.log(url.parse(fullUrl))
// Outra forma de se fazer a junção de um filtro a url, mas com somente uma string
const uri2 = querystring.escape('São Paulo')
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)

