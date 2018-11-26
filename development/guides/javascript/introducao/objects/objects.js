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


// assign (es6)
// copia os valores de um objeto e implementa num outro objeto
var object1 = {
  a: 1,
  b: 2,
  c: 3
};
object1 = 8;


var object2 = {c: 4, d: 5};

var object3 = Object.assign(object2, object1); // referência do object2
object3.e = 7;

mostrarNaTela(JSON.stringify(object1));
mostrarNaTela(JSON.stringify(object2));
mostrarNaTela(JSON.stringify(object3));



// create
var objCre1 = {};
// equivale
var objCre2 = Object.create(Object.prototype);
console.log(objCre2);
// equivale
var objCre3 = Object.create({});
console.log(objCre3);

// criando com atributo
var objCre4 = o2 = Object.create({}, {
	p: {
		value: 42,
		writable: true, // pode ser escrito
		enumerable: true, // é enumeravel
		configurable: true // é configuravel
	}
});
console.log(objCre4);



// defineProperty
// define e configura uma propriedade para um dado objeto
var objDef = {};

Object.defineProperty(objDef, 'name', {
	value: "Welison",
	writable: true,
	enumerable: true,
	configurable: true
});

mostrarNaTela("O nome é: " + objDef.name);



var objGet = {
	_name: "WELISON"
};

Object.defineProperty(objGet, 'name', {
	get: function(){
		return this._name
	},
	set: function(name){
		this._name = name + " MENEZES";
	}
});

mostrarNaTela("O nome de get é: " + objGet.name);
objGet.name = "WILSON";
mostrarNaTela("O nome de get é: " + objGet.name);



// defineProperties
// define e configura várias propriedades para um dado objeto
var objDefs = {};
Object.defineProperties(objDefs, {
	'property1': {
		value: true,
		writable: true,
		enumerable: true
	},
	'property2': {
		value: 'Hello',
		writable: false
	}
});
console.log(objDefs);



// entries
// retorna um array de pares [key, valor] dos elementos enumeráveis
var objEnt = {
	foo: 'bar',
	baz: 42
};
console.log(Object.entries(objEnt));



// freeze
// congela o objeto impedindo que nova propriedades sejam adicionadas ou deletadas
// can read
var objFree = {
	name: "welison",
	idade: 30
};
objFree.sexo = "masculino";
console.log(objFree);
Object.freeze(objFree);
objFree.endereco = "Rua tal";
delete objFree.name;
console.log(objFree);

// isFrozen (verifica se o objeto está congelado)
console.log('Está congelado? ',Object.isFrozen(objFree));



// seal
// sela um dado objeto
// can read and update
var sealed = {
	name: "josé"
};
sealed.age = 15;
Object.seal(sealed);
sealed.address = "Rua de tal";
console.log(sealed);

// isSealed
// verifica se o dado objeto está selado
Object.isSealed(sealed);



// preventExtensions
// impede que o dado objeto seja extendido
// can read, update and delete
var nonExtensible = {
	removable: true
};
Object.preventExtensions(nonExtensible);
nonExtensible.name = "welison";
console.log(nonExtensible);

// isExtensible (verifica se o objeto pode ser extendido)
console.log('É extensível? ',Object.isExtensible(nonExtensible));




// getOwnPropertyDescriptor
// retorna o descritor da propriedade especificada
var descObj = Object.getOwnPropertyDescriptor(objDefs, 'property1');
console.log(descObj);

// getOwnPropertyDescriptors
// retorna os descritores de todas as propriedades de um dado objeto
var descObjs = Object.getOwnPropertyDescriptors(objDefs);
console.log(descObjs);



// getOwnPropertyNames
// retorna o nome das propriedades de um dado objeto
var objPN = {
	a: 1,
	b: 2,
	c: 3
};
console.log(Object.getOwnPropertyNames(objPN));



// keys
// retorna um array de chaves de propriedade enumeráveis de um dado array ou objeto
var arrKeys = ['a', 'b', 'c'];
console.log(Object.keys(arrKeys));

var objKeys = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(objKeys));




// getPrototypeOf
// retorna o prototype de um dado objeto
console.log(Object.getPrototypeOf(objPN));



// is
// compara se dois valores são realmente iguais
console.log(Object.is('foo', 'foo'));
console.log(Object.is([], []));
console.log(Object.is({}, {}));


// hasOwnProperty
// verifica se dado valor é propriedade direta do objeto
var objHas = {
	lastname: "Menezes"
};

console.log('É propriedade? ',objHas.hasOwnProperty('lastname'));



// isPrototypeOf
// verifica se objeto é prototipo de um dado objeto
var isProto = {};
console.log('É prototype? ',Object.prototype.isPrototypeOf(isProto));


})();