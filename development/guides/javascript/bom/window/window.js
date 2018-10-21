(function(){

// objeto window
mostrarNaTela("Objeto 'window': <b>" + window + "</b>");


// sub objetos de window
mostrarNaTela("Sub objetos de windows");
mostrarNaTela("Objeto 'window.console': <b>" + window.console + "</b>");
mostrarNaTela("Objeto 'window.document': <b>" + window.document + "</b>");
mostrarNaTela("Objeto 'window.history': <b>" + window.history + "</b>");
mostrarNaTela("Objeto 'window.location': <b>" + typeof window.location + "</b>");
mostrarNaTela("Objeto 'window.navigator': <b>" + window.navigator + "</b>");
mostrarNaTela("Objeto 'window.screen': <b>" + window.screen + "</b>");


// Frames (retorna os frames da janela)
var iframes = window.frames;

// quantidade de iframes na janela
mostrarNaTela("A quantidade de iframes é: <b>" + iframes.length + "</b>");
mostrarNaTela("A quantidade de iframes é: <b>" + window.length + "</b>");

document.getElementById("mostrarTitulosIframes").onclick = function(){
	if(iframes){
		for(var i = 0; i < iframes.length; i++){
			mostrarNaTela("Iframe " + (i+1) +", Título:<b> " + iframes[i].document.title + "</b>");
		}
	}
}


//FRAME ELEMENT
// descobre se a janela atual é um frame ou não
var frame = window.frameElement;
if(frame){
	mostrarNaTela("Essa janela é um frame");
}else{
	mostrarNaTela("Essa janela não é um frame");
}


// innerWidth e innerHeight (retornam a largura e a altura da janela respectivamente)
mostrarNaTela("A largura da janela é: " + window.innerWidth);
mostrarNaTela("A altura da janela é: " + window.innerHeight);


// outerWidth e outerHeight 
// (retornam a largura e a altura da janela respectivamente, incluindo toolbars e scrollbars)
mostrarNaTela("A largura geral da janela é: " + window.outerWidth);
mostrarNaTela("A altura geral da janela é: " + window.outerHeight);


// pageXOffset e pageYOffset 
//(retorna a posição do scroll da janela horizonta e verticalmente respectivamente)
mostrarNaTela("A posição X da janela é: " + window.pageXOffset);
mostrarNaTela("A posição X da janela é: " + window.scrollX);
mostrarNaTela("A posição Y da janela é: " + window.pageYOffset);
mostrarNaTela("A posição Y da janela é: " + window.scrollY);
// to IE 9 or earlier use: scrollLeft and scrollTop


// PARENT (retorna o pai da janela)
mostrarNaTela("O pai desta janela é: " + window.parent.document.title);

// SELF (retorna a janela corrente)
mostrarNaTela("A janela corrente é: " + window.self.document.title);

// TOP (retorna a janela pai de todos)
mostrarNaTela("A janela pai de todos é: " + window.top.document.title);




/*	LOCAL STORAGE
 *  permite armazenar dados que persistirão mesmo após fechar o browser
 */

// salva um dado
window.localStorage.setItem('nomeVariavel', 'valorVariavel');

// le um dado
mostrarNaTela("localStorage nomeVariavel é:<b> " + window.localStorage.getItem("nomeVariavel") + "<b>");

// o total de itens
mostrarNaTela("O total de itens no localStorage é:<b> " + window.localStorage.length + "<b>");

// apaga um dado
window.localStorage.removeItem('nomeVariavel');

// agora se tentar ler retornará 'null'
mostrarNaTela("localStorage nomeVariavel é:<b> " + window.localStorage.getItem("nomeVariavel") + "<b>");



/*	SESSION STORAGE
 *  permite armazenar dados que não persistirão após fechar o browser
 */

// salva um dado
window.sessionStorage.setItem('nomeVariavel', 'valorVariavel');

// le um dado
mostrarNaTela("sessionStorage nomeVariavel é:<b> " + window.sessionStorage.getItem("nomeVariavel") + "<b>");

// apaga um dado
window.sessionStorage.removeItem('nomeVariavel');

// agora se tentar ler retornará 'null'
mostrarNaTela("sessionStorage nomeVariavel é:<b> " + window.sessionStorage.getItem("nomeVariavel") + "<b>");

// limpa todos os dados da session
window.sessionStorage.clear();





/*
 * 	MÉTODOS
 */

// alert()

document.getElementById("mostrarAlerta").onclick = function(){
	window.alert("mensagem alerta");
}

// confirm()
document.getElementById("mostrarConfirm").onclick = function(){
	var aceitaTermos = window.confirm("Aceita os Termos?");

	if(aceitaTermos){
		mostrarNaTela("Termos aceitos!");
	}
	else{
		mostrarNaTela("Termos não aceitos!");
	}
}

// prompt()
document.getElementById("mostrarPrompt").onclick = function(){
	var nomeUser = prompt("Digite seu nome", "Nome aqui");
	mostrarNaTela("O nome do usuário é: " + nomeUser);
}


// btoa() and atob()
document.getElementById("codificarTexto").onclick = function(){
	var str = "Sistema de Informação";
	var enc = window.btoa(str);
	mostrarNaTela("A string codificada é: " + enc);
	var dec = window.atob(enc);
	mostrarNaTela("A string decodificada é: " + dec);
}

// print()
document.getElementById("imprimir").onclick = function(){
	window.print();
}



// manipular janelas
var myWindow;
document.getElementById("abreJanela").onclick = function(){
	// open (abere uma janela)
	if(myWindow == null){
		myWindow = window.open("../../src/iframe-1.html", "NomeDaJanela", "width=500, height=400, top=100, left=300"); 

		// blur (tira o foco da janela)
		myWindow.blur();

		mostrarNaTela("O nome da janela aberta é: <b>" + myWindow.name + "</b>")

		// OPENER (retorna a janela que abriu a janela corrente)
		myWindow.opener.document.body.style.background = "#e3e3e4";

		// executa antes de fechar janela
		myWindow.onbeforeunload = function(){
	        myWindow.opener.document.body.style.background = "#ffffff";
	    };
	}
}

document.getElementById("focaJanela").onclick = function(){
	// focus (coloca o foco na janela)
	if(myWindow && !window.closed){
		myWindow.focus();
	}
}

document.getElementById("fechaJanela").onclick = function(){
	// close (fecha a janela)
	if(myWindow && !window.closed){
		myWindow.close();
	}
}

document.getElementById("moveJanelaTo").onclick = function(){
	if(myWindow && !window.closed){
		myWindow.moveTo(100, 100);
	}
}

document.getElementById("moveJanelaBy").onclick = function(){
	if(myWindow && !window.closed){
		myWindow.moveBy(100, 100);
	}
}

document.getElementById("resizeJanelaTo").onclick = function(){
	if(myWindow && !window.closed){
		myWindow.resizeTo(600, 200);
	}
}

document.getElementById("resizeJanelaBy").onclick = function(){
	if(myWindow && !window.closed){
		myWindow.resizeBy(200, 100);
	}
}

document.getElementById("checarJanela").onclick = function() {
    if(!myWindow){
        alert("A janela não foi aberta");
    }else{
        if(myWindow.closed){ 
            alert("A janela foi fechada");
        }else{
            alert("A janela está aberta");
        }
    }
}




/*
 *	TEMPORIZADORES
 */

// intervalo (executa repedidamente)
var intervalo = setInterval(function(){
	mostrarNaTela("Executado a cada intervalo de 3 segundos");
}, 3000);

// período (executa uma vez só)
var periodo = setTimeout(function(){
	mostrarNaTela("Executo após um período de 3 segundos");
}, 3000);


setTimeout(function(){
	// removendo o intervalo
	clearInterval(intervalo);

	// removendo o periodo
	clearTimeout(periodo);
}, 9000);


// COMPUTED STYLE
var tituloPrincipal = document.getElementById('titulo-principal');
var computedStyle = getComputedStyle(tituloPrincipal);
mostrarNaTela(computedStyle);

// pegando o valor de uma propriedade css
mostrarNaTela("A font-size é: " + computedStyle.getPropertyValue('font-size'));
mostrarNaTela("A font-size é: " + computedStyle.fontSize);


// PEGAR TEXTO SELECIONADO
document.getElementById("pegaTextoSelecionado").onclick = function(){
	var selObj = window.getSelection(); 
	var selectedText = selObj.toString();
	mostrarNaTela("O texto selecionado é: <b>" + selectedText + "</b>");
}



// MATCHMEDIA
// retorna o objeto mediaQueryList

var mediaQuery = window.matchMedia("(max-width: 700px)");
mostrarNaTela(mediaQuery.matches);
mostrarNaTela(mediaQuery.media);

function listenerMedia(mediaQuery){
	if(mediaQuery.matches){
		mostrarNaTela("Atende as condiçoes da media query");
	}
	else{
		mostrarNaTela("Não atende as condiçoes da media query");
	}
}
listenerMedia(mediaQuery);
mediaQuery.addListener(listenerMedia);



// ANIMATION FRAME
var globalID;

function repeatOften(){

	var element = document.getElementById("animateTest");
	var content = element.textContent;

	element.innerHTML = content + "! ";
  
	globalID = window.requestAnimationFrame(repeatOften);
}

document.getElementById("repeatOften").onclick = repeatOften;

document.getElementById("stopRepeatOften").onclick = function(){
	cancelAnimationFrame(globalID);
}


// SCROLLING
document.getElementById("scrollarBy").onclick = function(){
	window.scrollBy(0, 25);
}

document.getElementById("scrollarTo").onclick = function(){
	window.scrollTo(0, 200);
}



// stop()
// interrompe o carregamento da página
//window.stop();



})();