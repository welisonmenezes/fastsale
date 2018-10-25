(function(){

var myText = document.getElementById("myText");
var el_keydown = document.getElementById("keydown");
var el_charcode = document.getElementById("charcode");
var el_code = document.getElementById("code");
var el_capslock = document.getElementById("capslock");
var el_key = document.getElementById("key");
var el_which = document.getElementById("which");
var count = 0;

myText.addEventListener("keydown", function(event){
	mostrarNaTela("keydown acionado");
	
	count++;
	el_keydown.innerHTML = count;

	var code = event.charCode || event.keyCode;
	el_charcode.innerHTML = code;

	el_code.innerHTML = event.code;

	el_key.innerHTML = event.key;

	el_which.innerHTML = event.which;

	if(event.altKey){
		mostrarNaTela("altKey foi pressionado.");
	}

	if(event.ctrlKey){
		mostrarNaTela("ctrlKey foi pressionado.");
	}

	if(event.shiftKey){
		mostrarNaTela("shiftKey foi pressionado.");
	}

	// CapsLock|NumLock|ScrollLock
	if(event.getModifierState('CapsLock')){
		el_capslock.innerHTML = "ativado";
	}else{
		el_capslock.innerHTML = "desativado";
	}
});


myText.addEventListener("keypress", function(){
	mostrarNaTela("keypress acionado");
});

myText.addEventListener("keyup", function(){
	mostrarNaTela("keyup acionado");
});

})();