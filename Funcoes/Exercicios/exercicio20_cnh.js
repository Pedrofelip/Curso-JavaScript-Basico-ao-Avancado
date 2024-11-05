// faça uma função que verifique se a pessoa é maior de 18 para tirar a carteira

function Cnh(idade){
    if (idade >= 18) {
        console.log("voce pode tirar a cnh")
    }else{
        console.log(`voce não pode tirar a cnh, faltam ${18 - idade} anos para que vc consiga`)
    }
}

Cnh(5)