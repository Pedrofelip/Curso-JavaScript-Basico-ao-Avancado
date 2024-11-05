//tipos de incremento ou decremento para a variavel que controla o loop

let numero = 10

while (numero < 100) {
    console.log(numero + ' - primeiro exemplo com a forma basica')

    numero = numero + 1
}


let exemplo2 = 0

while(exemplo2 < 10){
    console.log(exemplo2 + ' - segundo exemplo com a forma mais utilizada')

    exemplo2++
}

let exemplo3 = 100

while (exemplo3 > 0) {
    console.log(exemplo3 + ' - esse é o exemplo 3 com a forma que utilizamos quando não queremos mudar de 1 em 1')

    exemplo3 -= 10
}