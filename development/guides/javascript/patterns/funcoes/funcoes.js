(function(){


// PADRÃO CALLBACK

function callMe(fun){
	fun();
}

callMe(function(){
	mostrarNaTela("chamada anonima de callme");
});

callMe(function me(){
	mostrarNaTela("chamada function me() de callme");
});


// ATRIBUTO NAME DE FUNÇÃO
function teste1(){}
var teste2 = function(){};
var teste3 = function teste3b(){};

mostrarNaTela("O nome da function teste1() é: " + teste1.name);
mostrarNaTela("O nome da function teste2() é: " + teste2.name);
mostrarNaTela("O nome da function teste3() é: " + teste3.name);



// HOISTING
function fGlobal(){
	mostrarNaTela("Sou a função fGlobal() global");
}

function fGlbal2(){
	mostrarNaTela("Sou a função fGlobal2() global");
}

var fGlobal3 = function(){
	mostrarNaTela("Sou a função fGlobal3() global");
}

function hoistMe(){
	mostrarNaTela("Sou a hoitMe()");

	fGlobal();

	try{
		fGlobal2();
	}catch(err){
		console.log("Função não é vizível nesse escopo");
	}

	fGlobal3();

	// essa sobreescreve a global
	function fGlobal(){
		mostrarNaTela("Sou a função fGlobal() local");
	}

	// a variável será hasteada, a implementação não
	var fGlobal2 = function(){
		mostrarNaTela("Sou a função fGlobal2() local");
	}
}
hoistMe();


// CALLBACKS E ESCOPO
var myApp = {
	color: "red",
	showColor: function(callback){
		// transfiro o escopo de myApp para o callback
		callback.call(this);
	},
	getColor: function(callback){
		callback();
	}
};

function callApp(){
	mostrarNaTela(this.color);
}

myApp.showColor(callApp);
// abaixo mostrará 'undefined' pq color não existe no escopo de callApp
myApp.getColor(callApp);



// RETORNANDO FUNÇÕES

var funcRet = function(){
	var count = 0;

	return function(){
		mostrarNaTela("O contador de funcRet() é: " + (count++));
	}
}
var callRet = funcRet();
callRet();
callRet();
callRet();


// FUNÇÃO AUTODEFINÍVEIS

var autoDef = function(){
	mostrarNaTela("1ª execução");

	autoDef = function(){
		mostrarNaTela("2ª execução");

		autoDef = function(){
			mostrarNaTela("3ª execução");
		}
	}
}
var getAutoDef1 = autoDef;

autoDef();
autoDef();
autoDef();

getAutoDef1();
getAutoDef1();



// FUNÇÕES IMEDIATAS

// modo preferível
(function(){
	mostrarNaTela("função imediata 1");
}());

// modo alternativo
(function(){
	mostrarNaTela("função imediata 2");
})();

// com parâmeros
(function(name, w){
	mostrarNaTela("O nome na função imediata é: " + name);
	console.log(w);
}("welison", window));

})();