//Diferente do break que interrompe o loop, o continue ele mantem o fluxo do laço porém pula uma execução, então sempre que ele cair na condição do continue podemos fazer uma trativa diferente da que é imposta no bloco mas sem interromper o funcionamento do loop

for(let i = 100; i != 0; i = i - 1){
    if(i % 2 == 0){
        console.log(`${i} caiu no continue`)
        continue
    }
    console.log(`${i} não caiu no continue`)
}