(function(){

// accessKey
document.getElementById("linkAccesskey").accessKey = "g";
mostrarNaTela("O accessKey de linkAccesskey é: " + document.getElementById("linkAccesskey").accessKey);

// attributes
var atributos = document.getElementById("linkAccesskey").attributes;
mostrarNaTela("A quantidade de atributos do link é: " + atributos.length);
console.log("Os atributos do link são: ", atributos);

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



})();