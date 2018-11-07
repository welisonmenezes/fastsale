(function(){

// WHILE
var contadorWhile = 0;

while(contadorWhile < 5){

	mostrarNaTela("O contador while vale:<b> " + contadorWhile + "</b>");

	contadorWhile++;
}


// DO WHILE

/*
	a diferença aqui é que primeiro ele vai executar o bloco do{}
	e depois vai comparar a condição
*/
var contadorDoWhile = 5;

do{

	mostrarNaTela("O contador do while vale:<b> " + contadorDoWhile + "</b>");

	contadorDoWhile++;

}while(contadorDoWhile < 5);


// FOR

for(var i = 0; i < 5; i++){

	mostrarNaTela("O contador for vale:<b> " + i + "</b>");

}


// FOR EM ARRAYS E OBJETOS

var frutas = ["maçã", "uva", "morango", "limão"];

for(var x = 0; x < frutas.length; x++){

	mostrarNaTela("A fruta da vez é:<b> " + frutas[x] + "</b>");

}

// outra opção (for in)
for(x in frutas){
	mostrarNaTela("Agora a fruta é:<b> " + frutas[x] + "</b>");
}

// outra opção (for of)
for(fruta of frutas){
	mostrarNaTela("A fruta de frutas é:<b> " + fruta + "</b>");
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

	mostrarNaTela("O index do loop break e continue é:<b> " + a + "</b>");

}



// nomeando laços
ze: for(var i = 0; i < 10; i++){
	maria: for(var x = 0; x < 10; x++){
		console.log("i: " + i + " x: " + x);

		if(x==2){
			break ze;
		}
	}
}


var i = 0;
joao: while(i < 10){
	var x = 0;
	luana: while(x < 10){
		console.log("i: " + i + " x: " + x);
		if(x == 3){
			break joao;
		}
		x++;
	}
	i++;
}

})();