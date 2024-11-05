//Parecido com o while porém com a diferença que ele executa pelo menos uma vez a logica antes de verificar a condição, então mesmo que a codição não seja atingida para entrar no loop a logica será executada pelo menos uma vez

let x = 1000

do {
    console.log(x)
    x = x - 10
} while (x >= 0);

let y = 1000

do {
    console.log(`rodei uma vez antes de passar pela condição ${y}`)
    y = y - 100
} while (y > 1100);