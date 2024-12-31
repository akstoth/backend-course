// Curso introdução ao Node.js

// Aula para introduzir IO (Input/Output) com prompt

// Importando o módulo readline, permitindo criar uma interface
const rl = require('readline')

// Criando uma interface para leitura e escrita, entrada do teclado (stdin) e saída de dados (stdout)
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
// callback: função que será chamada quando o usuário digitar algo, ela recebe o texto digitado
// query: texto que será exibido ao usuário, é uma pergunta

const promptPromise = {
    // Função que retorna uma promessa, que será resolvida quando o usuário digitar algo, com pergunta ja feita
    question:(pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta),(resposta) => resolve(resposta))

        } catch (error) {
            reject(error)
        }
    }),
    close: () => prompt.close()
}

// Podemos usar async await ou then
// Forma melhorada de utilizar o prompt sem callback
async function askUser() {
    const numero = await promptPromise.question('Qual é seu número favorito?: ')
    console.log(`O dobro do seu número favorito é ${parseInt(numero) * 2}`)

    const cor = await promptPromise.question('Qual é sua cor favorita?: ')
    console.log(`Sua cor favorita é ${cor}`)

    promptPromise.close()
}
askUser ()

/*
// Perguntando ao usuário qual é o seu número favorito
prompt.question('Qual é seu número favorito?: ', (resposta) => {
    // Quando usamos crase, podemos usar ${} para interpolar variáveis
    console.log(`O dobro do seu número favorito é ${parseInt(resposta) * 2}`)

    // Quando usar um prompt, deve-se fazer perguntas seguidas internamente
    // Perguntando ao usuário qual é a sua cor favorita
    prompt.question('Qual é sua cor favorita?: ', (resposta) => {
        console.log(`Sua cor favorita é ${resposta}`)

        // Encerrando a interface
        prompt.close()
    })
})
*/