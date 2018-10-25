(function(){

window.addEventListener("hashchange", function(event){
	mostrarNaTela("Foi para a âncora " + location.hash);
	mostrarNaTela("A url antiga era: " + event.oldURL);
	mostrarNaTela("A url nova é: " + event.newURL);
});

// um pouco instável
window.addEventListener("popstate", function(){
	mostrarNaTela("Foi para a âncora " + location.hash);
	mostrarNaTela("A url antiga era: " + event.oldURL);
	mostrarNaTela("A url nova é: " + event.newURL);
});
document.getElementById("mudarEstado").onclick = function(){
	window.history.pushState({nome:'push'}, "nome/título página", "fragmento-url-pagina-add");
}

})();