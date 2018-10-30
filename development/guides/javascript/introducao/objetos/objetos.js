(function(){

// OBJETOS

// literais
var objLiteral = {};
console.log(objLiteral);
mostrarNaTela("O construtor do objeto é: " + objLiteral.constructor.name);

// construtor
var objConstrutor = new Object();
console.log(objConstrutor);
mostrarNaTela("O construtor do objeto é: " + objConstrutor.constructor.name);


// FUNÇÃO NAMESPACE

var MYAPP = MYAPP || {};

// MYAPP.modules.modules2
MYAPP.namespace = function(ns_string){
	var partes = ns_string.split("."),
		pai = MYAPP,
		i;

	// remove primeira parte
	if(partes[0] === "MYAPP"){
		partes = partes.slice(1);
	}

	for(i = 0; i < partes.length; i++){
		if(typeof pai[partes[i]] === "undefined"){
			pai[partes[i]] = {};
		}
		//pai = pai[partes[i]];
	}

	return pai;
};

var module2 = MYAPP.namespace("MYAPP.module.module2.module3");
console.log(module2)



// MÉTODOS PÚBLICOS E PRIVADOS

// métodos e atributos públios com objetos literias
var pubObj = {
	myPubic : "Sou Público",
	getPubic: function(){
		return "O myPubic é: " + this.myPubic;
	}
};

mostrarNaTela(pubObj.getPubic());

// métodos e atributos públios com funções
function PublicFun(){
	this.myPubic2 = "Sou o 2º Público";
	this.getPubic2 = function(){
		return "O myPubic2 é: " + this.myPubic2;
	};
}

var pubObj2 = new PublicFun();
mostrarNaTela(pubObj2.getPubic2());

// métodos e atributos privados com funções
function PrivateFun(){
	var myPrivate = "Sou privado";
	var getPrivate = function(){
		return "O myPrivate é: " + this.myPrivate;
	};
}

var priObj = new PrivateFun();
try{
	mostrarNaTela(priObj.getPrivate());
}catch(err){
	mostrarNaTela("O método retornou um erro, pois é privado!");
}

// encapsulamento
function PrivateTeste(){
	var attrPrivate = "Atributo Privado";

	this.getAttrPrivate = function(){
		return attrPrivate;
	}
	this.setAttrPrivate = function(value){
		attrPrivate = value;
	}
}

var priTest = new PrivateTeste();
mostrarNaTela(priTest.getAttrPrivate());
priTest.setAttrPrivate("Novo valor para o atributo");
mostrarNaTela(priTest.getAttrPrivate());


// PRIVACIDADE ME OBJETOS LITERAIS
var objPrivate;
(function(){
	var attrPrivado = "Sou privado do objeto literal";
	objPrivate = {
		getName: function(){
			return attrPrivado;
		}
	};
}());

mostrarNaTela(objPrivate.getName());
// abaixo retorna null, pois o attrPrivado não existe no objeto
mostrarNaTela(objPrivate.attrPrivado);

// outra forma de fazer (modo padrão)
var objPrivate2 = (function(){
	var attrPrivado = "Sou privado do objeto literal 2";
	return {
		getName: function(){
			return attrPrivado;
		}
	};
}());
mostrarNaTela(objPrivate2.getName());
// abaixo retorna null, pois o attrPrivado não existe no objeto
mostrarNaTela(objPrivate2.attrPrivado);


// PROTÓTIPOS
// usar protótipos economiza recuros do hardware e processamento
function MyGadget(){
	this.myName = "Welison Menezes";
}
MyGadget.prototype.getName = function(){
	return this.myName;
};

var theGad = new MyGadget();
mostrarNaTela(theGad.getName());



})();