<img height="70" src="https://media.licdn.com/dms/image/v2/C5603AQEf_LnzVyq-8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641572002935?e=1741824000&v=beta&t=RPDLVGaegYBSL9zLyOjnjDxRniLw3qLKSu9hZky4uMA">

## Programação Orientada a Objetos I
* O JavaScript permite realizar a programação funcional ou orientada a objetos (POO)
* Permite criar formas que podem ser reutilizadas
* Objetos a partir de formas padrões (negócio)
* Para iniciar um projeto em TypeScript, primeiro, geramos o arquivo `package.json`, caso não o tenha, com o comando `npm init -y`
* Em seguida, geramos o arquivo de configuração TypeScript com o comando `tsc --init`
* Descomentamos as linhas `rootDir`, `moduleResolution` e `outDir` (ver: [Configuração do Projeto Node TS](https://www.dio.me/articles/configurando-o-seu-projeto-node-ts))
* Edite o `package.json` para criar um script para rodar a aplicação ou utilize o comando `ts-node`
* Segurando Alt e setas para cima ou para baixo, pode-se mover a linha de código

## JSON
* Uma estrutura de dados que permite transmitir informações entre sistemas (servidor e cliente, por exemplo)
* JSON é um objeto JavaScript, de maneira mais restrita, feito para trabalhar também entre linguagens de programação diferentes
* JSON pode ser dos seguintes tipos primários do JavaScript:
  - number
  - string
  - boolean
  - null
* Além disso, pode ser um:
  - array
* Para converter um objeto JavaScript em uma string JSON, utilize `JSON.stringify(objeto)`
* Para converter uma string JSON em um objeto JavaScript, utilize `JSON.parse(stringJSON)`
* Caso aconteça algum erro em importar algum path no node, use o comando `npm i -D @types/node`
* Como boa prática, um arquivo json gerado com identação 0 seria melhor, ocupando menos espaço
* Podemos pegar um texto em json, e salva-lo com a extensao json to ts
