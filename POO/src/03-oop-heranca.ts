// Qual a diferença entre composição e herança?

/*class Animal {
  public nome: string
  public idadeEmMeses: number
  constructor(nome: string, idadeEmMeses: number){
    this.nome = nome
    this.idadeEmMeses = idadeEmMeses

  }
}*/

interface AnimalInterface {
  nome: string
  idadeEmMeses: number
  comer: () => void
}

class Animal implements AnimalInterface {
  constructor(public nome: string, public idadeEmMeses: number){}
  
  comer(): void{
    console.log(`${this.nome} está comendo`)
  }

  andar(): void {
    console.log(`${this.nome} está andando`)
  }
}

class AnimalVoador extends Animal implements AnimalInterface {
  constructor(
    public nome: string, 
    public idadeEmMeses: number, 
    public penas: boolean){
      // Super é usado para chamar o construtor da classe pai
      super(nome, idadeEmMeses)
  }
  voa() {
    console.log(`${this.nome} está voando`)
  }

  /*
  // Sobrescrevendo o método andar, o que não é ideal e não da certo
  andar(): void {
    throw Error('Esse animal não pode andar')
  }
  */
  
}

const cachorro = new Animal('Rex', 24)
const mosca = new AnimalVoador('Mosca x', 0.1, false)
// O caso do pato, pode voar, andar...
// Para não precisar criar uma classe para cada tipo de animal, 
// podemos usar a composição
const pato = new AnimalVoador('Alfredo', 5, true)

cachorro.comer()
mosca.comer()
mosca.voa()
mosca.andar()

// Garante que não seja exportado nada além do que foi solicitado
export {}