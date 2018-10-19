console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'dom-elements.js'\n");
console.log("-------------------------------------------------\n");


// accessKey
document.getElementById("linkAccesskey").accessKey = "g";
console.log("O accessKey de linkAccesskey é: " + document.getElementById("linkAccesskey").accessKey);

// attributes
var atributos = document.getElementById("linkAccesskey").attributes;
console.log("A quantidade de atributos do link é: " + atributos.length);
console.log("Os atributos do link são: ", atributos);


// ELEMENTOS E NÓS FILHOS
var testeChildren = document.getElementById("testeChildren");
console.log("O número dos elemntos filhos são: " + testeChildren.childElementCount);
console.log("O número dos elemntos filhos são: " + testeChildren.children.length);
console.log("Os elementos filhos são: ", testeChildren.children);
console.log("O número de todos os filhos são: " + testeChildren.childNodes.length);
console.log("Todos os filhos são: ", testeChildren.childNodes);
console.log("O primeiro filho é:", testeChildren.firstChild);
console.log("O primeiro elemento filho é: ", testeChildren.firstElementChild);
console.log("O último filho é: ", testeChildren.lastChild);
console.log("O último elemento filho é: ", testeChildren.lastElementChild);

// class, title, lang and id
console.log("As classes do elemento são: ", testeChildren.className);
console.log("As classes do elemento são: ", testeChildren.classList);
console.log("O id do elemento é: ", testeChildren.id);
console.log("O titulo do elemento é: ", testeChildren.title);
console.log("O lang do elemento é: ", testeChildren.lang);

testeChildren.className = "novaClasse";
testeChildren.classList.add("novaClasse2");

// innerHtml
console.log("O innerHTML do elemento é: ", testeChildren.innerHTML);
console.log("O innerText do elemento é: ", testeChildren.innerText);

// sytle object
console.log("O style object do elemento é: ", testeChildren.style);

// focus, blur and click
function pegarFoco(){
	document.getElementById("linkAccesskey").focus();
}
function tirarFoco(){
	document.getElementById("linkAccesskey").blur();
}
function simulaClick(){
	document.getElementById("linkAccesskey").click();
}