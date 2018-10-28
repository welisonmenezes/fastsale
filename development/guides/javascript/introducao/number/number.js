(function(){

// CRIAÇÃO

// literal
var myNum = 20;
mostrarNaTela("O myNum é: " + myNum);

// construtor
var myNum2 = new Number(25);
mostrarNaTela("O myNum2 é: " + myNum2);

myNum = 30;
mostrarNaTela("O myNum editado: " + myNum);

// construtor
mostrarNaTela("O construtor do myNum é: " + myNum.constructor.name);
mostrarNaTela("O construtor do myNum2 é: " + myNum2.constructor.name);

// add metodo no prototype
Number.prototype.getConstructor = function(){
	return "O construtor é: " + this.constructor.name;
}
mostrarNaTela(myNum.getConstructor());
mostrarNaTela(myNum2.getConstructor());


/*
*	PROPRIEDADES
*/

// MAX_VALUE (retorna o maior número possível)
mostrarNaTela("O maior número possível é: " + Number.MAX_VALUE);

// MIN_VALUE (retorna o menor número possível)
mostrarNaTela("O menor número possível é: " + Number.MIN_VALUE);

// NEGATIVE_INFINITY (representa o menor número possível)
mostrarNaTela("O negativo infinito é: " + Number.NEGATIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY < Number.MIN_VALUE);

// POSITIVE_INFINITY (representa o maior número possível)
mostrarNaTela("O positivo infinito é: " + Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY > Number.MAX_VALUE);

// NaN (representa um não número)
mostrarNaTela("É um não número? " + isNaN(Number.NaN));


/*
*	MÉTODOS
*/

// inFinite [es6] (verifica se um número é finito)
var numFin = 35;
var numFin2 = Infinity;
mostrarNaTela("'numFin' é finito? " + Number.isFinite(numFin));
mostrarNaTela("'numFin2' é finito? " + Number.isFinite(numFin2));


// isInteger [es6] (verifica se é um inteiro)
mostrarNaTela("5 é inteiro? " + Number.isInteger(5));
mostrarNaTela("5.4 é inteiro? " + Number.isInteger(5.4));
mostrarNaTela("'5' é inteiro? " + Number.isInteger("5"));


// isSafeInteger [es6] (verifica se é um inteiro de forma segura)
mostrarNaTela("5 é um inteiro seguramente? " + Number.isSafeInteger(5));
mostrarNaTela("5.4 é um inteiro seguramente? " + Number.isSafeInteger(5.4));
mostrarNaTela("'5' é um inteiro seguramente? " + Number.isSafeInteger("5"));


// isNaN [es6] (verifica se é um não número)
mostrarNaTela("NaN é um não número? " + Number.isNaN(NaN));
mostrarNaTela("5.4 é um não número? " + Number.isNaN(5.4));
mostrarNaTela("'5' é um não número? " + Number.isNaN("5"));


// toExponential (converte um número para uma notação exponencial)
var toEx = 55.6565778;
mostrarNaTela("O número em 'toEx' numa notação exponecial é: " + toEx.toExponential());


// toFixed (converte o número numa string e formata as casas decimais)
var toFix = 5.56789;
mostrarNaTela("O número com as casas decimais formatadas é: " + toFix.toFixed(2));


// toPrecision (formata o número pra um precisão especificada)
var toPre = 576.3353;
mostrarNaTela("O número com precisão 2 é: " + toPre.toPrecision(4));


// toString (converte o número numa string)
var toStr = 56;
console.log(toStr.toString());
mostrarNaTela("O número convertido para string é: " + toStr.toString());


// valueOf (retorna o valor do próprio número)
var toStr = 56;
console.log(toStr.valueOf());
mostrarNaTela("O valor do número é: " + toStr.valueOf());

})();