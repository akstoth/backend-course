// Curso introdução ao Node.js

// Aula para introduzir arquivos

// Importando o módulo path, permitindo manipular caminhos de arquivos, focado no node.js
// Importando o módulo fs, permitindo manipular arquivos, focado no node.js
const path = require('node:path')
const fs = require('node:fs')

// Criando um caminho para o arquivo texto.txt
const filePath = path.join(process.cwd(),'Introducao', 'texto.txt')
const fileOutPath = path.join(process.cwd(),'Introducao', 'texto-com-linhas.txt')

// Lendo o arquivo texto.txt
fs.readFile(filePath, {}, (erro, dados) => {
    // Se houver erro, exibir mensagem de erro
    if (erro) {
        console.log(`Erro na leitura do arquivo no caminho: ${filePath}`)
        return
    }
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
            console.log(`Erro na escrita do arquivo no caminho: ${fileOutPath}`)
            return
        }
        console.log(`Arquivo escrito com sucesso no caminho: ${fileOutPath}`)
    })
    // Exibindo o conteúdo do arquivo
    //console.log(dados.toString())  
})

// Exibindo o caminho do arquivo
console.log(filePath)