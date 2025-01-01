// Importando o módulo http
// O http é o módulo que permite criar um servidor HTTP
const http = require('http')

const sports = ['soccer', 'volley', 'basketball', 'tennis']
// Criando um servidor HTTP, passando uma função de callback que recebe os objetos request e response
// A requisição pode receber arquivos, objetos, etc

const server = http.createServer(async (request, response) => {
    const { method, statusCode, url } = request

    request.headers.accept = '*'
    request.headers.allow = '*'
    
    const bodyPromise = new Promise((resolve, reject) => {
        let body
        // A requisição, quando receber dados (enviando), quero pegar o que recebi nesse corpo, e faço um parse
        // Transformo para algo que o JavaScript entenda
        request.on('data', data => {
            body = JSON.parse(data)
        })

        request.on('end', data => {
            resolve(body)
        })
    })
    
    // Rota html -> front
    if(url === '/'){
        response.write('<div><h1>Ola daqui do node</h1> <p>http server<p></div>') // Escrevendo em html
        response.end()
        return
    }

    // Rota api -> back
    /*
    if(url === '/api/sports'){
        response.write(JSON.stringify(sports))
        // Fim do response
        response.end()
        return
    }*/
    if(url === '/api/sports'){
        if(method === 'GET'){
            response.write(JSON.stringify(sports))
            response.end()
            return
        }

        if(method === 'POST'){
            const body = await bodyPromise

            const {name} = body

            // Verifica se o nome já não está incluso, se não, acrescenta
            if(!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())){
                // Adiciona mais um elemento no array
                sports.push(name.toLowerCase())
            }
            
            response.write(name.toLowerCase())
            response.end()
            return
        }
    }

    // Resposta para rotas inválidas
    response.statusCode = 404 // Existem vários, como 200, inicando sucesso, entre outros
    response.write('<h1>Página não encontrada</h1>')
    response.end()
})

// Cuidado ao usar o http ou https, nesse caso, somente http
server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando em http://localhost:3000')
})