(function(){

/*	LOCATION
 *  contém informações sobre a url atual
 */
mostrarNaTela("O objeto location:<b> ", window.location + "</b>");

// propriedades
mostrarNaTela("A hash da url é:<b> " + window.location.hash + "</b>");
mostrarNaTela("O host da url é:<b> " + window.location.host + "</b>");
mostrarNaTela("O hostname da url é:<b> " + window.location.hostname + "</b>");
mostrarNaTela("A url completa é:<b> " + window.location.href + "</b>");
mostrarNaTela("A origin da url é:<b> " + window.location.origin + "</b>");
mostrarNaTela("O pathname da url é:<b> " + window.location.pathname + "</b>");
mostrarNaTela("A porta da url é:<b> " + window.location.port + "</b>");
mostrarNaTela("O protocolo da url é:<b> " + window.location.protocol + "</b>");
mostrarNaTela("A querystring da url é:<b> " + window.location.search + "</b>");

// metodos
// redireciona a janela para outra url
document.getElementById("assign").onclick = function(){
	window.location.assign("https://www.w3schools.com");
}

// redireciona a janela para outra url, porém não insere no history do navegador
document.getElementById("replace").onclick = function(){
	window.location.replace("https://www.w3schools.com");
}


// obs: atribuir uma nova url para o atributo href também faz um redirecionamento
document.getElementById("href").onclick = function(){
	window.location.href = "https://www.w3schools.com";
}

// recarrega a janela do navegador (cuidado com loops de reload)
// passando o parâmetro 'true' desconsidera o cache do navegador
document.getElementById("reload").onclick = function(){
	window.location.reload();
}

})();