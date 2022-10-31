/* TABUADA */



function tabuada(num){
    console.log(`Tabuada de ${num}`)

    for (let contador = 0; contador <= 10; contador++) {
        const resultado = contador * num
        console.log(`${num} x ${contador} = ${resultado}`)
    }
}

tabuada(7)