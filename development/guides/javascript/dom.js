console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'dom.js'\n");
console.log("-------------------------------------------------\n");


// SELETORES

// pegar pelo id
var selecionadoPorId = document.getElementById("titulo-principal");
console.log("O elemento selecionado por ID é: ", selecionadoPorId);

// pegar pela classe
var selecionadoPorClass = document.getElementsByClassName("titulo-classe");
console.log("Os elementos selecionados pela Classe são: ", selecionadoPorClass);

// pegar pelo nome
var selecionadoPorNome = document.getElementsByName("nomeInput");
console.log("O elemento selecionado pelo nome é: ", selecionadoPorNome);

// pegar pelo nome da tag
var selecionadoPelaTag = document.getElementsByTagName("button");
console.log("Os elementos selecionados pela tag são: ", selecionadoPelaTag);

// pegar por seletor css (só retorna o primeiro elemento que encontrar)
var selecionadoPorQuery = document.querySelector("div > p, h2");
console.log("O elemento selecionado por query é: ", selecionadoPorQuery);

// pegar todos elementos por seletor css
var selecionadosPorQuery = document.querySelectorAll("div > p, h2");
console.log("Os elementos selecionados por query são: ", selecionadosPorQuery);


function mostraTituloIframe(){
	console.log(window.frames[0].document.querySelectorAll("h1"));
	document.getElementById("tituloIframeAqui").innerHTML = window.frames[0].document.querySelectorAll("h1")[0].textContent;
}




// activeElement (pega o elemento focused)
var activeElement = document.activeElement.tagName;
console.log("O elemento ativo é: " + activeElement);

// defaultView (retorna o window do docuemnto)
dv = document.defaultView;
console.log("Titulo do defaultView: " + dv.document.title);

// documentElement (retorna o elemento html do documento)
console.log("O document element é: " + document.documentElement.nodeName);

// doctype (retorna o doctype do documento)
console.log("o doctype do documento é: ", document.doctype);

// documentUri (seta ou retorna o location do documento)
console.log("o documentUri do documento é: " + document.documentURI);

// domain (retorna o domínio do documento)
console.log("O domínio do doucmento é: " + document.domain);

// embeds (retorna os embeds do documento)
console.log("Os embeds do documento são: ", document.embeds);




// adotar ou importar elementos de outras janelas
function adotaElemento(){
	var frame = document.getElementsByTagName("iframe").item(0);
    var h = frame.contentWindow.document.getElementsByTagName("h1").item(0);
    if(h){
    	var x = document.adoptNode(h);
		document.getElementById("titulo-adotado").innerHTML = x.textContent;
    }
}

function importaElemento(){
	var frame = document.getElementsByTagName("iframe").item(1);
    var h = frame.contentWindow.document.getElementsByTagName("h1").item(0);
    if(h){
    	var x = document.importNode(h, true);
		document.getElementById("titulo-adotado").innerHTML = x.textContent;
    }
}


// ANCHORS

// retorna todos os elementos '<a>' que tem o atributo name (não supportado em html5)
var anchors = document.anchors;
console.log(anchors);

// retorna todos os elementos '<a>' que tem o atributo href
var links = document.links;
console.log(links);


// base uri (não suportado no IE)
console.log("A url absoluta do documento é: " + document.baseURI);


// BODY (retorna o body do documento)
document.body.style.backgroundColor = "#f4f4f4";


// EVENTOS
// add evento

var funcClick = function(e){
	console.log(e)
	alert("foi clicado");
}
var funcClick2 = function(e){
	console.log(e)
	alert("foi clicado 2");
}

var elementosClass = document.getElementsByClassName("evento-click");
for (var i = 0; i < elementosClass.length; i++) {
	elementosClass[i].addEventListener("click", funcClick);
	elementosClass[i].addEventListener("click", funcClick2);
}

// remove evento
function removeEvento(){
	for (var i = 0; i < elementosClass.length; i++) {
		elementosClass[i].removeEventListener("click", funcClick);
	}
}

// adiciona 1 evento
document.getElementById("tenhoClick").onclick = function(){
	alert("Teste evento embutido");
}
function removeEventoEmbutido(){
	document.getElementById("tenhoClick").onclick = null;
}

// document.addEventListener("click", function(){
// 	alert('clicado no documento')
// });


// COOKIES

// seta cookies
document.cookie =  "username=Welison Menezes";
document.cookie =  "email=welisonmenezes@gmail.com";

// pega todos os cookies
var todosCookies = document.cookie;
console.log(todosCookies);


// CHARSET
console.log("O charset é: " + document.characterSet);
console.log("O charset é: " + document.inputEncoding);



// CRIAR ATRIBUTO HTML

var attr = document.createAttribute("class");
attr.value = "red";
document.getElementById("atributoDinamico").setAttributeNode(attr);


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



// CRIAR COMENTÁRIOS
var comentario = document.createComment("Meu comentário aqui");
document.getElementById("recebeComentario").appendChild(comentario);


// CRAR ELEMENTOS HTML DINAMICAMENTE
var imagemDinamica = document.createElement("img");
imagemDinamica.src = "https://api.thecatapi.com/v1/images/search?format=src&size=small";
document.getElementById("imagemDinamica").appendChild(imagemDinamica);


// CRIAR CONTEÚDO PARA ELEMNTO (createTextNode)
document.getElementById("textDinamico").innerHTML = "<p>texto adicionado via 'innerHTML'</p>";
//document.getElementById("textDinamico").textContent = "<p>texto adicionado via 'textContent'";
document.getElementById("textDinamico").appendChild(document.createTextNode("<p>texto adicionando via 'createTextNode'</p>"));



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
function addBold(){
	document.execCommand('bold', true, null);
}


// FORMS (retorna os formulários do documento)
console.log("A quantidade de formuláriso é: " + document.forms.length);

if(document.forms.length){
	console.log("O action do formulário é: " + document.forms[0].action);
	console.log("O method do formulário é: " + document.forms[0].method);
	console.log("O name do formulário é: " + document.forms[0].name);
	console.log("O target do formulário é: " + document.forms[0].target);
	console.log("O formulário é validado? " + document.forms[0].noValidate);
}

function enviaFormulario(){
	document.forms[0].submit();
}

function resetaFormulario(){
	document.forms[0].reset();
}



// fullscreenElement

function ficarFull(){
	openFullscreen(document.getElementById("fullScreen"));
}

function sairFull(){
	closeFullscreen();
}

function elFull(){
	console.log("O elemento que está fullScreen é: ", elFullscreen());
}

function isFull(){
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