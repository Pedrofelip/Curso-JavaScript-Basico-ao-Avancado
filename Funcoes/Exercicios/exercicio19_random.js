//faça uma função que retorne um numero random e o numero maximo deve ser passado por parametro

const random = (i) => {
    //o floor arrendonda os numeros para baixo, o random retorna aleatorios entre 0 e 1, e para limitar é so fazer x o numero que vc quer
    return Math.floor(Math.random() * i)
}

console.log(random(25))