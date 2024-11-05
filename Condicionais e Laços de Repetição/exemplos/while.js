//O 'while' executa o bloco de código que está entre as chaves enquanto a condição passada for verdadeira(true). “Em quanto condição for verdade execute isso”

//defini um parametro ou contador
let i = 10

//coloca uma condição
while (i >= 0) {
    console.log(`eu sou o contador ${i}`)

    //faça uma logica para que o codigo não caia em um loop infinito
    //podemos incrementar ou decrementar qualquer valor
    i = i - 1
}

let x = 0

while (x <= 15) {
    console.log(`eu sou o contador do segundo exemplo ${x}`)

    //NUNCA SE ESQUEÇA DE VINCULAR A VARIAVEL COM O DECREMENTO OU INCREMENTO
    x = x + 1
}