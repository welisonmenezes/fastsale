(function(){

// accessKey
document.getElementById("linkAccesskey").accessKey = "g";
mostrarNaTela("O accessKey de linkAccesskey é: " + document.getElementById("linkAccesskey").accessKey);

// attributes
var atributos = document.getElementById("linkAccesskey").attributes;
mostrarNaTela("A quantidade de atributos do link é: " + atributos.length);
console.log("Os atributos do link são: ", atributos);

// isDefaultNamespace (verifica se o namespace é o default) 
mostrarNaTela("O namespace é o defautl? " + document.documentElement.isDefaultNamespace("http://www.w3.org/1999/xhtml"));

// ELEMENTOS E NÓS FILHOS
var testeChildren = document.getElementById("testeChildren");
mostrarNaTela("O número dos elemntos filhos são: " + testeChildren.childElementCount);
mostrarNaTela("O número dos elemntos filhos são: " + testeChildren.children.length);
mostrarNaTela("Os elementos filhos são: " + testeChildren.children.length);
mostrarNaTela("O número de todos os filhos são: " + testeChildren.childNodes.length);
mostrarNaTela("Todos os filhos são: " + testeChildren.childNodes.length);
mostrarNaTela("O primeiro filho é:" + testeChildren.firstChild.nodeName);
mostrarNaTela("O primeiro elemento filho é: " + testeChildren.firstElementChild.nodeName);
mostrarNaTela("O último filho é: " + testeChildren.lastChild.nodeName);
mostrarNaTela("O último elemento filho é: " + testeChildren.lastElementChild.nodeName);

// nextSibling (retorna o node imediatamente após o elemento)
mostrarNaTela("O próximo node ao primeiro Elemento filho é: " + testeChildren.firstElementChild.nextSibling.nodeName);

// nextElementSibling (retorna o elemento imediatamente após o elemento)
mostrarNaTela("O próximo elemento ao primeiro Elemento filho é: " + testeChildren.firstElementChild.nextElementSibling.nodeName);


// NODE INFOS
mostrarNaTela("O nome do node é: " + testeChildren.firstChild.nodeName);
mostrarNaTela("O valor do node é: " + testeChildren.firstChild.nodeValue);
// 1 if element | 2 if attribute | 3 if text | 8 if comment
mostrarNaTela("O tipo do node é: " + testeChildren.firstChild.nodeType);

// SELECTORS
// getElementsByClassName
var filhosTeste = testeChildren.getElementsByClassName("classeFilho");
for(el of filhosTeste){
	mostrarNaTela("O elemento filho é: " + el.tagName);
}

// getElementsByTagName
var tagsFilhas = testeChildren.getElementsByTagName("p");
for(el of tagsFilhas){
	mostrarNaTela("O conteúdo dos parágrafos filhos é: " + el.innerText);
}

// querySelector
var filhoQuery = testeChildren.querySelector(".classeFilho > span");
mostrarNaTela("O filhoQuery é: " + filhoQuery.tagName);

// querySelectorAll
var filhosQuery = testeChildren.querySelectorAll("div p");
for(el of filhosQuery){
	mostrarNaTela("Os filhosQuery são: " + el.tagName);
}



// class, title, lang and id
mostrarNaTela("As classes do elemento são: " + testeChildren.className);
mostrarNaTela("As classes do elemento são: " + testeChildren.classList);
mostrarNaTela("O id do elemento é: " + testeChildren.id);
mostrarNaTela("O titulo do elemento é: " + testeChildren.title);
mostrarNaTela("O lang do elemento é: " + testeChildren.lang);

// add class
testeChildren.className = "novaClasse";
testeChildren.classList.add("novaClasse2");
mostrarNaTela("As classes do elemento são: " + testeChildren.className);
mostrarNaTela("As classes do elemento são: " + testeChildren.classList);

// innerHtml
mostrarNaTela("O innerHTML do elemento é: " + testeChildren.innerHTML);
mostrarNaTela("O innerText do elemento é: " + testeChildren.innerText);

// sytle object
mostrarNaTela("O style object do elemento é: " + testeChildren.style);
console.log("O style object do elemento é: ", testeChildren.style);

// focus, blur and click
document.getElementById("pegarFoco").onclick = function(){
	document.getElementById("linkAccesskey").focus();
}
document.getElementById("tirarFoco").onclick = function(){
	document.getElementById("linkAccesskey").blur();
}
document.getElementById("simulaClick").onclick = function(){
	document.getElementById("linkAccesskey").click();
}


// appendChild (adiciona elemento no final)
document.getElementById("addNoFinal").onclick = function(){
	var node = document.createElement("LI");  
	var textnode = document.createTextNode("Texto lista no final");
	node.appendChild(textnode);
	document.getElementById("myLista").appendChild(node);
}

// insertBefore (adiciona elemento no final)
document.getElementById("addNoInicio").onclick = function(){
	var node = document.createElement("LI");  
	var textnode = document.createTextNode("Texto lista no início");
	node.appendChild(textnode);
	
	var list = document.getElementById("myLista");
	list.insertBefore(node, list.childNodes[0]);
}

// cloneNode (clona um elemento)
document.getElementById("clonaElemento").onclick = function(){
	var lista = document.getElementById("myLista");
	var primeiroItem = lista.firstElementChild;
	var clone = primeiroItem.cloneNode(true);
	lista.appendChild(clone);
}

// replaceChild (troca um elemento por outro)
document.getElementById("replaceElemento").onclick = function(){
	var lista = document.getElementById("myLista");
	var primeiroItem = lista.firstElementChild;

	var node = document.createElement("LI");  
	var textnode = document.createTextNode("Texto trocado");
	node.appendChild(textnode);
	
	lista.replaceChild(node, primeiroItem);
}

// removeChild (remove o elemento)
document.getElementById("removeElemento").onclick = function(){
	var lista = document.getElementById("myLista");

	if(lista.lastElementChild){
		lista.removeChild(lista.lastElementChild);
	}
}


// insertAdjacentElement (afterbegin|afterend|beforebegin|beforeend)
document.getElementById("insertButton").onclick = function(){
	var insertH2 = document.getElementById("insertH2");
	var insertSpan = document.getElementById("insertSpan");
	insertH2.insertAdjacentElement("beforeend", insertSpan);
}

// insertAdjacentHTML (afterbegin|afterend|beforebegin|beforeend)
document.getElementById("insertButtonHtml").onclick = function(){
	var insertH2 = document.getElementById("insertH2");
	insertH2.insertAdjacentHTML("beforeend", "<strong class='red'>Texto forte vermelho</strong>");
}

// insertAdjacentText (afterbegin|afterend|beforebegin|beforeend)
document.getElementById("insertButtonText").onclick = function(){
	var insertH2 = document.getElementById("insertH2");
	insertH2.insertAdjacentText("beforeend", "text adicionado dinamicamente");
}




// compareDocumentPosition
/*
2 - 1º depois
4 - 1º antes
8 - 1º dentro
16 - 2º dentro
*/
document.getElementById("compararPosicao").onclick = function(){
    var lista = document.getElementById("myLista");
    var primeiro = lista.firstElementChild
    var ultimo = lista.lastElementChild;

    var x = primeiro.compareDocumentPosition(ultimo);

    mostrarNaTela("A comparação de posição retornou: " + x);
}

// contains
document.getElementById("verificaSeContem").onclick = function(){
	var item = document.getElementById("item1");
	var contem = document.getElementById("myLista").contains(item);
	mostrarNaTela("A lista contem o item cujo id='item1'? " + contem);
}


// DIMENSÕES E POSITIONING 

var divDimensoes = document.getElementById("divDimensoes");

// clientHeight (mostra altura incluindo o padding)
mostrarNaTela("O 'clientHeight' é: " + divDimensoes.clientHeight);
// offsetHeight (mostra altura incluindo o padding e borda)
mostrarNaTela("O 'offsetHeight' é: " + divDimensoes.offsetHeight);
// scrollHeight (mostra altura total [com scrollbar])
mostrarNaTela("O 'scrollHeight' é: " + divDimensoes.scrollHeight);
// css height (altura exata)
mostrarNaTela("O 'height' css é: " + window.getComputedStyle(divDimensoes).height);

// clientWidth (mostra altura incluindo o padding)
mostrarNaTela("O 'clientWidth' é: " + divDimensoes.clientWidth);
// offsetWidth (mostra altura incluindo o padding e borda)
mostrarNaTela("O 'offsetWidth' é: " + divDimensoes.offsetWidth);
// scrollWidth (mostra altura total [com scrollbar])
mostrarNaTela("O 'scrollWidth' é: " + divDimensoes.scrollWidth);
// css width (altura exata)
mostrarNaTela("O 'width' css é: " + window.getComputedStyle(divDimensoes).width);


// BORDER TOP AND LEFT DIMENSIONS
// clientTop (retoran a largura do top)
mostrarNaTela("O 'clientTop' é: " + divDimensoes.clientTop);
// clientLeft (retoran a largura do top)
mostrarNaTela("O 'clientLeft' é: " + divDimensoes.clientLeft);


// SCROLL POSISTION DO ELEMENTO
// scrollTop (mostra altura total [com scrollbar])
divDimensoes.scrollTop = 100;
mostrarNaTela("O 'scrollTop' é: " + divDimensoes.scrollTop);
// scrollLeft (mostra altura total [com scrollbar])
mostrarNaTela("O 'scrollLeft' é: " + divDimensoes.scrollLeft);



// DIRECTION
// seta a direção do texto (ltr|rtl|auto)
document.getElementById("textInvertido").dir = "rtl";

// getAttribute
var attrClass = document.getElementById("testeChildren").getAttribute("class");
mostrarNaTela("O atributo 'class' tem o seguinte valor: " + attrClass);

// getAttributeNode
var attrNode = document.getElementById("testeChildren").getAttributeNode("class");
mostrarNaTela("O node atributo 'class' tem o seguinte valor: " + attrNode.value);

// getBoundingClientRect
var bCR = document.getElementById("divDimensoes").getBoundingClientRect();
mostrarNaTela("O getBoundingClientRect.height é: " + bCR.height);
mostrarNaTela("O getBoundingClientRect.width é: " + bCR.width);
mostrarNaTela("O getBoundingClientRect.x é: " + bCR.x);
mostrarNaTela("O getBoundingClientRect.y é: " + bCR.y);
mostrarNaTela("O getBoundingClientRect.right é: " + bCR.right);
mostrarNaTela("O getBoundingClientRect.bottom é: " + bCR.bottom);
mostrarNaTela("O getBoundingClientRect.left é: " + bCR.left);
mostrarNaTela("O getBoundingClientRect.top é: " + bCR.top);



var linkTeste = document.getElementById("checkAtributos");
mostrarNaTela("O linkTeste tem o atributo 'href'? " + linkTeste.hasAttribute("href"));
mostrarNaTela("O linkTeste tem o atributo 'href'? " + linkTeste.hasAttribute("class"));
mostrarNaTela("O linkTeste tem qualquer atributo? " + linkTeste.hasAttributes());
mostrarNaTela("O linkTeste tem algum nodeChild? " + linkTeste.hasChildNodes());
mostrarNaTela("O 'id' do linkTeste é: " + linkTeste.id);


// isEqualNode (verifica se é igual)
var compara1 = document.getElementById("comparaUm").firstChild;
var compara2 = document.getElementById("comparaDois").firstChild;
mostrarNaTela("O 'compara1' é igual ao 'compara2' ? " + compara1.isEqualNode(compara2));

// isSameNode (verifica se é o mesmo)
mostrarNaTela("O 'compara1' é o mesmo que 'compara2' ? " + compara1.isSameNode(compara2));



})();