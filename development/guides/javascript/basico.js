console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'basico.js'\n");
console.log("-------------------------------------------------\n");

// COMENTÁRIOS NÃO SERÃO EXECUTADOS PELO NAVEGADOR

// comentário de uma linha

/*
 comentario
 de varias
 linhas
*/


// VARIÁVEIS

/*
	javascript não é uma linguagem tipada, por tanto, 
	para criar uma váriavel basta usar a palavra reservada "var"
	antes do nome da variável
*/

var minhaVariavel = "valor da variável";
	minhaVariavel = 5;
	minhaVariavel = false;

console.log("A minha variável é: " + minhaVariavel);



// OPERADORES MATEMÁTICOS

var soma = 2 + 4;
console.log("A soma é: " + soma);

var concatenacao = "legal " + "fera!";
console.log("A concatenação é: " + concatenacao);

var subtracao = 5 - 3;
console.log("A subtração é: " + subtracao);

var divisao = 10 / 5;
console.log("A divisão é: " + divisao);

var multiplicacao = 12 * 3;
console.log("A multiplicação é: " + multiplicacao);


// OPERADORES DE ATRIBUIÇÃO

var atribuiNumero = 5;

/*
	pega o numero atual da variavel e soma com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero + 5;
*/ 
atribuiNumero += 5;
console.log("Atribui numero com +=: " + atribuiNumero);

/*
	pega o numero atual da variavel e subtrai com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero - 5;
*/ 
atribuiNumero -= 3;
console.log("Atribui numero com -=: " + atribuiNumero);

/*
	pega o numero atual da variavel e multiplica com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero * 5;
*/ 
atribuiNumero *= 2;
console.log("Atribui numero com *=: " + atribuiNumero);

/*
	pega o numero atual da variavel e divide com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero / 5;
*/ 
atribuiNumero /= 3;
console.log("Atribui numero com /=: " + atribuiNumero);


var incrementa = 1;

// incrementa mais 1
incrementa++;
console.log("Incrementar com ++ deu: " + incrementa);

// decrementa menos 1
incrementa--;
console.log("Decrementar com -- deu: " + incrementa);



// OPERADORES DE IGUALDADE/RELACIONAIS

/* os sinais "==" e "!=" comparam dois valores.
No javascript os sinais "==" e "!=" tentam converter 
um dos valores até 'encontrarem' essa igualdade
*/
var igualdade = 5 == "5";
console.log("A igualdade é: " + igualdade);

var diferenca = 5 != "5";
console.log("A diferença é: " + diferenca);


/* os sinais "===" e "!==" comparam dois valores. 
No javascript os sinais "===" e "!==" NÃO tentam converter 
um dos valores até 'encontrarem' essa igualdade
*/
var superIgualdade = 5 === "5";
console.log("A super igualdade é: " + superIgualdade);

var superDiferenca = 5 !== "5";
console.log("A super diferença é: " + superDiferenca);

// o sinal "!" faz a negação (inverte o valor booleano)
var negacao = ! true;
console.log("A negacao de true é: " + negacao);


var menorQue = 5 < 2;
console.log("5 < 2 é: " + menorQue);

var menorIgualQue = 5 <= 5;
console.log("5 <= 5 é: " + menorIgualQue);

var maiorQue = 5 > 2;
console.log("5 > 2 é: " + maiorQue);

var maiorIgualQue = 5 >= 5;
console.log("5 >= 5 é: " + maiorIgualQue);



// OPERADORES LÓGICOS (&& e ||)

// ambas precisar retornar verdadeiro pro retorno ser verdadeiro
var operadorEE = 5 < 3 && 5 < 6;
console.log("5 < 3 e 5 < 6: " + operadorEE);

// apenas um precisa retornar verdadeiro pro retorno ser verdadeiro
var operadorOU = 5 < 3 || 5 < 6;
console.log("5 < 3 ou 5 < 6: " + operadorOU);