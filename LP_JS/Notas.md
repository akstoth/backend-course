# Lógica de Programação com JavaScript (Node.JS)

## Instalações

- Iniciando a instalação dos softwares, ferramentas e extensões a serem
  utilizadas
- Node.js é um "runtime", uma forma de executar JavaScript
  - Com ele podemos executar JavaScript fora do navegador
- VS Code é um editor de texto!
- Dicas:
  - Quando estiver no terminal, ao iniciar a escrita e pressionar tab, é feito
    o preenchimento do mesmo
- Instalando a extensão Code Runner, pode-se criar e executar mais facilmente
  - Após instalar, faça "Ctrl+,", para abrir as configurações
  - Digite "code runner terminal" e habilite a caixa de seleção
- NPM - Node Package Manager -> É o gerenciador de pacotes utilizado para
  instalar pacotes no Node
  - Para iniciar, podemos instalar um pacote chamado cowsay com o comando:
    `npm install -g cowsay` ou `npm i -g cowsay`, onde -g instala globalmente
  - Para desinstalar, utilize o comando `npm remove -g cowsay`
- Para instalarmos o TypeScript, podemos usar o comando `npm i typescript`
  - Para cada projeto, idealmente, instalamos uma versão para cada projeto,
    para não ter nenhum problema com inconsistências entre desenvolvedores
  - Instalamos também ts-node e tsx com o comando `npm i -g ts-node tsx`
  - O TypeScript em si não é utilizado na hora de subir o projeto, para isso
    usamos o JavaScript

## Arquitetura Cliente-Servidor para WEB

- ESLint serve para reforçar os padrões de código
- Prettier garante mais o formato, o estilo do código, espaçamento, quebra de
  linha inadequada, que o ambiente esteja correto
- Para instalar o ESLint e o Prettier como dependências de desenvolvimento
  (devDependencies), realiza-se o seguinte comando:
  `npm i -D eslint eslint-config-prettier eslint-plugin-prettier`
- Não esquecer de instalar as extensões do ESlint e Prettier
- O JavaScript implementa o ECMA, que são conjuntos de regras e padrões
- Não utilzar configurações globais, mas sim locais, para cada projeto
- Para iniciar o eslint, faça: `npx eslint --ini` ou
  `npm init @eslint/config@latest`. Infelizmente, na versão atual, a opção
  "To check syntax, find problems, and enforce code style" não existe mais, por
  estar decaída, nisso usa-se o prettier.
- Instalamos o editorconfig e criamos o .editorconfig e o Material Icon Theme
  - Com Ctrl+"barra de espaço" aparecem os módulos/métodos
- Com a sequência de atalhos Ctrl+Shift+P, acessamos o terminal de comandos do
  VS Code, e escrevemos reload, para recarregar o VC Code
- Criamos também o arquivo .prettierrc. No site: [Cod3r](https://blog.formacao.dev/configurando-a-extensao-prettier-no-visual-studio-code/#:~:text=Instalando%20o%20Prettier,Code%20e%20clicar%20em%20instalar.), há também dicas importantes para isso

- Um site é basicamente feito de várias chamadas/ requisições HTTP, e aparece
  os recursos que compõe a página em si
- DOM - é o html renderizado
- O que o Back-End entrega / devolve?
- O cliente é o navegador, que requisita algo de um servidor uma API, do Back-End
- Os [_Status Codes HTTP_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- IP -> é basicamente um endereço que o computador etá associado
- DNS => _Domain Name Server_ basicamente traduz uma url para o formato do IP
- O site [JSON Place Holder API](https://jsonplaceholder.typicode.com) nos
  apresenta rotas/ métodos
- Utilizamos no VS Code uma extensão que nos permite realizar requisições HTTP,
  sendo sugerido o **_Thunder Client_**
- O método PUT serve para atualizar recurso inteiro
- O método PATCH serve para atualizar somente o que foi enviado
- O método PUT serve para criar

## Gerenciamento de memória dinâmica

-
