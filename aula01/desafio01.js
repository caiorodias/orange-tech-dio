const preco_comb = 5.79
const km_l = 12
let distancia = 1580

const comb_usado = distancia / km_l
const valor_gasto = comb_usado * preco_comb

/* Qual o valor da viagem? */

console.log(`O carro gastará ${comb_usado}L de gasolina no percurso total da viagem`)

console.log(`O valor gasto em combustível será de R$ ${valor_gasto.toFixed(2)}`) /* to fixed serve para reduzir as casas decimais */