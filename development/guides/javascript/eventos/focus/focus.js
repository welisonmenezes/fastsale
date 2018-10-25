(function(){

var myText = document.getElementById("myText");

/*
myText.onblur = function(){
	mostrarNaTela("O elemento foi desfocado!");
}
*/
myText.addEventListener("blur", function(){
	mostrarNaTela("O elemento foi desfocado!");
});


/*
myText.onfocus = function(){
	mostrarNaTela("O elemento foi focado!");
}
*/
myText.addEventListener("focus", function(){
	mostrarNaTela("O elemento foi focado!");
});


/*
myText.onfocusin = function(){
	mostrarNaTela("O elemento foi focado com focusin!");
}
*/
myText.addEventListener("focusin", function(){
	mostrarNaTela("O elemento foi focado com focusin!");
});

/*
myText.onfocusout = function(){
	mostrarNaTela("O elemento foi desfocado com focusin!");
}
*/
myText.addEventListener("focusout", function(){
	mostrarNaTela("O elemento foi desfocado com focusout!");
});

})();