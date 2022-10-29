
function calcularImc(pesoKg, alturaM) {   /* FUNÇÕES AUXILIARES */
    return pesoKg / (alturaM * alturaM)
}    

function classificarImc(imc) {     /* FUNÇÕES AUXILIARES */
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >=18.5 && imc <= 25) {
        return 'Peso normal'
    } else if (imc > 25 && imc <= 30) {
        return 'Acima do peso'
    } else if (imc > 30 && imc <= 40) {
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

/* Main (código principal) */
(function () {
    const alturaM = 1.80
    const pesoKg = 83

    const imc = calcularImc(pesoKg, alturaM)
    console.log(classificarImc(imc))
})()  /* POSSO CHAMAR A FUNÇÃO NELA MESMO, COM ISSO IGNORA-SE CHAMAR ELA FORA, e ela também pode ser uma função não nomeada */

/* main() */