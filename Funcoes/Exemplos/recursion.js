//A recursão no JavaScript é o nome dado para quando a função si chama dentro dela, temos que tomar cuidado com esse recurso pois se executada muitas vezes de uma só fez pode sobre carregar o codigo

function acharNumeroPar(n){
	if(n % 2 == 0){
		console.log(n + " é par")
	}else{
		console.log(n + " não é par")
		acharNumeroPar(n + 1)
	}
}

acharNumeroPar(7)