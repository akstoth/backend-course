// Curso introdução ao Node.js

// Importando o módulo readline, permitindo criar uma interface
const rl = require('readline')

// Criando uma interface para leitura e escrita, entrada do teclado (stdin) e saída de dados (stdout)
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
// callback: função que será chamada quando o usuário digitar algo, ela recebe o texto digitado
// query: texto que será exibido ao usuário, é uma pergunta

// Perguntando ao usuário qual é o seu número favorito
prompt.question('Qual é seu número favorito?', (resposta) => {
    // Quando usamos crase, podemos usar ${} para interpolar variáveis
    console.log(`O dobro do seu número favorito é ${parseInt(reposta)*2}`) 
    
    // Encerrando a interface
    prompt.close()
})
