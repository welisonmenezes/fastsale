(function(){

var elemento;
var idragover = 0, idragging = 0;
var elDragging = document.getElementById("elDragging");
var elDragover = document.getElementById("elDragover");

function dragStart(event) {
    event.dataTransfer.setData("dado", "dado qualquer");
    elemento = event.target;
    mostrarNaTela("O dragstart começou");
}

function dragEnd(event) {
	event.preventDefault();
    mostrarNaTela("O dragend começou");

    idragging = 0;
    elDragging.innerHTML = '';

    idragover = 0;
    elDragover.innerHTML = '';
}

function dragenter(event) {
	event.preventDefault();
    mostrarNaTela("O dragenter aconteceu");
}

function dragover(event) {
    event.preventDefault();
    idragover++;
    elDragover.innerHTML = idragover;
}

function dragleave(event) {
    event.preventDefault();
    idragover = 0;
    elDragover.innerHTML = '';
    mostrarNaTela("O dragleave aconteceu");
}

function drag(event) {
	event.preventDefault();
    idragging++;
    elDragging.innerHTML = idragging;
}

function drop(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("dado");
    
    mostrarNaTela("O dado transmitido é: " + data);

    if(!event.target.isSameNode(elemento)){
    	event.target.appendChild(elemento);
	    elemento = null;

	    mostrarNaTela("O drop aconteceu");
    }
    
}

var targets = document.getElementsByClassName("droptarget");

for(var target of targets){
	target.addEventListener("drop", drop);

	target.addEventListener("dragover", dragover);

	target.addEventListener("dragleave", dragleave);

	target.addEventListener("drag", drag);

	target.addEventListener("dragenter", dragenter);
}

document.getElementById("dragtarget").addEventListener("dragstart", dragStart);

document.getElementById("dragtarget").addEventListener("dragend", dragEnd);

})();