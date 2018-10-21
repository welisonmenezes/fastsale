(function(){

/*	 SCREEN
 *
 */

mostrarNaTela("A altura disponível para a janela é:<b> " + window.screen.availHeight + "</b>");
mostrarNaTela("A largura disponível para a janela é:<b> " + window.screen.availWidth + "</b>");
mostrarNaTela("A altura total da janela é:<b> " + window.screen.height + "</b>");
mostrarNaTela("A largura total da janela é:<b> " + window.screen.width + "</b>");

mostrarNaTela("A profundidade de cores da janela é:<b> " + window.screen.colorDepth + "</b>");
mostrarNaTela("A profundidade de cores da janela é:<b> " + window.screen.pixelDepth + "</b>");

// coordenadas do screen
mostrarNaTela("A coordenada X da janela é:<b> " + window.screenLeft + "</b>");
mostrarNaTela("A coordenada X da janela é:<b> " + window.screenX + "</b>"); // firefox

mostrarNaTela("A coordenada Y da janela é:<b> " + window.screenTop + "</b>");
mostrarNaTela("A coordenada Y da janela é:<b> " + window.screenY + "</b>"); // firefox

})();