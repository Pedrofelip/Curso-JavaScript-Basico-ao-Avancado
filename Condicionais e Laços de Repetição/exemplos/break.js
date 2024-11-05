// O break é usado dentro dos laços de repetições para forçar a saida do loop, quando imposto o loop se encerra e voltamos ao fluxo normal do codigo, no exemplo usamos um if para determinar quando queremos que o fluxo se encerre

//declarando o array
const array = ["pedro", "gabi", "mari", "mafalda", "gustavo", "ricardo", "kleber"]

//passando os parametros
//contador;condição;incremento de 1 em 1
for (let i = 0; i < array.length; i++) {

		if(array[i] == "gustavo"){
			console.log("achamos o " + array[i])
			break
		}
		
		//lendo o nome referente ao indice
    console.log(`esse é o ${array[i]}`)
}