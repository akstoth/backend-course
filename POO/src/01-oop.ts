// Código sendo feito em Type Script

// Como poderia gerar vários estabelecimentos?

// ###########################################################################
// Criando uma classe, comumente a primeira letra é maiúscula
// Uma classe é um molde para criar objetos
// com type, criamos um tipo de dado

type Produto = {
    nome: string;
    valor: number;
}

/*// Primeira forma de criar uma classe
class Estabelecimento {
    private endereco: string
    private setor: string
    private produtos: Produto[] // Array de produtos ou
    //private produtos: {nome: string, valor: number}[] // Array de objetos

    // O construtor é um método especial que é chamado quando um objeto é 
    // instanciado
    // Ele é responsável por inicializar o objeto, dará forma ao objeto
    constructor(endereco: string, setor: string, produtos: Produto[]) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = produtos
    }
}
*/
// Segunda foram de criar uma classe
class Estabelecimento {
    // Definindo o tipo de dado de filaDeEspera, que é um número
    // public filaDeEspera: number
    // private _filaDeEspera: number
    // Para usar o get e set, não podemos usar somente a definição de variável
    // privada, temos que usar o underline com um valor inicial atribuido
    private _filaDeEspera = 10
    

    constructor(
        // A diferença de public e private é que public é acessível de fora da 
        // classe
        public endereco: string,
        public setor: string,
        private produtos: Produto[],
        // Definindo um valor padrão para filaDeEspera
        // A interrogação indica que o parâmetro é opcional
        filaDeEspera?: number
    ) {
        // Se filaDeEspera for undefined, filaDeEspera será 10
        // this._filaDeEspera = filaDeEspera ?? 10
        // Ao invés de usar a variável, usamos o que já foi definido em set
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    // Método que retorna o nome dos produtos, por padrão são públicos
    retornaNomeDosProdutos() {
        // Retorna um array com os nomes dos produtos
        return this.produtos.map(produto => produto.nome)
    }

    // Método que retorna a fila de espera
    get filaDeEspera(){
        return this._filaDeEspera
    }

    // Método que altera a fila de espera   
    set filaDeEspera(fila: number){
        if (fila <=0){
            return
        }
        this._filaDeEspera = fila
    }

    // Método que decrementa o valor total dos produtos
    diminuiFilaDeEspera() {
        if(this._filaDeEspera === 0){
            return
        }
        this._filaDeEspera--
        // Também poderia ser this.filaDeEspera = this.filaDeEspera - 1 ou
        // this.filaDeEspera -= 1
    }
}

// Antes, criava-se um objeto para cada estabelecimento com object literals
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
    // Primeira forma de conseguir o nome dos produtos, 
    // seria a forma mais ideal?
    // retornaNomesDosProdutos() {
    //     return this.produtos.map(produto => produto.nome)
    // }

    // Segunda forma de conseguir o nome dos produtos, seria a forma mais ideal?
    // Com o this, conseguimos acessar o contexto do objeto
    nomeDosProdutos: function() { 
        // Se tentarmos usar o this fora do contexto da função, ele funciona no 
        // escopo global
        return this.produtos.map(produto => produto.nome)
    },
    // Infelizmente, não estará protegido, pois qualquer um pode alterar, 
    // por isso usamos classes
    _filaDeEspera: 10,
    // Método que retorna a fila de espera
    get filaDeEspera(){
        return this._filaDeEspera
    },
    // Método que altera a fila de espera   
    set filaDeEspera(fila: number){
        if (fila <=0){
            return
        }
        this._filaDeEspera = fila
    }
    
}

// Para proteger o objeto, usamos o Object.freeze, porém os objetos 
// internos podem ser alterados, logo, não é a melhor forma de proteger
Object.freeze(padaria)

const padaria2 = {
    endereco: 'Rua Dos Abacates, 123 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10}, 
        {nome: 'leite', valor: 5}, 
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
}

console.log(padaria)
console.log(padaria.nomeDosProdutos())
// Se tentarmos usar a função nomeDosProdutos() no padaria2, não funcionará
// Como resolver isso? Criando uma classe!

// Criamos agora um objeto a partir da classe Estabelecimento
// Instanciando um objeto
// O new é responsável por criar um novo objeto, ele executará o construtor
const padaria3 = new Estabelecimento(
    'Rua Dos Abacates, 123 - bloco D', 
    'alimentação',
    [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10}, 
        {nome: 'leite', valor: 5}, 
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
    //Usando um valor já iniciado negativo, ainda está aceitando, como corrigir?
    -3 //-> Agora com o set, não aceita valores negativos
)
const padaria4 = new Estabelecimento(
    'Rua Dos Morangos, 123 - bloco D', 
    'alimentação',
    [],
    27
)

console.log(padaria3)
console.log(padaria3.retornaNomeDosProdutos())
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
// Haverá problemas quando atribuímos valores negativos e modificações externas
// como proteger?
padaria4.filaDeEspera = -100 // -> É alterado na classe com o get
padaria4.filaDeEspera = 20 // Como fazer para aceitar valores positivos? com set
console.log(padaria4.filaDeEspera)
console.log(padaria3.endereco)
console.log(padaria3.filaDeEspera)
console.log(padaria3.setor)