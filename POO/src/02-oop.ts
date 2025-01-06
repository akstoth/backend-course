// ###########################################################################
// Segunda parte sobre programação Orientada a objetos
// Importa o array de produto
import type { Produto } from "./01-oop"

interface ReceitaInterface{
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    // ?: Indica que não é um parâmetro obrigatório a ser passado
    receitaObrigatoria?: boolean
}

// Criando uma interface, que indica quais os métodos que a classe deve ter
interface EstabelecimentoInterface {
  endereco: string
  setor: string
  filaDeEspera: number
  // Método que retorna o nome dos produtos, um array de string
  retornaNomeDosProdutos: () => string[]
  diminuiFilaDeEspera(): void
}

// Com essa interface, temos tudo da interface base e o que precisa a mais
interface FarmaciaInterface extends EstabelecimentoInterface {
    compraRemedioPrescrito: (
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ) => void

}

// Criando uma classe que implementa a interface generalizada
// Mesmo que na classe criada tenha funções a mais, não terá problema
class Estabelecimento implements EstabelecimentoInterface {
  protected _filaDeEspera = 10

  constructor(
      public endereco: string,
      public setor: string,
      // Para permitir utilizar a classe como herança, muda de private para
      protected produtos: Produto[],
      filaDeEspera?: number
  ) {
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
  }
}

// Como aproveitar uma classe já criada?, utilizamos herança
// Como usamos private, a classe que herda, não terá acesso e acusará erro
class Farmacia extends Estabelecimento implements FarmaciaInterface {
    protected _filaDeEspera = 10

    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }
    public compraRemedioPrescrito(
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome)
        )

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => {
                // Na aula usou: 
                !produto.receitaObrigatoria ? true:
                receita.remedios.includes(produto.nome)
                //!produto.receitaObrigatoria || 
                //receita.remedios.includes(produto.nome)
            })

        if (remediosDisponiveis.length === 0){
            console.log('Infelizmente não temos os remédios em estoque!')
        }

    // Com aspas podemos colocar o nome da variável no terminal
        console.log({remediosDisponiveis})
        console.log({remediosAutorizados})
    }
}

const supermercado = new Estabelecimento(
  'Rua Dos Abacates, 123 - bloco D', 
  'alimentação',
  [
      {nome: 'pão', valor: 0.8}, 
      {nome: 'arroz', valor: 10}, 
      {nome: 'leite', valor: 5}, 
  ],
  25
)

const farmaciaDoZe = new Farmacia(
    'Rua X, 123', 
    'farmaceutico',
    [
        {nome: 'aspirina', valor: 8},
        {nome: 'creme hidratante', valor: 15},
        {nome: 'remédio controlado 1', valor: 50, receitaObrigatoria: true}, 
        {nome: 'remédio controlado 2', valor: 80, receitaObrigatoria: true}, 
        {nome: 'vitamina C', valor: 20}, 
        
    ],
)

farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['aspirina', 'shampoo', 'remédio controlado 1'],
    identificacaoDoMedico: '123-456-789'
},['aspirina', 'remédio controlado 1', 'shampoo'])
