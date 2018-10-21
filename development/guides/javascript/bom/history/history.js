(function(){

// HISTSORY
// refere-se ao histório de navegação da janela corrente

mostrarNaTela(window.history);

mostrarNaTela("Quantidade de urls visitadas:<b> " + window.history.length + "</b>");

// método 'back'
document.getElementById("voltar").onclick = function(){
	window.history.back();
}

// método 'forward'
document.getElementById("avancar").onclick = function(){
	window.history.forward();
}

// método 'go' (avança ou volta conforme o parâmetro)
document.getElementById("voltarUm").onclick = function(){
	window.history.go(-1);
}
document.getElementById("avancarUm").onclick = function(){
	window.history.go(1);
}


// método 'pushState'
// (atualzia a url do navegador sem recarregar a página e altera o histórico)
document.getElementById("adicionaEstado").onclick = function(){
	window.history.pushState({nome:'push'}, "nome/título página", "fragmento-url-pagina-add");

	mostrarNaTela("O estado atual do histórico é:<b> " + window.history.state.nome + "</b>");
}

// métdo 'replaceState'
// (atualiza a url do navegador sem recarregar a página e não altera o histórico)
document.getElementById("trocaEstado").onclick = function(){
	window.history.replaceState({nome:'replace'}, "nome/título página", "fragmento-url-pagina-change");

	mostrarNaTela("O estado atual do histórico é:<b> " + window.history.state.nome + "</b>");
}

// object 'state' (ler o estado atual do histórico)
mostrarNaTela("O estado atual do histórico é:<b> " + window.history.state + "</b>");



})();