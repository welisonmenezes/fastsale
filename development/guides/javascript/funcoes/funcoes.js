(function(){

// DEFINIÇÃO SIMPLES

function nomedafuncao(){
	// seu código aqui
}

function quadrado(x){
	// 'return' se refere ao valor que a função retornará
	return x * x;
}
mostrarNaTela("O quadrado de 5 é:<b> " + quadrado(5) + "</b>");



// DEFINIÇÃO POR EXPRESSÃO DE FUNÇÃO (atribuir função anônima à uma variável)

var nomefuncao = function(){
	// seu código aqui
}

var quadradoPorExpressao = function(x){
	return x * x;
}
mostrarNaTela("O quadrado de 6 é:<b> " + quadradoPorExpressao(6) + "</b>");


// RETURN 

/* 
	a função abaixo será executada no momento da invocação 
	mas o retorno sera 'undefined' por não conter o return
*/
function simplesSemRetorno(){
	var soma = 5 + 5;

	mostrarNaTela("A soma da função sem retorno é:<b> " + soma + "</b>");
}
mostrarNaTela("O retorno de simplesSemRetorno é:<b> " + simplesSemRetorno() + "</b>");


// a funçao para de ser executada quando encontra a palavra return
function soma(x){
	var retorno = x + x;
	return retorno; // é o fim oficial da funçao
	mostrarNaTela("a partir dessa linha não executará");
	retorno = 10;
}
mostrarNaTela("A soma de 200 + 200 é:<b> " + soma(200) + "</b>");



// CHAMANDO FUNÇÕES

/*
 em javascript, toda funão é alçada para o topo (hoisted)
 por isso o código abaixo funiconará
*/

mostrarNaTela(chamandoAntes());

function chamandoAntes(){
	return "Fui invocada antes de ser criada";
}


/*
	se eu tentasse executar a linha abaixo daria erro
	pois atribuir uma funão anônima para uma variável
	não a alçará para cima, por tanto, só poderá ser
	executada após a definição.
*/


try{
	mostrarNaTela(chamadoAntesErro());
}catch(err){
	mostrarNaTela("Não fui alçada pra cima");
}
var chamadoAntesErro = function(){
	return "Fui alçada pra cima";
}



// ESCOPO DE FUNÇÃO

// variáveis definidas fora de uma função tem escopo global

var variavelGlobal = "valor da global";

function mostrarGlobal(){
	mostrarNaTela("A variável global é:<b> " + variavelGlobal + "</b>");
}

mostrarGlobal();

function mostrarLocal(){
	// variáveis definidas dentro de função só são acessadas dentro;
	var variavelLocal = "valor local";

	mostrarNaTela("A variável local é:<b> " + variavelLocal + "</b>");
}
mostrarLocal();

/*
o código abaixo daria erro, pois a 'variavelLocal' 
só existe dentro do escopo de função 'mostrarLocal'
*/
try{
	mostrarNaTela("A variável local é: <b>" + variavelLocal + "</b>");
}catch(err){
	mostrarNaTela("A variável 'variavelLocal' não existe neste escopo");
}

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

mostrarNaTela("O valor da global alterada agora é:<b> " + globalAlterada + "</b>");
mostrarNaTela("O valor da global não alterada agora é:<b> " + globalNaoAlterada + "</b>");



// ARGUMENTOS

// pode-se passar n quantidades de argumentos
function comArgumentosSimples(nome, idade, endereco){
	return "O nome é: " + nome + ", a idade é: " + idade + " e o endereço é: " + endereco;
}
mostrarNaTela(comArgumentosSimples("Welison", 30, "Coral - Lages"));

// pode-se passar objetos ou arrays

function comArrayEObjetos(array, objeto){
	mostrarNaTela("O tamanho do array é: " + array.length + " e o curso do objeto é: " + objeto.curso);
}

var arrayTeste = ["java", "php", "c#"];
var objetoTeste = {
	curso : 'Uniplac'
};

comArrayEObjetos(arrayTeste, objetoTeste);

// pode-se passar funçoes
function comFuncao(funcao){
	this.name = "função caller";
	// no caso de uma funão verifico se o tipo é 'function' e se for forço a execuçaõ
 	if(typeof(funcao)=="function"){
 		
		//return funcao.bind(this)();
		//return funcao.call(this);
		return funcao.apply(this);
	}

	return "não é função";
        
}
var funcaoTeste = function(){
	return "sou uma função passada como parâmetro: " + this.name;
}
mostrarNaTela(comFuncao(funcaoTeste));


// objeto 'arguments[]'

function comArguments(){
	var result = "";

	for (i = 0; i < arguments.length; i++) {
	  result += arguments[i] + ", ";
	}

	return result;
}

var testeComArguments = comArguments("valor 1", "valor 2", "valor 3", "valor 4");
mostrarNaTela(testeComArguments);




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
mostrarNaTela("A recursividade retornou: <b>" + souRecursiva(1) + "</b>");



function loop(x) {

   if (x >= 10) return; //condição de parada
   
   // faça coisas
   mostrarNaTela("O x da função loop vale: <b>" + x + "</b>");

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

mostrarNaTela("Nome no meuObjeto é: <b>" + meuObjeto.nome + "</b>");
mostrarNaTela("Valor da minhaVar é: <b>" + minhaVar + "</b>");

alteraObjeto(meuObjeto, minhaVar);

mostrarNaTela("Nome no meuObjeto é: <b>" + meuObjeto.nome + "</b>");
mostrarNaTela("Valor da minhaVar é: <b>" + minhaVar + "</b>");



// CLOSURES

// closure simples
var linguagem = function(linguagem){
	var pegaLinguagem = function(){
		return "A linguagem é: " + linguagem;
	}

	return pegaLinguagem;
}

var textoLinguagem = linguagem("javascript");
mostrarNaTela(textoLinguagem());

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
mostrarNaTela(bicho.pegaNome());
mostrarNaTela(bicho.pegaTipo());



function ObjFun(){
	this.name = "welison";

	this.getName = function(){
		return this.name;
	}
}

var teste = new ObjFun();
mostrarNaTela(teste.getName());

})();