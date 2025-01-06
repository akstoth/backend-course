# Introdução ao Express
## Express - Framework
* Faremos um servidor
* Documentação referência: [Express.js](https://expressjs.com/pt-br/)
* Instalamos o express `npm i express`
* Usando `!` em um arquivo `.html`, aparece um template

## Segunda parte - Clientes HTTP para testes
* Pela barra de endereço do navegador, só era possível realizar GET
* Criado o arquivo `server.ts` na raiz
* No Thunder Client, cria-se uma nova coleção, para podermos acrescentar os métodos. Em settings do Collection, colocamos a base URL da seguinte maneira: `[::]:3300` e nos métodos, somente a rota, como por exemplo para o GET -> `/api`
* Para mais statusCode, ver [StatusCode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* Instalamos o cors com o comando `npm i cors`, em seguida usamos o comando `npm i --save-dev @types/cors`
