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



// PADRÃO SANDBOX

// criando módulos
Sandbox.modules = {};
Sandbox.modules.dom = function(box){
	mostrarNaTela("Sou o módulo dom e o name box é: " + box.getName());
}
Sandbox.modules.event = function(box){
	mostrarNaTela("Sou o módulo event e o name box é: " + box.getName());
}

// criando 'caixa de areia'
function Sandbox(){
	var args = Array.prototype.slice.call(arguments),
		callback = args.pop(),
		modules = (args[0] && typeof args[0] === "string") ? args : args[0],
		i;

	// garantindo sempre uma instancia
	if(!this instanceof Sandbox){
		return new Sandbox(modules, callback);
	}

	// se for vazio ou '*' carrega todos
	if(!modules || modules === "*"){
		modules = [];
		for(m in Sandbox.modules){
			if(Sandbox.modules.hasOwnProperty(m)){
				modules.push(m);
			}
		}
	}

	// executa os módulos
	for(i = 0; i < modules.length; i++){
		try{
			if(Sandbox.modules[modules[i]]){
				Sandbox.modules[modules[i]](this);
			}else{
				throw {
					name: "Erro Módulo",
					message: "O módulo " + modules[i] + " não exsite."
				}
			}
		}catch(err){
			console.log(err);
		}
	}
}

Sandbox.prototype.getName = function(){
	return "Sandbox Name";
};

var sand = new Sandbox('dom', 'xuxa', function(){
	mostrarNaTela("teste");
});




// MÉTODOS ESTÁTICOS

function MyClass(){
	mostrarNaTela("Minha classe");

	// só é visível a partir de uma instância
	this.interno = function(){
		mostrarNaTela("Sou um método interno");
	}
	this.message = "Sou a mensagem da classe";
}
// não é visível por uma instância
MyClass.static = function(){
	mostrarNaTela("Sou um método estático");
}
// só é visível a partir de uma instância
MyClass.prototype.public = function(){
	mostrarNaTela("Sou um método público");
}


MyClass.static();
try{
	MyClass.interno();
}catch(err){
	mostrarNaTela("O método interno não é visível sem uma instância");
}
try{
	MyClass.public();
}catch(err){
	mostrarNaTela("O método público não é visível sem uma instância");
}

var objClass = new MyClass();
objClass.interno();
try{
	objClass.static();
}catch(err){
	mostrarNaTela("O método static não é visível a partir de uma instância");
}
objClass.public();


// usando metodo estatico com instância

MyClass.staticInstancia = function(){

	// nesse dar atenção ao this
	if(this instanceof MyClass){
		mostrarNaTela(this.message);
	}else{
		mostrarNaTela("Sou um método staticInstancia");
	}
}

MyClass.prototype.staticInstancia = MyClass.staticInstancia;

MyClass.staticInstancia();
var objClass2 = new MyClass();
objClass2.staticInstancia();



// MEMBRO ESTÁTICOS PRIVADOS
var FuncRet;
var MyConstr = (function(){
	var count = 0,
		FuncRet;

	FuncRet = function(){
		count++;
	}

	FuncRet.prototype.getID = function(){
		return "O ID atual é: " + count;
	}

	return FuncRet;

}());

var inst1 = new MyConstr();
mostrarNaTela(inst1.getID());

var inst2 = new MyConstr();
mostrarNaTela(inst2.getID());

var inst3 = new MyConstr();
mostrarNaTela(inst3.getID());



// GERADOR DE CONSTANTES
var constant = (function(){
	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		prefix = (Math.random() + "_").slice(2);

	return {
		set: function(name, value){
			if(this.isDefined(name)){
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},
		isDefined: function(name){
			return ownProp.call(constants, prefix + name);
		},
		get: function(name){
			if(this.isDefined(name)){
				return constants[prefix + name];
			}
			return null;
		}
	};
}());

mostrarNaTela("A constante maxwidth está definida? " + constant.isDefined('maxwidth'));
mostrarNaTela("Definindo constante maxwidth: " + constant.set('maxwidth', 500));
mostrarNaTela("A constante maxwidth está definida? " + constant.isDefined('maxwidth'));
mostrarNaTela("Pegando constante maxwidth: " + constant.get('maxwidth'));
console.log(constant);



// PADRÃO DE ENCADEAMENTO
var chainObj = {
	value: 1,
	increment: function(){
		this.value++;
		return this;
	},
	addTwo: function(){
		this.value = this.value + 2;
		return this;
	},
	square: function(){
		this.value = this.value * this.value;
		return this;
	},
	showValue: function(){
		mostrarNaTela("O valor acumulado é: " + this.value);
	}
};

chainObj.increment().addTwo().square().showValue();



// PADRÃO MÉTODO
if(typeof Function.prototype.method !== "function"){
	Function.prototype.method = function(name, fn){
		this.prototype[name] = fn;
		return this;
	};
}

var Pessoa = function(name){
	this.name = name;
}.method('getName', function(){
	return this.name;
}).method('setName', function(name){
	this.name = name;
	return this;
});

var pessoa1 = new Pessoa("José");
mostrarNaTela("O nome da pessoa é: " + pessoa1.getName());
pessoa1.setName("José da Silva");
mostrarNaTela("O nome da pessoa é: " + pessoa1.getName());

})();