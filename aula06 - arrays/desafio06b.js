/* criar lista e imprimir cada numero par encontrado */

const numeros = [2, 5, 10, 7, 12, 50, 23]

for (let i = 0; i <= numeros.length; i++) {
    const resultado = numeros[i]
    
    if (resultado % 2 === 0) {
        console.log(resultado)
    } 
}