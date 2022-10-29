

function escreverNome(nome) {
    return `Seu nome é ` + nome
}

escreverNome('Caio Dias')

function maiorIdade (idade) {
    if (idade < 18) {
        console.log(escreverNome('Caio Dias') +` e sua idade é ${idade} anos, portanto voce é menor de idade.`)
    } else {
        console.log(escreverNome('Caio Dias')+ ` e sua idade é ${idade} anos, portanto você é maior de idade`)
    }
}

maiorIdade(19)

