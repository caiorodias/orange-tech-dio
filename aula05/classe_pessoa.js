class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
}

const caio = new Pessoa ('Caio', 26, 1.80)
const jose = new Pessoa ('José', 70, 1.75)

console.log(jose)
jose.calcularImc()