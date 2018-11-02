(function(){

/*
*	HERANÇA
*/



// modo 1
// não permite passar parâmetros
// herda propriedades de this e de prototype
// metodos e propriedades em this são passados como referencia

function Parent(name){
	this.name = name || "Welison";
}
Parent.prototype.say = function(){
	return "Olá " + this.name;
};

function Child(name){}

function heranca_1(C, P){
	C.prototype = new P();
}

heranca_1(Child, Parent);

var child_1 = new Child("Carlos");

mostrarNaTela(child_1.name);
mostrarNaTela(child_1.say());

mostrarNaTela(child_1.hasOwnProperty('name'));


// modo 2
// não herda os membros de prototype
// metodos e propriedades em this são passados como copia

function Article(title){
	this.title = title || "Título default";
}
Article.prototype.getTitle = function(){
	return "O título do post é: " + this.title;
}

function Post(title){
	Article.apply(this, arguments);
}

var postagem = new Post("Título do post");
mostrarNaTela(postagem.title);
try{
	mostrarNaTela(postagem.getTitle());
}catch(err){
	mostrarNaTela("'getTitle()' não está disponível no this");
}

mostrarNaTela(postagem.hasOwnProperty('title'));


// modo 3
// esse método mescla os dois anteriores
// cria uma cópia dos valores em this
// compartilha os protótipos
// permite passar parâmetros
function Pessoa(name){
	this.name = name || "Indigente";
}
Pessoa.prototype.sayHello = function(){
	return "Olá " + this.name;
};

function Funcionario(name){
	Pessoa.apply(this, arguments);
}
Funcionario.prototype = new Pessoa();

var func = new Funcionario("José");
mostrarNaTela(func.name);
mostrarNaTela(func.sayHello());

mostrarNaTela(func.hasOwnProperty('name'));


// modo 4
// herda apenas os prototipos
// não tem acesso aos valores de this
function heranca_2(C, P){
	C.prototype = P.prototype;
}

function Pai(name){
	this.name = name || "Sem nome";
}
Pai.prototype.digaOi = function(){
	return "Olá " + this.name;
};

function Filho(name){}

heranca_2(Filho, Pai);

var filho = new Filho("Luíz");

mostrarNaTela(filho.name);
mostrarNaTela(filho.digaOi());

mostrarNaTela(filho.hasOwnProperty('name'));


// modo 5
// não herda valores de this
// herda apenas o prototype
var heranca_3 = (function(){
	var F = function(){};
	return function(C, P){
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
}());

function Animal(type){
	this.type = type || "Não informado";
}
Animal.prototype.sayType = function(){
	return "O tipo do animal é: " + this.type;
};

function Gato(type){}

heranca_3(Gato, Animal);

var cat = new Gato("Felino");
mostrarNaTela(cat.type);
mostrarNaTela(cat.sayType());


// modo 6 (padrão)
// herda protótipos e valores em this
// atualiza o constructor
// repassa os parâmetros
// passa atributo como cópia

function herdar(C, P){
	C.prototype = new P(); // transmite protótipos
	C.prototype.constructor = C; // atualiza ponteiro
}

// esse metodo evita instanciar o P() (melhor padrão)
function herdarMelhor(C, P){
	var copiaP = Object.create(P.prototype);
	C.prototype = copiaP;
	C.prototype.constructor = C;
}

function Carro(marca){
	this.marca = marca || "não informado";
}
Carro.prototype.digaMarca = function(){
	return "A marca do carro é: " + this.marca;
};

function Fiat(marca){
	Carro.apply(this, arguments); // transmite valore de this
}
herdar(Fiat, Carro);

var f = new Fiat("Fiat");

mostrarNaTela(f.marca);
mostrarNaTela(f.digaMarca());
mostrarNaTela(f.hasOwnProperty('marca'));
mostrarNaTela(f.constructor.name);


function Ford(marca){
	Carro.apply(this, arguments);
}
herdarMelhor(Ford, Carro);

var f2 = new Ford("Ford");

mostrarNaTela(f2.marca);
mostrarNaTela(f2.digaMarca());
mostrarNaTela(f2.hasOwnProperty('marca'));
mostrarNaTela(f2.constructor.name);

}());