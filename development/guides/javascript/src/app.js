function mostrarNaTela(dados){
	var div = document.createElement('div');

	var err = new Error();
    var caller_line = err.stack.split("\n")[2];
    var index = caller_line.indexOf("at ");
    var clean = caller_line.slice(index+2, caller_line.length);
    clean = clean.split(":")[3];

	div.innerHTML = "<p><em>Linha: " + clean + "</em>: " + dados + "</p>";
	document.getElementById("resultados").appendChild(div);
}