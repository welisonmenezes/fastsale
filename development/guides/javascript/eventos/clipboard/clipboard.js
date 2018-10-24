(function(){

var myTextarea  = document.getElementById("myTextarea");

myTextarea.addEventListener("copy", myCopyFunction);
function myCopyFunction(event) {
	console.log(event);

	mostrarNaTela("O evento copy foi acionado");
	mostrarNaTela("Tipo do evento: " + event.type);
	mostrarNaTela("Target do evento: " + event.target.tagName);
	mostrarNaTela("O dado selecionado é: " + window.getSelection().toString());

}


myTextarea.addEventListener("cut", myCutFunction);
function myCutFunction(event) {
	console.log(event);

	mostrarNaTela("O evento cut foi acionado");
	mostrarNaTela("Tipo do evento: " + event.type);
	mostrarNaTela("Target do evento: " + event.target.tagName);
	mostrarNaTela("O dado selecionado é: " + window.getSelection().toString());
	
}


myTextarea.addEventListener("paste", myPastFunction);
function myPastFunction(event) {
	console.log(event);

	mostrarNaTela("O evento paste foi acionado");
	mostrarNaTela("Tipo do evento: " + event.type);
	mostrarNaTela("Target do evento: " + event.target.tagName);

	var clipboardData = event.clipboardData || window.clipboardData;
	mostrarNaTela("O texto colado é: " + clipboardData.getData('Text'));
	
}

})();