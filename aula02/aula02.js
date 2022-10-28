const valor_gas = 6.66
const valor_eta = 5.79
const combustivel = 'gasolina'
const km_l = 10
const distancia = 200
let valor_comb = 0


const comb_usado = distancia / km_l

if (combustivel === 'gasolina') {
    const valor_gasto = comb_usado * valor_gas
    console.log(`O combustível usado é ${combustivel}, a quantidade utilizada foi de ${comb_usado}L e o custo total foi de R$ ${valor_gasto.toFixed(2)}`) 
} else if (combustivel === 'etanol'){
    const valor_gasto = comb_usado * valor_eta
    console.log(`O combustível usado é ${combustivel}, a quantidade utilizada foi de ${comb_usado}L e o custo total foi de R$ ${valor_gasto.toFixed(2)}`)
} else {
    console.log('Digite um combustível válido')
}




