console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'dom.js'\n");
console.log("-------------------------------------------------\n");


// activeElement (pega o elemento focused)
var activeElement = document.activeElement.tagName;
console.log("O elemento ativo é: " + activeElement);




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