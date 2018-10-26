(function(){

var message = "Mensagem default";

/*
document.getElementsByTagName("body")[0].addEventListener("beforeunload", function(){
    return "Mensagem";
});
*/
/*
document.getElementsByTagName("body")[0].onbeforeunload = function(){
    message = "tentou sair";
    return "mensagem";
};
*/
window.addEventListener("beforeunload", function (event) {
    message = "tentou sair";

    (event || window.event).returnValue = null;
    return null;
});


window.addEventListener("pageshow", function (event) {
    message = "disparado por pageshow";

    if (event.persisted) {
        mostrarNaTela("A página foi para o cache do navegador");
    } else {
        mostrarNaTela("A página NÃO foi para o cache do navegador");
    }
});

document.getElementById("mostrarMensagem").onclick = function(){
    alert(message);
}

var resize = document.getElementById("resize");
window.addEventListener("resize", function(event){
    resize.innerHTML = window.innerHeight;
});


var scroll = document.getElementById("scroll");
window.addEventListener("scroll", function(event){
    //scroll.innerHTML = document.getElementsByTagName("body")[0].scrollY;
    scroll.innerHTML = window.pageYOffset;
});

var myInput = document.getElementById("myInput");
myInput.addEventListener("select", function(event){
    var selObj = window.getSelection(); 
    var selectedText = selObj.toString();

    mostrarNaTela("O texto selecionado foi: " + selectedText);
});

var txtInput = document.getElementById("input");
myInput.addEventListener("input", function(event){
    txtInput.innerHTML = event.data;
});


window.addEventListener("storage", function(){
    mostrarNaTela("Os dados foram guardados no storage");
});




var myVideo = document.getElementById("myVideo");

document.getElementById("removerVideo").onclick = function(){
    if(myVideo.parentNode){
        myVideo.src = "";
        //myVideo.parentNode.removeChild(myVideo);
    }
}

myVideo.addEventListener("abort", function(){
    mostrarNaTela("Vídeo abortado!");
});

myVideo.addEventListener("error", function(){
    mostrarNaTela("Carregamento do vídeo deu erro!");
});

myVideo.addEventListener("suspend", function(){
    mostrarNaTela("Vídeo suspenso!");
});

myVideo.addEventListener("playing", function(){
    mostrarNaTela("O vídeo está tocando!");
});

myVideo.addEventListener("waiting", function(){
    mostrarNaTela("O vídeo está em espera!");
});

myVideo.addEventListener("ended", function(){
    mostrarNaTela("O vídeo acabou!");
});

myVideo.addEventListener("play", function(){
    mostrarNaTela("Play no vídeo!");
});

myVideo.addEventListener("pause", function(){
    mostrarNaTela("Pause no vídeo!");
});

myVideo.addEventListener("canplay", function(){
    mostrarNaTela("Pode tocar o vídeo!");
});

myVideo.addEventListener("canplaythrough", function(){
    mostrarNaTela("Pode até tocar...!");
});

myVideo.addEventListener("volumechange", function(){
    mostrarNaTela("Mudou o volume!");
});

myVideo.addEventListener("loadstart", function(){
    mostrarNaTela("Começou a carregar o vídeo!");
});

var progresso = document.getElementById("progresso");
var pcout = 0;
myVideo.addEventListener("progress", function(){
    pcout++;
    progresso.innerHTML = pcout;
});

})();