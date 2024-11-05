//faça uma forma que descubra os numeros primos entre um intervalo de numeros

for(let i = 0; i <= 200; i++){
    let divisoes = 0
    for(let x = 1; x <= i; x++){
        if(i % x == 0){
            divisoes++;
        }
    }

    if(divisoes == 2){
        console.log(`${i} é um numero primo`)
    }else{
        console.log(`${i} não é um numero primo`)
    }
}