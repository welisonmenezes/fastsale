(function(){

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

mostrarNaTela("O valor da variável 'minhaVariavel' é:<b> " + minhaVariavel + "</b>");


vairavelAntes = "Usada antes de declarar";
mostrarNaTela("O valor da variável 'vairavelAntes' é:<b> " + vairavelAntes + "</b>");
var vairavelAntes;



// OPERADORES MATEMÁTICOS

var soma = 2 + 4;
mostrarNaTela("O valor da variável 'soma' é:<b> " + soma + "</b>");

var concatenacao = "legal " + "fera!";
mostrarNaTela("O valor da variável 'concatenacao' é:<b> " + concatenacao + "</b>");

var subtracao = 5 - 3;
mostrarNaTela("O valor da variável 'subtracao' é:<b> " + subtracao + "</b>");


var divisao = 10 / 5;
mostrarNaTela("O valor da variável 'divisao' é:<b> " + divisao + "</b>");

var multiplicacao = 12 * 3;
mostrarNaTela("O valor da variável 'multiplicacao' é:<b> " + multiplicacao + "</b>");

var modulo = 14 % 3;
mostrarNaTela("O valor da variável 'modulo' é:<b> " + modulo + "</b>");


// OPERADORES DE ATRIBUIÇÃO

var atribuiNumero = 5;
mostrarNaTela("O valor da variável 'atribuiNumero' é:<b> " + atribuiNumero + "</b>");

/*
	pega o numero atual da variavel e soma com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero + 5;
*/ 
atribuiNumero += 5;
mostrarNaTela("Atribui numero com +=:<b> " + atribuiNumero + "</b>");

/*
	pega o numero atual da variavel e subtrai com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero - 5;
*/ 
atribuiNumero -= 3;
mostrarNaTela("Atribui numero com -=:<b> " + atribuiNumero + "</b>");

/*
	pega o numero atual da variavel e multiplica com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero * 5;
*/ 
atribuiNumero *= 2;
mostrarNaTela("Atribui numero com *=:<b> " + atribuiNumero + "</b>");

/*
	pega o numero atual da variavel e divide com o valor da direita
	O mesmo que atribuiNumero = atribuiNumero / 5;
*/ 
atribuiNumero /= 3;
mostrarNaTela("Atribui numero com /=:<b> " + atribuiNumero + "</b>");

atribuiNumero = 10;
atribuiNumero %= 3;
mostrarNaTela("Atribui numero com %=:<b> " + atribuiNumero + "</b>");


var incrementa = 1;
mostrarNaTela("O valor da variável 'incrementa' é:<b> " + incrementa + "</b>");

// incrementa mais 1
incrementa++;
mostrarNaTela("Incrementar com ++ deu:<b> " + incrementa + "</b>");

// decrementa menos 1
incrementa--;
mostrarNaTela("Decrementar com -- deu:<b> " + incrementa + "</b>");



// OPERADORES DE IGUALDADE/RELACIONAIS

/* os sinais "==" e "!=" comparam dois valores.
No javascript os sinais "==" e "!=" tentam converter 
um dos valores até 'encontrarem' essa igualdade
*/
var igualdade = 5 == "5";
mostrarNaTela("O valor da variável 'igualdade' é:<b> " + igualdade + "</b>");


var diferenca = 5 != "5";
mostrarNaTela("O valor da variável 'diferenca' é:<b> " + diferenca + "</b>");


/* os sinais "===" e "!==" comparam dois valores. 
No javascript os sinais "===" e "!==" NÃO tentam converter 
um dos valores até 'encontrarem' essa igualdade
*/
var superIgualdade = 5 === "5";
mostrarNaTela("O valor da variável 'superIgualdade' é:<b> " + superIgualdade + "</b>");

var superDiferenca = 5 !== "5";
mostrarNaTela("O valor da variável 'superDiferenca' é:<b> " + superDiferenca + "</b>");

// o sinal "!" faz a negação (inverte o valor booleano)
var negacao = ! true;
mostrarNaTela("O valor da variável 'negacao' é:<b> " + negacao + "</b>");


var menorQue = 5 < 2;
mostrarNaTela("5 < 2 é:<b> " + menorQue + "</b>");

var menorIgualQue = 5 <= 5;
mostrarNaTela("5 <= 5 é:<b> " + menorIgualQue + "</b>");

var maiorQue = 5 > 2;
mostrarNaTela("5 > 2 é:<b> " + maiorQue + "</b>");

var maiorIgualQue = 5 >= 5;
mostrarNaTela("5 >= 5 é:<b> " + maiorIgualQue + "</b>");



// OPERADORES LÓGICOS (&& e ||)

// ambas precisar retornar verdadeiro pro retorno ser verdadeiro
var operadorEE = 5 < 3 && 5 < 6;
mostrarNaTela("5 < 3 e 5 < 6:<b> " + operadorEE + "</b>");

// apenas um precisa retornar verdadeiro pro retorno ser verdadeiro
var operadorOU = 5 < 3 || 5 < 6;
mostrarNaTela("5 < 3 ou 5 < 6:<b> " + operadorOU + "</b>");


// tratamento de erros
try {
    // codigo a ser executado
    mostrarNaTela("Sem erro, bloco try");
}
catch(err) {
   	// se código do bloco try der erro entra qui
   	mostrarNaTela("Com erro, bloco catch");
} 
finally {
    // sempre entra aqui
    mostrarNaTela("Sempre executa, bloco finally");
}


// disparando erro customizado
try{
	mostrarNaTela("Sem erro, bloco try");
	throw "mensagem de erro";
}
catch(err) {
   	mostrarNaTela("Com erro, bloco catch. Erro: <b>" + err + "</b>");
} 


// debugger
// abaixo interromperia a execução do script para fins de debug
// debugger;


})();