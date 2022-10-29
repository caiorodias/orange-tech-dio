
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100
const formaPagamento = 3


if (formaPagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10))
        console.log('À vista - Débito')
    } else if (formaPagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15))
        console.log('À vista - Dinheiro ou PIX')
    } else if (formaPagamento === 3) {
        console.log(precoEtiqueta)
        console.log(`Crédito - até 2x sem juros de R$${precoEtiqueta / 2}`)
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10))
        console.log('Crédito - até 12x com juros')
    }
