// Como trabalhar com composição?

// Primeiro, fazemos um type genérico, referência:
// https://www.typescriptlang.org/docs/handbook/mixins.html
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome: string, idadeEmMeses: number}>

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args: any){
      // args não está como objeto, e sim como array
      super(args[0])
    }
    voa() {
      console.log(`${this.nome} está voando`)
    }
  }
}

function MixinNada<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args: any){
      // args não está como objeto, e sim como array
      super(args[0])
    }
    nada() {
      console.log(`${this.nome} está nadando`)
    }
  }
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args: any){
      // args não está como objeto, e sim como array
      super(args[0])
    }
    anda() {
      console.log(`${this.nome} está andando`)
    }
  }
}

interface AnimalInterface {
  nome: string
  idadeEmMeses: number
  comer: () => void
}

class Animal implements AnimalInterface {
  public nome: string
  public idadeEmMeses: number
  constructor({nome, idadeEmMeses} : {nome: string, idadeEmMeses: number}) {
    this.nome = nome
    this.idadeEmMeses = idadeEmMeses
  }
  
  comer(): void{
    console.log(`${this.nome} está comendo`)
  }
}

class AnimalAndadorVoadorNadador extends MixinNada(MixinAnda(MixinVoa(Animal))){}

// Criando os objetos
const cachorro = new (MixinAnda(Animal))({nome: 'Rex', idadeEmMeses: 24})
const mosca = new (MixinVoa(Animal))({nome: 'Mosca x',idadeEmMeses: 0.1})
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))(
  {nome: 'Alfredo',idadeEmMeses: 29}
)
const pato2 = new AnimalAndadorVoadorNadador({nome: 'Pedro',idadeEmMeses: 47})

cachorro.comer()
cachorro.anda()
mosca.comer()
mosca.voa()
pato.anda()
pato.comer()
pato.nada()
pato.voa()
pato2.anda()
pato2.comer()
pato2.nada()
pato2.voa()