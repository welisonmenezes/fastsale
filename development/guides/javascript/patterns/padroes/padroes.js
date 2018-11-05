(function(){

/*
*	SINGLETON
*/

// instância em propriedade estática
function Universo(){

	// verifica se já tem instância
	if(typeof Universo.instance === "object"){
		return Universo.instance;
	}

	// se não, continua normalmente
	this.name = "Universo";

	Universo.instance = this;

	return this;
}

Universo.prototype.getName = function(){
	return "O nome é: " + this.name;
};

var uni = new Universo();
var uni2 = new Universo();

Universo.prototype.getName2 = function(){
	return "O nome 2 é: " + this.name;
};

mostrarNaTela("O uni é igual ao uni2? " + (uni === uni2));

mostrarNaTela(uni.getName());
mostrarNaTela(uni2.getName());

// a referância se mantém
mostrarNaTela(uni.getName2());
mostrarNaTela(uni2.getName2());



// instância um uma closure
function Universo2(){

	console.log("construtor inicial");

	// aloca a instânica
	var instance = this;

	// continua normalmente
	this.name = "Universo";

	// reescreve o construtor
	Universo2 = function(){
		console.log("construtor reescrito");
		return instance;
	}
}


Universo2.prototype.getName = function(){
	return "O nome é: " + this.name;
};

var unib = new Universo2();
var unib2 = new Universo2();

Universo2.prototype.getName2 = function(){
	return "O nome 2 é: " + this.name;
};

mostrarNaTela("O unib é igual ao unib2? " + (unib === unib2));


mostrarNaTela(unib.getName());
mostrarNaTela(unib2.getName());

// note que perde a referênica
mostrarNaTela(unib.getName2);
mostrarNaTela(unib2.getName2);


// resolvendo problema de referência do prototype

function Universo3(){
	var instance;

	Universo3 = function Universo3(){
		return instance;
	}

	Universo3.prototype = this;

	instance = new Universo3();
	instance.constructor = Universo3;

	this.name = "Universo 3";

	return instance;
}

Universo3.prototype.getName = function(){
	return "O nome é: " + this.name;
};

var unic = new Universo3();
var unic2 = new Universo3();

Universo3.prototype.getName2 = function(){
	return "O nome 2 é: " + this.name;
};

mostrarNaTela("O unic é igual ao unic2? " + (unic === unic2));


mostrarNaTela(unic.getName());
mostrarNaTela(unic2.getName());

// note que perde a referênica
mostrarNaTela(unic.getName2());
mostrarNaTela(unic2.getName2());



// resolvendo com função imediata
var Universo4;
(function(){
	var instance;

	Universo4 = function Universo4(){
		if(instance){
			return instance;
		}

		instance = this;

		this.name  = "Universo 4";
	}
}());

Universo4.prototype.getName = function(){
	return "O nome é: " + this.name;
};

var unid = new Universo4();
var unid2 = new Universo4();

Universo4.prototype.getName2 = function(){
	return "O nome 2 é: " + this.name;
};

mostrarNaTela("O unid é igual ao unid2? " + (unid === unid2));


mostrarNaTela(unid.getName());
mostrarNaTela(unid2.getName());

// note que perde a referênica
mostrarNaTela(unid.getName2());
mostrarNaTela(unid2.getName2());

}());