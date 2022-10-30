/* marca, cor, gasto médio de comb
método q pela qtd de km e o preço dê o valor gasto do percurso */


class Carro {
    marca;
    cor;
    kmPorLitro;
    
    constructor(marca, cor, kmPorLitro){
        this.marca = marca
        this.cor = cor
        this.kmPorLitro = kmPorLitro
    }

    custoTotal(valorComb, distanciaKm){
        console.log('O custo total em combustível na viagem será de  R$ '+(distanciaKm / this.kmPorLitro * valorComb).toFixed(2))
    }
}

const p307 = new Carro('Pegeout', 'cinza', 10)
const palio = new Carro('Fiat', 'preto', 12)

console.log(p307)
p307.custoTotal(5, 73)

console.log(palio)
palio.custoTotal(5, 73)