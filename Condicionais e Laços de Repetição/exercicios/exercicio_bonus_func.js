// Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

// A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

// Se o número for positivo e par, retorne "Positivo e Par".

// Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

// Se o número for negativo, retorne "Negativo".

// Se o número for zero, retorne "Neutro".

const classificarNumero = (NumInt) =>{
    if (NumInt % 2 == 0 && Math.sign(NumInt) == 1) {
        console.log("Positivo e Par")
    }else if(NumInt % 2 != 0 && Math.sign(NumInt) == 1){
        console.log("Positivo e impar")
    }else if(Math.sign(NumInt) == -1){
        console.log("Negativo")
    }else if(NumInt == 0){
        console.log("Neutro")
    }else{
        console.log("isso não é um numero")
    }
}


classificarNumero(-3)