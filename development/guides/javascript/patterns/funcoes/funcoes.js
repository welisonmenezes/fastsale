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

// retorno (já executa retornando o valor)
var myMessage = (function(){
	var text1 = "Olá";
	var text2 = "Mundo";

	return text1 + " " + text2;
}());

mostrarNaTela("A myMessage vale: " + myMessage);



// INICIALIZAÇÃO IMEDIATA DE OBJETOS
({
	name: "Welison",
	init: function(){
		mostrarNaTela("O nome é: " + this.name);
	}
}).init();




// PADRÃO DE MEMOIZAÇÃO
// o método guarda em cache chamada de função com mesmo parâmetro
// para evitar refazer um processo que já foi feito
var myFunc = function(param){
	if(!myFunc.cache[param]){
		var result = {
			valor: "Olá " + param
		};
		myFunc.cache[param] = result;
	}
	return myFunc.cache[param];
}
myFunc.cache = {};

myFunc("welison menezes");
myFunc("welison");
myFunc("welison");
myFunc("welison");
myFunc("josé");
console.log(myFunc.cache);

var myName = myFunc("welison");
mostrarNaTela(myName.valor);




// PADRÃO OBJETO DE CONFIGURAÇÃO

// modo ruim
function criarPessoa1(nome, sobrenome, email, endereco, sexo){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.email = email;
	this.endereco = endereco;
	this.sexo = sexo;
}
var p1 = new criarPessoa1("Maria", "Silva", "maria@email.com", "rua da maria", "F");
mostrarNaTela("A " + p1.nome + " é mora em: " + p1.endereco);

// modo standart
function criarPessoa2(conf){
	this.nome = conf.nome;
	this.sobrenome = conf.sobrenome;
	this.email = conf.email;
	this.endereco = conf.endereco;
	this.sexo = conf.sexo;
}
var conf = {
	nome: "Carlos",
	sobrenome: "Ferreira",
	email: "carlos@email.com",
	endereco: "rua do carlos",
	sexo: "M"
};
var p2 = new criarPessoa2(conf);
mostrarNaTela("O " + p2.nome + " é mora em: " + p2.endereco);



// CURRING

var add = function(x, y){
	var oldx = x, oldy = y;

	if(typeof oldy === "undefined"){
		return function(newy){
			return oldx + newy;
		}
	}

	return x + y;
}

var newAdd = add(5);
mostrarNaTela(typeof newAdd);
var newAdd2 = newAdd(4);
mostrarNaTela("O resultado de add com curring é: " + newAdd2);


var currying = function(fn){
	var slice = Array.prototype.slice;

	// remove o primeiro parametro de arguments, pois esta seria a funçao (fn)
	var stored_args = slice.call(arguments, 1);

	return function(){
		// pega os arguemntos da segunda chamada
		var new_args = slice.call(arguments);
		// concatena com os argumentos da primeira chamda
		var args = stored_args.concat(new_args);

		// retorna a função (fn) aplicando os arguemntos
		return fn.apply(null, args);
	}
}

var cAdd = currying(add, 5);
var cAdd2 = cAdd(4);
mostrarNaTela("O resultado de add com curring é: " + cAdd2);

})();