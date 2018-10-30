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
MYAPP.count = 0;
MYAPP.createObj = function(obj, arrp){

	this.count++;

	obj[arrp[this.count]] = { name: arrp[this.count] };

	if(this.count < (arrp.length-1)){
		this.createObj(obj[arrp[this.count]], arrp);
	}else{
		this.count = 0;
	}
};
MYAPP.namespace = function(ns_string){
	var partes = ns_string.split("."),
		pai = MYAPP,
		i;

	this.createObj(pai, partes);

	return pai;
};



MYAPP.namespace("MYAPP.module1.module2.module3.module4.module5");
MYAPP.namespace("MYAPP.moduleTest");
console.log(MYAPP);



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




// PADRÃO MÓDULO
MYAPP.namespace("MYAPP.utilites.array");

MYAPP.utilites.array = (function(){

	// dependênicas
	var uobj = MYAPP.utilites.object,
		ulang = MYAPP.utilites.lang;

	// proriedades privadas
	var array_string = "[object Array]",
		ops = Object.prototype.toString;


	return {
		inArray: function(needle, haystack){
			for(var i = 0; i < haystack.length; i++){
				if(haystack[i] === needle){
					return true;
				}
			}
			return false;
		},
		isArray: function(a){
			return ops.call(a) === array_string;
		}
	};
}());

mostrarNaTela("É um array? " + MYAPP.utilites.array.isArray([1,2,3]));

var arrTeste = ["banana", "manga", "pêssego"];
mostrarNaTela("Tem a fruta 'uva'? " + MYAPP.utilites.array.inArray('uva', arrTeste));




// MÓDULO COM CONSTRUTOR
MYAPP.namespace("MYAPP.utilites.ArrayC");

MYAPP.utilites.ArrayC = (function(){

	// propriedades
	var Constr;

	Constr = function(o){
		this.elements = this.toArray(o);
	};

	Constr.prototype = {
		constructor: MYAPP.utilites.ArrayC,
		version: "1.0",
		toArray: function(obj){
			var a = [], i = 0;
			for(o in obj){
				a[i] = obj[o];
				i++;
			}
			return a;
		}
	};

	return Constr;

}());

var arrConstr = new MYAPP.utilites.ArrayC({nome: "Welison", email: "welison@email.com"});
console.log(arrConstr);



//  IMPORTANDO GLOBAIS PARA MODULO
MYAPP.utilites.module = (function(app, global){
	console.log("O app é: ", app);
	console.log("O global é: ", global);
}(MYAPP, this));





})();