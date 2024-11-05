//Na condicional if o codigo executara algo SE o parametro passado entre os parenteses for verdade(true)

let idade = 21
let nome = "pedro"
let relacionamento = "namorando"

if(idade > 20){
	console.log("Liberado")
}

if(idade > 20 && nome == "pedro"){
    console.log("Liberado dnv")
}

if((idade > 20 && nome == "pedro") || relacionamento == "namorando"){
    console.log("Ta livre")
}