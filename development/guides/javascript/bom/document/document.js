(function(){

// SELETORES

// pegar pelo id
var selecionadoPorId = document.getElementById("idTeste");
mostrarNaTela("O conteúdo do elemento cujo ID é 'idTeste' é: " + selecionadoPorId.innerText);

// pegar pela classe
var selecionadoPorClass = document.getElementsByClassName("classTeste");
for(el of selecionadoPorClass){
	mostrarNaTela("O conteúdo do elemento cujo Class é 'classTeste' é: " + el.innerText);
}

// pegar pelo nome
var selecionadoPorNome = document.getElementsByName("nameTeste");
for(el of selecionadoPorNome){
	mostrarNaTela("O conteúdo do elemento cujo name é 'nameTeste' é: " + el.innerText);
}

// pegar pelo nome da tag
var selecionadoPelaTag = document.getElementsByTagName("h1");
for(el of selecionadoPelaTag){
	mostrarNaTela("O conteúdo do elemento pela tag 'h1' é: " + el.innerText);
}

// pegar por seletor css (só retorna o primeiro elemento que encontrar)
var selecionadoPorQuery = document.querySelector("div h2");
mostrarNaTela("O conteúdo do elemento retornado por 'div h2' é: " + selecionadoPorQuery.innerText);

// pegar todos elementos por seletor css
var selecionadosPorQuery = document.querySelectorAll("div#idTeste p, h2");
for(el of selecionadosPorQuery){
	mostrarNaTela("Os conteúdos dos elementos retornados por 'div#idTeste p, h2' são: " + el.innerText);
}

// pegar elementos de outro frame
document.getElementById("mostarTituloIframe").onclick = function(){
	var tituloIframe = window.frames[0].document.querySelectorAll("h1");
	mostrarNaTela("O título do iframe é: " + tituloIframe[0].innerText);
}

// embeds (retorna os embeds do documento)
var myEmbeds = document.embeds;
for(el of myEmbeds){
	mostrarNaTela("O src do embed é: " + el.src);
}

// forms (retorna os formulários do doucmento)
var myForms = document.forms;
for(el of myForms){
	mostrarNaTela("O action do form é: " + el.action);
}

// head (retorna o head do documento)
var myHead = document.head;
mostrarNaTela("O nome da tag 'head' é: " + myHead.tagName);

// images (retorna as imagens do documento)
var myImages = document.images;
for(el of myImages){
	mostrarNaTela("O texto alternativo da imagem é: " + el.alt);
}

// links -> retorna os lins (tag 'a' com atributo 'href' definido)
var myLinks = document.links;
for(el of myLinks){
	mostrarNaTela("O href do link é: " + el.href);
}

// retorna todos os elementos '<a>' que tem o atributo name (não supportado em html5)
var myAnchors = document.anchors;
for(el of myAnchors){
	mostrarNaTela("O name da ancora é: " + el.name);
}

// scripts (retorna os scripts do documento)
var myScripts = document.scripts;
for(el of myScripts){
	mostrarNaTela("O src do elemento 'script' é: " + el.src);
}

// body (retorna o elemento body do documento)
var myBody = document.body;
mostrarNaTela("O nome da tag 'body' é: " + myBody.tagName);

// activeElement (pega o elemento focused)
document.querySelector("input").setAttribute('tabindex','0');
document.querySelector("input").focus();
var activeElement = document.activeElement.tagName;
mostrarNaTela("O elemento ativo é: " + activeElement);

// defaultView (retorna o window do docuemnto)
dv = document.defaultView;
mostrarNaTela("Titulo do defaultView: " + dv.document.title);

// documentElement (retorna o elemento html do documento)
mostrarNaTela("O document element é: " + document.documentElement.nodeName);

// doctype (retorna o doctype do documento)
mostrarNaTela("o doctype do documento é: " + document.doctype.name);




// INFORAÇÕES DO DOCUMENTO

// documentUri (seta ou retorna o location do documento)
mostrarNaTela("o documentUri do documento é: " + document.documentURI);

// domain (retorna o domínio do documento)
mostrarNaTela("O domínio do doucmento é: " + document.domain);

// referrer (retorna a url da página que carregou o documento (através de um link por ex.))
mostrarNaTela("O referrer do documento é: " + document.referrer);

// url
mostrarNaTela("A url do documento é: " + document.URL);

// base uri (não suportado no IE)
mostrarNaTela("A url absoluta do documento é: " + document.baseURI);

// última modificação
mostrarNaTela("A última modificação do documento foi: " + document.lastModified);

// title
mostrarNaTela("O título do documento é: " + document.title);

// CHARSET
mostrarNaTela("O charset é: " + document.characterSet);
mostrarNaTela("O charset é: " + document.inputEncoding);




// DOMimplementation Object
console.log("O DOMimplementation do documento é: ", document.implementation);



// EVENTOS
// add evento

var funcClick = function(e){
	alert("foi clicado");
}
var funcClick2 = function(e){
	alert("foi clicado 2");
}

var elementosClass = document.getElementsByClassName("evento-click");
for (var i = 0; i < elementosClass.length; i++) {
	elementosClass[i].addEventListener("click", funcClick);
	elementosClass[i].addEventListener("click", funcClick2);
}

// remove evento
document.getElementById("removeEvento").onclick = function(){
	for (var i = 0; i < elementosClass.length; i++) {
		elementosClass[i].removeEventListener("click", funcClick);
	}
}

// adiciona 1 evento
document.getElementById("tenhoClick").onclick = function(){
	alert("Teste evento embutido");
}
document.getElementById("removeClick").onclick = function(){
	document.getElementById("tenhoClick").onclick = null;
}



// CRIAR EVENTOS

// jeito antigo
var event = document.createEvent('Event');
event.initEvent('loginfeito', true, true);
var eventoCustomizado = document.getElementById("eventoCustomizado");
eventoCustomizado.addEventListener('loginfeito', function (e) {
  alert("evento customizado");
}, false);

eventoCustomizado.onclick = function(){
	eventoCustomizado.dispatchEvent(event);
}

// jeito novo
var event2 = new Event('Event');
var eventoCustomizado2 = document.getElementById("eventoCustomizado2");
eventoCustomizado2.addEventListener('Event', function (e) {
	alert("evento customizado 2");
}, false);

eventoCustomizado2.onclick = function(){
	eventoCustomizado2.dispatchEvent(event2);
}
//eventoCustomizado2.click();



// HAS FOCUS
window.onblur = function(){
	mostrarNaTela("O docuemnto tem foco? " + document.hasFocus());	
}

window.onfocus = function(){
	mostrarNaTela("O docuemnto tem foco? " + document.hasFocus());	
}



// ADOTAR ou IMPORTAR elementos de outras janelas
document.getElementById("adotaElemento").onclick = function(){
	var frame = document.getElementsByTagName("iframe").item(0);
    var h = frame.contentWindow.document.getElementsByTagName("h1").item(0);
    if(h){
    	var x = document.adoptNode(h);
		mostrarNaTela("O título adotado é: " + x.textContent);
    }
}

document.getElementById("importaElemento").onclick = function(){
	var frame = document.getElementsByTagName("iframe").item(1);
    var h = frame.contentWindow.document.getElementsByTagName("h1").item(0);
    if(h){
    	var x = document.importNode(h, true);
		mostrarNaTela("O título importado é: " + x.textContent);
    }
}



// COOKIES

// seta cookies
document.cookie =  "username=Welison Menezes";
document.cookie =  "email=welisonmenezes@gmail.com";

// pega todos os cookies
var todosCookies = document.cookie;
mostrarNaTela("Os cookies são: <b>" + todosCookies + "</b>");


// CRIAR ATRIBUTO
var attr = document.createAttribute("class");
attr.value = "red";
document.getElementById("titulo-principal").setAttributeNode(attr);


// CRIAR COMENTÁRIOS
var comentario = document.createComment("Meu comentário aqui");
document.getElementById("recebeComentario").appendChild(comentario);


// CRAR ELEMENTOS HTML DINAMICAMENTE
var imagemDinamica = document.createElement("img");
imagemDinamica.src = "https://api.thecatapi.com/v1/images/search?format=src&size=small";
document.getElementById("imagemDinamica").appendChild(imagemDinamica);


// CRIAR CONTEÚDO PARA ELEMNTO (createTextNode)
document.getElementById("textDinamico1").innerHTML = "<p>texto adicionado via 'innerHTML'</p>";
document.getElementById("textDinamico2").textContent = "<p>texto adicionado via 'textContent'</p>";
document.getElementById("textDinamico3").appendChild(document.createTextNode("<p>texto adicionando via 'createTextNode'</p>"));


// FRAGMENTO DE DOCUMENTO
// o uso desse recuro resulta e melhor performance
var fragmento = document.createDocumentFragment();
var paragrafo = document.createElement("p");
paragrafo.innerHTML = "Paragrafo teste";
fragmento.appendChild(paragrafo);
document.getElementById("recebeFragmento").appendChild(fragmento);
console.log(fragmento);



// DOCUMENT OU ELEMENTS EDITÁVEIS 
// seta o documento em modo editável (on|off)
document.designMode = "off";

// seta o elemento como editável (true|false)
document.getElementById("elementoEditavel").contentEditable = true;



// EXECCOMANDO
document.getElementById("addBold").onclick = function(){
	document.execCommand('bold', true, null);
}



// FULL SCREEN

document.getElementById("ficarFull").onclick = function(){
	openFullscreen(document.getElementById("fullScreen"));
}

document.getElementById("sairFull").onclick = function (){
	closeFullscreen();
}

document.getElementById("elFull").onclick = function(){
	console.log("O elemento que está fullScreen é: ", elFullscreen());
}

document.getElementById("isFull").onclick = function(){
	console.log("O fullScreen está habilitado? " + isFullscreenEnable());
}

function openFullscreen(elem) {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { /* Firefox */
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE/Edge */
		document.msExitFullscreen();
	}
}


function elFullscreen(){
	return  document.fullscreenElement || /* Standard syntax */
  			document.webkitFullscreenElement || /* Chrome, Safari and Opera syntax */
  			document.mozFullScreenElement ||/* Firefox syntax */
 			document.msFullscreenElement;
}

function isFullscreenEnable(){
	return  document.fullscreenEnabled || /* Standard syntax */
			document.webkitFullscreenEnabled || /* Chrome, Safari and Opera syntax */
			document.mozFullScreenEnabled ||/* Firefox syntax */
			document.msFullscreenEnabled/* IE/Edge syntax */
}





// NORMALIZE (junta os textNodes num só)

var normalizarDiv = document.getElementById("normalizarDiv");
normalizarDiv.appendChild( document.createTextNode("Part 1 ") );
normalizarDiv.appendChild( document.createTextNode("Part 2 ") );


mostrarNaTela("A quantidade de childNodes é: " + normalizarDiv.childNodes.length);

document.getElementById("normalizarDocumento").onclick = function(){
	normalizarDiv.normalize();
	mostrarNaTela("A quantidade de childNodes é: " + normalizarDiv.childNodes.length);
}



// OPEN, CLOSE, WRITE E WRITELN

document.getElementById("escreverAlgo").onclick = function(){
	document.open(); // abre pra escrita no documento
	document.writeln("texto writeln"); // escreve com quebra de linha
	document.write("texto write"); // escreve sem quebra de linha
	document.close(); // fecha para escrita no documento
}



// readyState (retorna o estado do documento)
document.onreadystatechange = function () {
	if(document.readyState == "uninitialized"){
		mostrarNaTela("documento não começou a carregar");
	}
	if(document.readyState == "loading"){
		mostrarNaTela("documento está carregando");
	}
	if(document.readyState == "loaded"){
		mostrarNaTela("documento está carregado");
	}
	if(document.readyState == "interactive"){
		mostrarNaTela("documento já está interativo");
	}
	if(document.readyState == "complete"){
		mostrarNaTela("docuemnto completamente carregado");
	}
}

document.getElementById("addIframeDinamicamente").onclick = function(){
	var iframe1 = document.createElement("iframe");
	iframe1.src = "../../src/iframe-2.html?"+Math.random();
	iframe1.id = "iframe-dinamico";
	document.getElementById("recebeIframe").appendChild(iframe1);

	//console.log(iframe1);
	
	iframe1.onload = function(){
		var iframeDoc = iframe1.contentDocument || iframe1.contentWindow.document;
		mostrarNaTela(iframeDoc.getElementById("titulo-principal"));
	}

	// simulando em um iframe
	var timer = setInterval(function() {
	    var state = iframe1.contentWindow.document.readyState;
	    if (state =="complete") { clearInterval(timer); }
	    mostrarNaTela("O estado do carregamento do iframe é:" + state);    
	}, 100);
}

})();