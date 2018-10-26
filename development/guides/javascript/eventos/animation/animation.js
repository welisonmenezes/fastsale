(function(){

var x = document.getElementById("myDiv");


x.addEventListener("webkitAnimationStart", myStartFunction); // Code for Chrome, Safari and Opera
x.addEventListener("animationstart", myStartFunction); // Standard syntax
function myStartFunction(event) {
	console.log(event);
    mostrarNaTela("A animação começou. Seu nome é: " + event.animationName);
}


x.addEventListener("webkitAnimationEnd", myEndFunction); // Code for Chrome, Safari and Opera
x.addEventListener("animationend", myEndFunction); // Standard syntax
function myEndFunction(event) {
	console.log(event);
    mostrarNaTela("A animação acabou. Seu nome é: " + event.animationName);
}


x.addEventListener("webkitAnimationIteration", myIterationFunction); // Code for Chrome, Safari and Opera
x.addEventListener("animationiteration", myIterationFunction); // Standard syntax
function myIterationFunction(event) {
    mostrarNaTela("Tempo decorrido: " + event.elapsedTime);
}


var x2 = document.getElementById("myDiv2");

x2.addEventListener("webkitTransitionEnd", myTransitionEnd);
x2.addEventListener("transitionend", myTransitionEnd);
function myTransitionEnd(){
	mostrarNaTela("Transição acabou.");
}


// NÃO IMPLEMENTADOS AINDA
// x2.addEventListener("webkitTransitionStart", myTransitionStart);
// x2.addEventListener("transitionstart", myTransitionStart);
// function myTransitionStart(){
// 	mostrarNaTela("Transição começou.");
// }

// x2.addEventListener("webkitTransitionRun", myTransitionRun);
// x2.addEventListener("transitionrun", myTransitionRun);
// function myTransitionRun(){
// 	mostrarNaTela("Transição rodando.");
// }

})();