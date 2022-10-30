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
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    classificarImc(){
        const imc = this.calcularImc()
        console.log(imc)

        if (imc < 18.5) {
            console.log( 'Abaixo do peso')
        } else if (imc >=18.5 && imc <= 25) {
            console.log('Peso normal')
        } else if (imc > 25 && imc <= 30) {
            console.log('Acima do peso')
        } else if (imc > 30 && imc <= 40) {
            console.log('Obeso')
        } else {
            console.log('Obesidade Grave')
        }
    }
}

const caio = new Pessoa ('Caio', 83, 1.80)
const jose = new Pessoa ('José', 70, 1.75)
const raquel = new Pessoa('Raquel', 60, 1.60)

console.log(raquel)
raquel.classificarImc()