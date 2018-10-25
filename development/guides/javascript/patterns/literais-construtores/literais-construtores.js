// criar objetos

// literal
var objLiteral = {};
objLiteral.name = "Welison";
mostrarNaTela("O nome é: " + objLiteral.name);

// com construtor
var objConstrutor = new Object();
objConstrutor.name = "Menezes";
mostrarNaTela("O nome é: " + objConstrutor.name);

// com construtor varia com parâmetros
var obj1 = new Object();
mostrarNaTela("O obj1 é do tipo 'Object'? " + (obj1.constructor === Object));

var obj2 = new Object(1);
mostrarNaTela("O obj2 é do tipo 'Number'? " + (obj2.constructor === Number));

var obj3 = new Object(true);
mostrarNaTela("O obj3 é do tipo 'Boolean'? " + (obj3.constructor === Boolean));

var obj4 = new Object("texto");
mostrarNaTela("O obj4 é do tipo 'String'? " + (obj4.constructor === String));




// Funcões construtoras customizadas
var Pessoa = function(nome){
	this.name = nome;

	// cada instância 'criará' seu próprio método (antipadrão)
	this.sayHello = function(){
		mostrarNaTela("Olá " + this.name + " " + this.sobrenome);
	}
}

// como funções geralmente não serão modificadas é bom colocarmos em prototype
// assim cada objeto instaciado fará referência e um único método
Pessoa.prototype.sayHi = function(){
	mostrarNaTela("Oi " + this.name + " " + this.sobrenome);
}

// propriedades em prototips podem sofrem mutação (antipadrão)
Pessoa.prototype.sobrenome = "Sobrenome";
Pessoa.prototype.sobrenome = "Silva";
// dentro do corpo da funçao se torna 'imutável'
Pessoa.name = "Zé";

var pessoa1 = new Pessoa("Welison");
pessoa1.sayHello();
pessoa1.sayHi();
console.log(pessoa1);

var pessoa2 = new Pessoa("Fulano");
pessoa2.sayHello();
pessoa2.sayHi();
console.log(pessoa2);



// retorno de construtores
// o retorno, se for um objeto, assumirá o valor de this da função.
var objRetorno = function(){
	this.nome = "Nome fora de obj";

	var obj = {
		nome: "Nome dentro de obj"
	};

	return obj;
}
var objR = new objRetorno();
mostrarNaTela("O nome retornado por this é: " + objR.nome);



// importânica da palavra chave new

// não usar 'new' podem transfirir o valor de this para fora (window por exemplo)
var objNew = function(nome){
	this.nomeNew = nome;
}
var on1 = objNew("Nome sem 'New'");
mostrarNaTela(window.nomeNew);

// usando 'new' o valor de this fica restrito a própria função cosntrutora
var objNew2 = function(nome){
	this.nomeNew2 = nome;
}
var on2 = new objNew2("Nome com 'New'");
mostrarNaTela(window.nomeNew2);

// esse padrão corrige qualquer cenário apontado acima
function objNew3(nome){
	if(!(this instanceof objNew3)){
		return new objNew3();
	}
	this.nomeNew3 = nome;
}
var on3 = objNew3("Nome corrigido sempre.");
mostrarNaTela(window.nomeNew3);



// criando arrays

// jeito literal (padrão melhor)
var myArrL = ["item 1", 5, "item 3"];
for(var i = 0; i < myArrL.length; i++){
	mostrarNaTela("Item myArrL é: " + myArrL[i]);
}

// jeito com construtor (antipadrão)
var myArrC = new Array("item 1", 5, "item 3");
for(var i = 0; i < myArrC.length; i++){
	mostrarNaTela("Item myArrC é: " + myArrC[i]);
}

// a sintaxe com construtor apresenta algumas 'pegadinhas'
var meuArr1 = [3];
var meuArr2 = new Array(3);
mostrarNaTela("Primeiro item do meuArr1 é: " + meuArr1[0]);
mostrarNaTela("Primeiro item do meuArr2 é: " + meuArr2[0]);
mostrarNaTela("O comprimento do meuArr1 é: " + meuArr1.length);
mostrarNaTela("O comprimento do meuArr2 é: " + meuArr2.length);


var tArr1 = [];
var tArr2 = new Array();

// o typeof de um array retorna sempre um objeto
mostrarNaTela("O tipo do tArr1 é: " + (typeof tArr1));
mostrarNaTela("O tipo do tArr2 é: " + (typeof tArr2));

// em ecmascript5 pode-se verificar se é array com 'isArray'
mostrarNaTela("O tArr1 é array? " + Array.isArray(tArr1));
mostrarNaTela("O tArr1 é array? " + Array.isArray(tArr2));

// caso não exista isArray no ambiente, o método abaixo simula
if(typeof Array.isArray === "undefined"){
	Array.isArray = function(arg){
		return Object.prototype.toString.call(arg) === "[object Array]";
	}
}





// JSON
var myJson = '{"nome": "Welison", "sobrenome": "Menezes"}';

// antipadrão
var eData = eval('(' + myJson + ')');
console.log(eData);
mostrarNaTela("O nome em eData é: " + eData.nome);

// preferível
var pData = JSON.parse(myJson);
console.log(pData);
mostrarNaTela("O nome em pData é: " + pData.nome);


var myRealJson = {
	nome: "Welison",
	sobrenome: "Menezes"
};
var sData = JSON.stringify(myRealJson);
mostrarNaTela(sData);



// EXPRESSÃO REGULAR

// literal (preferível)
var erL = /\\/gm;

// construtor
var erC = new RegExp("\\\\", "gm");

mostrarNaTela("A expressão regular é: " + erL.test("\\"));
mostrarNaTela("A expressão regular é: " + erC.test("\\"));


// EXPANDIR VALORES DE PRIMITIVOS
var myStr = "Olá Mundo";
mostrarNaTela("A primeira palavra de 'myStr' é: " + myStr.split(" ")[0]);
myStr.exp = "Tentando expandir";
mostrarNaTela("A exp de 'myStr' é: " + myStr.exp);


var myStr2 = new String("Olá Mundo");
mostrarNaTela("A primeira palavra de 'myStr2' é: " + myStr2.split(" ")[0]);
myStr2.exp = "Tentando expandir";
mostrarNaTela("A exp de 'myStr2' é: " + myStr2.exp);