class Carro {
	/* Sua solução aqui */
	constructor(model) {
		this._modelo = model.modelo
		this._cor = model.cor
		this._ano = model.ano
	}
	info(){
		return `${this._modelo} ${this._cor} ano ${this._ano}`
	}
}

var car = new Carro({
  modelo: 'Uno',
  ano: 1997,
  cor: 'vermelho'})

export function execute(car) {
  return car.info();
}

console.log(car.info())