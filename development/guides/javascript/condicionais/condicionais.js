(function(){

var fazSol = true;

// IFs

if(fazSol){
	mostrarNaTela("Faz sol no if!");
}

if( ! fazSol ){
	mostrarNaTela("Não faz sol na negacao do if!");
}


// IF ESLE

fazSol = false;

if(fazSol){
	mostrarNaTela("Faz sol no if else!");
}else{
	mostrarNaTela("Não faz sol no if else!");
}


var idade = 18;
// comparadores "==" e "!="
if(idade == "18"){
	mostrarNaTela("Comparação com 18 é true");
}else{
	mostrarNaTela("Comparação com 18 é false");
}

// veja a diferença com comparadores "===" e "!=="
if(idade === "18"){
	mostrarNaTela("Super comparação com 18 é true");
}else{
	mostrarNaTela("Super comparação com 18 é false");
}


// IF ESLE IF ELSE
var dinheiro = 100;

if(dinheiro < 100){
	mostrarNaTela("Você tem menos de 100 reais");
}else if(dinheiro == 100){
	mostrarNaTela("Você tem exatos 100 reais");
}else{
	mostrarNaTela("Você tem mais de 100 reias");
}


// IF ELSE ANINHADO
var sexo = "M";
if(sexo == "M"){
	mostrarNaTela("Sexo Masculino");

	if(idade == 18){
		mostrarNaTela("Vá pro Exército");
	}

}else{
	mostrarNaTela("Sexo Feminino");
}



// IF ELSE INLINE
/*
 também chamado de operador ternário
 sintaxe: condition ? expr1 : expr2 
*/

var preco = 20;
var mensagemPreco = (preco > 20) ? "É maior que 20" : "É menor ou igual a 20";
mostrarNaTela(mensagemPreco);



// SWITCH

var universidade = "UNIPLAC";

switch (universidade){
	case "USP":
		mostrarNaTela("Usp é boa!");
	break;

	case "UNICAMP":
		mostrarNaTela("Unicamp é legal!");
	break;

	case "UNIPLAC":
		mostrarNaTela("Fudeu de vez!");
	break;

	default:
		mostrarNaTela("Não é nem Usp, nem Unicamp e nem Uniplac");
}
})();