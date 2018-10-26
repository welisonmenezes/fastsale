(function(){

var myTouch = document.getElementById("myTouch");

myTouch.addEventListener("touchstart", function(event){
	mostrarNaTela("O touchstart foi disparado");

	console.log(event);
});

myTouch.addEventListener("touchmove", function(event){
	mostrarNaTela("O touchmove foi disparado");
});

myTouch.addEventListener("touchend", function(event){
	mostrarNaTela("O touchend foi disparado");
});

myTouch.addEventListener("touchcancel", function(event){
	mostrarNaTela("O touchcancel foi disparado");
});

})();