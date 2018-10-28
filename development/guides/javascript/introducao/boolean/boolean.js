(function(){

// CRIAÇÃO

//literal
var myBool = 1 == 1;
mostrarNaTela("O boolean literal é: " +  myBool);

// construtor
var myBool2 = new Boolean(1 == 1);
mostrarNaTela("O boolean com construtor é: " +  myBool);

// editando
myBool = 2 < 1;
mostrarNaTela("O boolean editado ficou: " +  myBool);

// construtor
mostrarNaTela("O construtor do myBool é: " + myBool.constructor.name);
mostrarNaTela("O construtor do myBool2 é: " + myBool2.constructor.name);

// add metodo no prototype
Boolean.prototype.getConstructor = function(){
	return "O construtor é: " + this.constructor.name;
}
mostrarNaTela(myBool.getConstructor());
mostrarNaTela(myBool2.getConstructor());



/*
*	MÉTODOS
*/

var bool = 20 <= 40;

// toString (converte o valor numa string)
mostrarNaTela(bool.toString());
console.log(bool.toString());

// valueOf (retorna o próprio valor)
mostrarNaTela(bool.valueOf());
console.log(bool.valueOf());

})();