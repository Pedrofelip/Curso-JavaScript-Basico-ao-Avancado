//Declarando uma função sem parametro na forma padrão
function mostrarFrase(){
    console.log("testando a primeira função")
}

//Chamando a função
mostrarFrase();

//Declarando uma função com parametro na forma padrão
function mostrarNome(nome){
    console.log("meu nome é " + nome)
}

let nomeVariavel = "Pedro"

//Chamando a função e passando a variavel como parametro
mostrarNome(nomeVariavel)

//Declarando uma função oculta
const numeroAleatorio = function(){
    console.log(Math.random())
}

//Chamando a função anonima
numeroAleatorio();