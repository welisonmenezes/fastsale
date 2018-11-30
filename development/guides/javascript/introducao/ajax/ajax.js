(function(){

// XMLHttpRequest
// fornece a funcionalidade para fazer requisições http para servidores

var httpRequest;
if (window.XMLHttpRequest) { // navegadores modernos
	httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 e anteriores
	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}


// onreadystatechange 
// metodo chamada quando o status da requisição

httpRequest.onreadystatechange = function(){
    // processar a resposta do servidor

    // readyState
    // lê o status da requisição que são:
    // 0 (não inicializado), 1 (carregando), 2 (carregado), 3 (interativo), 4 (completo)
    if (httpRequest.readyState === 4) {

    	// lê o status da resposta do servidor
    	// podem ser 400, 500, 404, 200, etc (200 é o ok)
    	if (httpRequest.status === 200) {

    		// responseText (responseXML se último parâmetro de open for true)
    		// retorna os dados vindos do servidor

    		mostrarNaTela(httpRequest.responseText);

    		// getResponseHeader
    		// retorna uma dada info do cabeçalho
    		console.log('getResponseHeader: ', httpRequest.getResponseHeader('Accept'));

    		// getAllResponseHeaders
    		// retorna todos as infos do cabeçalhos
    		console.log('getAllResponseHeaders: ', httpRequest.getAllResponseHeaders());

    	}else{
    		console.log("error, não é o status 200");
    	}
	    
	}
};


// open
// abre uma requisição 
httpRequest.open('GET', 'ajax-resposta.html', true);

// send
// envia uma requisição (o paramêtro são dadods a serem enviados via post)
httpRequest.send(null);
})();