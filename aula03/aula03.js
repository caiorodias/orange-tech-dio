

function incrementarJuros(valor, taxa) {
    const valorDeAcrescimo = (taxa / 100) * valor
    return valor + valorDeAcrescimo /* se não colocar o return ele não vai */
}

console.log (incrementarJuros(100, 10))
console.log (incrementarJuros(100, 15))
console.log (incrementarJuros(100, 20))

