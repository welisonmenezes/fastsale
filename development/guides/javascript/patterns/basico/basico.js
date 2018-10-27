/*
 *	VARIÁVEIS
 */

// variáveis globais
var myGlobal = "Valor global";
mostrarNaTela("Global fora de função é: " + myGlobal);
function mostrarGlobal(){
	mostrarNaTela("Global dentro de função é: " + myGlobal);
}
mostrarGlobal();

// variáveis locais
function mostrarLocal(){
	var myLocal = "Valor local";
	mostrarNaTela("Local dentro de função é: " + myLocal);
}
mostrarLocal();
try{
	mostrarNaTela("Local fora de função é: " + myLocal);
}catch(err){
	mostrarNaTela("ERRO!!! A variável não existe nesse escopo");
}

// CUIDADO se não usar palavra var, a variável se torna uma global implicitamente
function globalImplicita(){
	myLocalImplicita  = "Valor local implícita";
	mostrarNaTela("Local implícita dentro de função é: " + myLocalImplicita);
}
globalImplicita();
mostrarNaTela("Local implícita fora de função é: " + myLocalImplicita);

// variáveis globais cirados fora de funções são inseridos no objeto window
function globalParametro(myGlobal){
	mostrarNaTela("Global parametro é: " + myGlobal);
	mostrarNaTela("Global parametro é: " + window.myGlobal);
}
globalParametro("Valor parametro");



/*
 *	HOISTING
 */

// a declaração de uma variavel, global ou localemnte, é sempre alçada pra cima
var meuNome = "Welison";
function showNome(){
	// é como se [var meuNome;] estivesse aqui no topo
	mostrarNaTela("O nome é: " + meuNome);
	var meuNome = "Menezes";
	mostrarNaTela("O nome é: " + meuNome);
}
showNome();



/*
 *	LOOPS
 */
var meuArray = [0,1,2,3,4,5];


// for - jeito ruim
for(var i = 0; i < meuArray.length; i++){
	mostrarNaTela("Valor do meuArray é: " + meuArray[i]);
}

// for - jeito melhor (desempenho otimizado)
var i = 0,
	max = meuArray.length;

for(i = 0; i < max; i++){
	mostrarNaTela("Valor do meuArray é: " + meuArray[i]);
}


// for-in
var pessoa = {
	olhos: 'azuis',
	altura: 1.80,
	peso: 90,
	cor: 'branco'
};

// adicionando um apropiedade no prototype de Object
Object.prototype.clone = "teste atributo";

// jeito ruim (sem validar se é propriedade própria)
for(var i in pessoa){
	mostrarNaTela("Propriedade da pessoa: " + i);
}

// jeito bom (validando se é propriedade própria)
for(var i in pessoa){
	if(pessoa.hasOwnProperty(i)){
		mostrarNaTela("Propriedade da pessoa: " + i);
	}
}

// jeito excelente
var i, hasOwn = Object.prototype.hasOwnProperty;
for(i in pessoa){
	if(hasOwn.call(pessoa, i)){
		mostrarNaTela("Propriedade da pessoa: " + i);
	}
}


// EVAL

var sComando = "mostrarNaTela('código executado com eval. Avariável global é: ' + myGlobal);";
// evitar isso
eval(sComando);

// uma solução melhor (porém, ainda não recomenado)
new Function(sComando)();



// PARSEINT
mostrarNaTela(parseInt('09'));
// pra evitar incosistencia add o 2º parametro informando a base
mostrarNaTela(parseInt('09', 10));


// COMENTÁRIOS COMO DOCUMENTAÇÃO
var MYAPP = {};
/**
* Descrição do namespace
* @namespace MYAPP
* @class math_stuff
*/
MYAPP.math_stuff = {
	/**
	* descrição do método
	*
	* @method sum
	* @param {Number} descrição do parametro
	* @return {Number} descrição do retorno
	*/
	sum: function(a){
		return a + 5;
	}
}

/**
* Descrição da classe
* @class Person
* @constructor
* @ namespace MYAPP
* @ @param {String} descrição do parâmetro
*/
MYAPP.Person = function(nome){
	/**
	* Descrição do atributo
	* @property first_name
	* @type String
	*/
	this.first_name;
}

/**
* Descrição do método
*
* @method getName
* @return {String} descrição do retorno
*/
MYAPP.Person.prototype.getName = function(){
	return this.first_name;
}