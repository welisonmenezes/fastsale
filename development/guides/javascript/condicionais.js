console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'condicionais.js'\n");
console.log("-------------------------------------------------\n");

var fazSol = true;

// IFs

if(fazSol){
	console.log("Faz sol no if!");
}

if( ! fazSol ){
	console.log("Não faz sol na negacao do if!");
}


// IF ESLE

fazSol = false;

if(fazSol){
	console.log("Faz sol no if else!");
}else{
	console.log("Não faz sol no if else!");
}


var idade = 18;
// comparadores "==" e "!="
if(idade == "18"){
	console.log("Comparação com 18 é true");
}else{
	console.log("Comparação com 18 é false");
}

// veja a diferença com comparadores "===" e "!=="
if(idade === "18"){
	console.log("Super comparação com 18 é true");
}else{
	console.log("Super comparação com 18 é false");
}


// IF ESLE IF ELSE
var dinheiro = 100;

if(dinheiro < 100){
	console.log("Você tem menos de 100 reais");
}else if(dinheiro == 100){
	console.log("Você tem exatos 100 reais");
}else{
	console.log("Você tem mais de 100 reias");
}


// IF ELSE ANINHADO
var sexo = "M";
if(sexo == "M"){
	console.log("Sexo Masculino");

	if(idade == 18){
		console.log("Vá pro Exército");
	}

}else{
	console.log("Sexo Feminino");
}



// IF ELSE INLINE
/*
 também chamado de operador ternário
 sintaxe: condition ? expr1 : expr2 
*/

var preco = 20;
var mensagemPreco = (preco > 20) ? "É maior que 20" : "É menor ou igual a 20";
console.log(mensagemPreco);



// SWITCH

var universidade = "UNIPLAC";

switch (universidade){
	case "USP":
		console.log("Usp é boa!");
	break;

	case "UNICAMP":
		console.log("Unicamp é legal!");
	break;

	case "UNIPLAC":
		console.log("Fudeu de vez!");
	break;

	default:
		console.log("Não é nem Usp, nem Unicamp e nem Uniplac");
}