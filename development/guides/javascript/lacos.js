console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'lacos.js'\n");
console.log("-------------------------------------------------\n");

// WHILE
var contadorWhile = 0;

while(contadorWhile < 5){

	console.log("O contador while vale: " + contadorWhile);

	contadorWhile++;
}


// DO WHILE

/*
	a diferença aqui é que primeiro ele vai executar o bloco do{}
	e depois vai comparar a condição
*/
var contadorDoWhile = 5;

do{

	console.log("O contador do while vale: " + contadorDoWhile);

	contadorDoWhile++;

}while(contadorDoWhile < 5);


// FOR

for(var i = 0; i < 5; i++){

	console.log("O contador do for vale: " + i);

}


// FOR EM ARRAYS E OBJETOS

var frutas = ["maçã", "uva", "morango", "limão"];

for(var x = 0; x < frutas.length; x++){

	console.log("A fruta da vez é: " + frutas[x]);

}

// outra opção (for in)
for(x in frutas){
	console.log("Agora a fruta é: " + frutas[x]);
}

// outra opção (for of)
for(fruta of frutas){
	console.log("A fruta de frutas é: " + fruta);
}



// BREAK E CONTINUE

for(var a = 0; a < 100; a++){

	// o conitnue interrompe a iteração atual e pula para a próxima
	if(a < 10){
		continue;
	}

	// o break interrompe o loop
	if(a > 15){
		break;
	}

	console.log("Index do loop break e continue: " + a);

}