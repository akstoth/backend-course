// Curso introdução ao Node.js

// Aula para introduzir arquivos

// Importando o módulo path, permitindo manipular caminhos de arquivos, focado no node.js
// Importando o módulo fs, permitindo manipular arquivos, focado no node.js
const path = require('node:path')
const fs = require('node:fs')

// Criando um caminho para o arquivo texto.txt
const filePath = path.join(process.cwd(),'Introducao', 'texto.txt')
const fileOutPath = path.join(process.cwd(),'Introducao', 'texto-com-linhas.txt')

const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.NODE_ENV)

// Exibindo o caminho do arquivo com o console.log
// o método log exibe uma mensagem no console
console.log(filePath)

// Iniciando um contador de tempo, utilizando o console.time
console.time('Manipular Arquivos')
console.time('Leitura do Arquivo')

// Lendo o arquivo texto.txt
fs.readFile(filePath, {}, (erro, dados) => {
    // Se houver erro, exibir mensagem de erro
    if (erro) {
        //console.log(`Erro na leitura do arquivo no caminho: ${filePath}`)
        // Com o console.error, a mensagem de erro é exibida em vermelho
        console.error(`Erro na leitura do arquivo no caminho: ${filePath}`)
        return
    }

    // Exibindo o tempo de leitura do arquivo
    console.timeEnd('Leitura do Arquivo')
    // Separando as linhas do arquivo
    // O método split divide uma string em um array de substrings
    const texto = dados.toString()
    const linhas = texto.split('\n')
    
    // Exibindo as linhas do arquivo
    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index + 1} - ${linha}`
    )

    // Join e split são métodos que podem ser usados para manipular strings, onde:
    // Join: junta todos os elementos de um array em uma string
    // Split: divide uma string em um array de substrings
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro) {
            console.error(`Erro na escrita do arquivo no caminho: ${fileOutPath}`)
            return
        }
        // Quando utilizamos objeto, se usarmos o console.dir, ele exibe o objeto de forma, mais autoexplicativa
        // Ou também o console.table, que exibe o objeto em forma de tabela
        console.log(`Arquivo escrito com sucesso no caminho: ${fileOutPath}`)

        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)

        // As variáveis de ambiente são muito importantes, pois com elas podemos configurar o ambiente de execução
        // ou seja, não precisamos alterar o código, apenas as variáveis de ambiente, que podem ser
        // em um sistema operacional, um bucket diferente, na nuvem, ambiente de desenvolvimento,
        // ambiente de produção, ambiente de teste

        console.timeEnd('Manipular Arquivos')
    })
    // Exibindo o conteúdo do arquivo
    //console.log(dados.toString())  
    
})

