console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'funcoes.js'\n");
console.log("-------------------------------------------------\n");

// DEFINIÇÃO SIMPLES

function nomedafuncao(){
	// seu código aqui
}

function quadrado(x){
	// 'return' se refere ao valor que a função retornará
	return x * x;
}

console.log("O quadrado de 5 é: " + quadrado(5));



// DEFINIÇÃO POR EXPRESSÃO DE FUNÇÃO (atribuir função anônima à uma variável)

var nomefuncao = function(){
	// seu código aqui
}

var quadradoPorExpressao = function(x){
	return x * x;
}

console.log("O quadrado de 6 é: " + quadradoPorExpressao(6));


// RETURN 

/* 
	a função abaixo será executada no momento da invocação 
	mas o retorno sera 'undefined' por não conter o return
*/
function simplesSemRetorno(){
	var soma = 5 + 5;

	console.log("A soma da função sem retorno é: " + soma);
}
console.log("O retorno de simplesSemRetorno é: " + simplesSemRetorno());


// a funçao para de ser executada quando encontra a palavra return
function soma(x){
	var retorno = x + x;
	return retorno; // é o fim oficial da funçao
	console.log("a partir dessa linha não executará");
	retorno = 10;
}
console.log("A soma de 200 + 200 é: " + soma(200));



// CHAMANDO FUNÇÕES

/*
 em javascript, toda funão é alçada para o topo (hoisted)
 por isso o código abaixo funiconará
*/

console.log(chamandoAntes());

function chamandoAntes(){
	return "Fui invocada antes de ser criada";
}


/*
	se eu tentasse executar a linha abaixo daria erro
	pois atribuir uma funão anônima para uma variável
	não a alçará para cima, por tanto, só poderá ser
	executada após a definição.
*/

//console.log(chamadoAntesErro());

var chamadoAntesErro = function(){
	return "Não fui alçada pra cima";
}

console.log(chamadoAntesErro());



// ESCOPO DE FUNÇÃO

// variáveis definidas fora de uma função tem escopo global

var variavelGlobal = "valor da global";

function mostrarGlobal(){
	console.log("A variável global é: " + variavelGlobal);
}

mostrarGlobal();

function mostrarLocal(){
	// variáveis definidas dentro de função só são acessadas dentro;
	var variavelLocal = "valor local";

	console.log("A variável local é: " + variavelLocal);
}
mostrarLocal();

// a palavra 'var' controlo a criação ou não de um novo espaço na memória

var globalAlterada = "valor default";
var globalNaoAlterada = "valor não alterado";

function alteraGlobal(){
	// aqui reusa-se a variavel declarada no escopo global
	globalAlterada = "valor alterado";

	// aqui cria-se uma nova variável, pertencente a esse escopo
	var globalNaoAlterada = "valor xxxx alterada";
}
alteraGlobal();

console.log("O valor da global alterada agora é: " + globalAlterada);
console.log("O valor da global não alterada agora é: " + globalNaoAlterada);


// ARGUMENTOS

// pode-se passar n quantidades de argumentos
function comArgumentosSimples(nome, idade, endereco){
	return "O nome é: " + nome + ", a idade é: " + idade + " e o endereço é: " + endereco;
}
console.log(comArgumentosSimples("Welison", 30, "Coral - Lages"));

// pode-se passar objetos ou arrays

function comArrayEObjetos(array, objeto){
	console.log("O tamanho do array é: " + array.lenght + " e o curso do objeto é: " + objeto.curso );
}

var arrayTeste = ["java", "php", "c#"];
var objetoTeste = {
	curso : 'Uniplac'
};

comArrayEObjetos(arrayTeste, objetoTeste);

// pode-se passar funçoes
function comFuncao(funcao){
	// no caso de uma funão verifico se o tipo é 'function' e se for forço a execuçaõ
 	if(typeof(funcao)=="function"){
		return funcao.call();
	}

	return "não é função";
        
}
var funcaoTeste = function(){
	return "sou uma função passada como parâmetro";
}

console.log( comFuncao(funcaoTeste) );


// objeto 'arguments[]'

function comArguments(){
	var result = "";

	for (i = 0; i < arguments.length; i++) {
	  result += arguments[i] + ", ";
	}

	return result;
}

var testeComArguments = comArguments("valor 1", "valor 2", "valor 3", "valor 4");
console.log(testeComArguments);

 
/*
o código abaixo daria erro, pois a 'variavelLocal' 
só existe dentro do escopo de função 'mostrarLocal'
*/
//console.log("A variável local é: " + variavelLocal);


// RECURSIVIDADE

/*
	recursividade é o poder de uma função invocar a sim mesma.
	Assim ela passa a ter um comportamento de loop.
	Por tanto, é importante definir um momento para sair desse laço.
*/

function souRecursiva(x){

	// importante returnar em algum momento pra evitar loops infinitos
	if(x > 10) return x;

	x++;

	return souRecursiva(x);
}

console.log("A recursividade retornou: " + souRecursiva(1));



function loop(x) {

   if (x >= 10) return; //condição de parada
   
   // faça coisas
   console.log("O x da função loop vale: " + x);

   loop(x + 1); // chamada recursiva

}

loop(0);

// PARÂMETROS POR REFERÊNCIA
/*
objetos e arrays passados como parâmetro são alterados pela funçao
pois se passa a referência a elas. O mesmo não ocorre com variáveis
*/

function alteraObjeto(objeto, variavel){
	objeto.nome = "Nome alterado";
	variavel = "Variável alterada";
}

var meuObjeto = {
	nome: "Welison",
	idade: 30
};

var minhaVar = "xxx";

console.log("Nome no meuObjeto é: " + meuObjeto.nome);
console.log("Valor da minhaVar é: " + minhaVar);

alteraObjeto(meuObjeto, minhaVar);

console.log("Nome no meuObjeto é: " + meuObjeto.nome);
console.log("Valor da minhaVar é: " + minhaVar);



// CLOSURES

// closure simples
var linguagem = function(linguagem){
	var pegaLinguagem = function(){
		return "A linguagem é: " + linguagem;
	}

	return pegaLinguagem;
}

var textoLinguagem = linguagem("javascript");
console.log( textoLinguagem() );

// closure com objeto
var animais = function(animal){

	var tipo = "mamífero";

	return {
		pegaNome: function(){
			return "O animal é: " + animal;
		},
		pegaTipo: function(){
			return "O tipo é: " + tipo;
		}
	}
}

var bicho = animais("cachorro");
console.log( bicho.pegaNome() );
console.log( bicho.pegaTipo() );



function ObjFun(){
	this.name = "welison";

	this.getName = function(){
		return this.name;
	}
}

var teste = new ObjFun();

console.log( teste.getName() );