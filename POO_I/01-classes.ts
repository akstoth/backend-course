// Código sendo feito em Type Script

// Como poderia gerar vários estabelecimentos?

// Antes, criava-se um objeto para cada estabelecimento
const padaria = {
    endereco: 'Rua Dos Laranjais, 123 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10}, 
        {nome: 'leite', valor: 5}, 
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
    // Primeira forma de conseguir o nome dos produtos, seria a forma mais ideal?
    // retornaNomesDosProdutos() {
    //     return this.produtos.map(produto => produto.nome)
    // }

    // Segunda forma de conseguir o nome dos produtos, seria a forma mais ideal?
    // Com o this, conseguimos acessar o contexto do objeto
    nomeDosProdutos: this.produtos.map(produto => produto.nome)
    
}

console.log(padaria)
console.log(padaria.nomeDosProdutos())