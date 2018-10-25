(function(){

var target = document.getElementById("target");

target.addEventListener("click", function(event){
	mostrarNaTela("Click disparado!");

	var clientX = document.getElementById("clientX");
	clientX.innerHTML = event.clientX;

	var clientY = document.getElementById("clientY");
	clientY.innerHTML = event.clientY;

	var offsetX = document.getElementById("offsetX");
	offsetX.innerHTML = event.offsetX;

	var offsetY = document.getElementById("offsetY");
	offsetY.innerHTML = event.offsetY;

	var pageX = document.getElementById("pageX");
	pageX.innerHTML = event.pageX;

	var pageY = document.getElementById("pageY");
	pageY.innerHTML = event.pageY;

	var screenX = document.getElementById("screenX");
	screenX.innerHTML = event.screenX;

	var screenY = document.getElementById("screenY");
	screenY.innerHTML = event.screenY;
	

	if(event.altKey){
		mostrarNaTela("altKey foi pressionado.");
	}

	if(event.ctrlKey){
		mostrarNaTela("ctrlKey foi pressionado.");
	}

	if(event.shiftKey){
		mostrarNaTela("shiftKey foi pressionado.");
	}

	var el_capslock = document.getElementById("el_capslock");
	// CapsLock|NumLock|ScrollLock
	if(event.getModifierState('CapsLock')){
		el_capslock.innerHTML = "ativado";
	}else{
		el_capslock.innerHTML = "desativado";
	}

	console.log(event);
	
});


target.addEventListener("contextmenu", function(event){
	mostrarNaTela("Contextmenu disparado!");	
});

target.addEventListener("dblclick", function(event){
	mostrarNaTela("Dblclick disparado!");	
});

target.addEventListener("mousedown", function(event){
	mostrarNaTela("Mousedown disparado!");	
});

target.addEventListener("mouseup", function(event){
	mostrarNaTela("Mouseup disparado!");	
});

target.addEventListener("mouseover", function(event){
	mostrarNaTela("Mouseover disparado!");

	if(event.relatedTarget){
		mostrarNaTela("O mouse saiu de: " + event.relatedTarget.tagName);
	}
});

target.addEventListener("mouseenter", function(event){
	mostrarNaTela("Mouseenter disparado!");	
});

target.addEventListener("mouseleave", function(event){
	mostrarNaTela("Mouseleave disparado!");	
});

target.addEventListener("mouseout", function(event){
	mostrarNaTela("Mouseout disparado!");	
});

var mousemove = document.getElementById("mousemove");
var count = 0;
target.addEventListener("mousemove", function(event){
	count++;
	mousemove.innerHTML = count;
});

})();