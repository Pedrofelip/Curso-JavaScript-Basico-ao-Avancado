//A arrow function se assemelha a uma função oculta porém deixa a palavra function de lado
//A arrow function não substitui a function padrão  totalmente

//Declarando uma arrow function sem parametros
const numeroAleatorio = () =>{
    return Math.random()
}

//Declarando uma arrow function com parametros
const soma = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(2,3))