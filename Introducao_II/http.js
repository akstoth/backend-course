// Importando o módulo http
// O http é o módulo que permite criar um servidor HTTP
const http = require('http')

// Criando um servidor HTTP, passando uma função de callback que recebe os objetos request e response
// A requisição pode receber arquivos, objetos, etc
const server = http.createServer((request, response) => {
    const { method, statusCode, url } = request
    if(url === '/'){
        response.write('<div><h1>Olá daqui do node</h1> <p>http server<p></div>')
        response.end()
    }
    console.log('request')
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando em https://localhost:3000')
})

