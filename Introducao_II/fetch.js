// Utilizando o fetch

// Faz uma requisição no endereço dado, utiliza a resposta e a transforma em texto e o mostra no terminal
fetch('http://localhost:3000').then(
    response => response.text()
    .then(data => console.log(data))
)

// Para rodar esse código, o servidor deve estar rodando também

// Segunda forma de fazer a requisição
async function makeRequest() {
    const response = await fetch('http://localhost:3000')
    const data = await response.text()

    console.log(data)
}

makeRequest()