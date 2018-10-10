console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'bom.js'\n");
console.log("-------------------------------------------------\n");



// OBJECT 'window'

/*
 *	o obejeto window é o objeto pai de todos
 */
console.log(window);



// OBJECT DOCUMENT
// retorna o object document (responsável pelo dom)
console.log(window.document);



/*	OPEN
 *		abre uma nova janela
 */

// abre em nova aba
//var myWindow = window.open("https://www.w3schools.com", "_blank");

// abre na mesma janela
//var myWindow = window.open("https://www.w3schools.com", "_self");

// abre em full screen
//var myWindow = window.open("http://localhost:8080/welison/uniplac/fast-sale/development/guides/", "_blank");



/*	OPENER
 *  	objeto que faz referência a janela onde foi executado o método
 *      que abriu a nova janela
 */
//myWindow.opener.document.body.style.background = "#e3e3e4";




/*	CONSOLE
 * 		objeto que dá acesso ao browser debug console
 */

// metodo 'log'
window.console.log('teste console log');

window.console.log('teste console log com objeto', {name: 'teste'});

console.log('chamando sem usar window antes');

console.log('teste com array', [1, 2, 'facebook', 'twitter', 300]);

// método 'info' (bem similar ao log)

console.info('teste console info');

// método table (exibe dados com formatração amigável)

console.table(['facebook', 'instagram', 'twitter']);
console.table({name: 'welison', idade: 30, qualidade: 'lindo'});

// método 'warn'

console.warn('teste console warn');

// método 'error'
console.error('teste console error');




/*  FRAME ELEMENT
 *  descobre se a janela atual
 *  é um frame ou não
 */
var frame = window.frameElement;

if(frame){
	document.getElementById('titulo-principal').innerHTML = "Sou um frame";
}else{
	document.getElementById('titulo-principal').innerHTML = "Não sou um frame";
}



/* FRAMES
 * retornas os iframes do janela
 */

var frames = window.frames;
console.log("Quantidade de frames no janela: " + frames.length);

// verifica se existe o segundo iframe
if(frames[1]){

	// após 1 minuto muda a url do segundo iframe
	setTimeout(function() {
		frames[1].location  = 'iframe-2.html';
	}, 1000);
}


// length (retorna a quantidade de iframes na janela)
console.log("A quantidade de iframes na janele é: " + window.length);


// PARENT
// retorna o pai da janela corrente (se a janela atual for a master, retornará ela mesma)

console.log("O pai desta janela é: ", window.parent.document.title);



// HISTSORY
// refere-se ao histório de navegação da janela corrente

console.log(window.history);
console.log("Quantidade de urls visitadas: " + window.history.length);


// método 'go' (avança ou volta conforme o parâmetro)

// avança um
// window.history.go(1);

// volta um
// window.history.go(-1);

// método 'back' (retorna uma navagação atrás, mesmo que go(-1))
//window.history.back();

// método 'forward' (segue uma navegação a frente, mesmo que go(1))
// window.history.forward();



// método 'pushState' (atualzia a url do navegador sem recarregar a página e altera o histórico)

// window.history.pushState({}, "nome/título página", "fragmento-url-pagina");


// métdo 'replaceState' (atualiza a url do navegador sem recarregar a página e não altera o histórico)
//window.history.replaceState({atributo:'valor'}, "nome/título página", "fragmento-url-pagina");


// object 'state' (ler o estado atual do histórico)
console.log("O estado atual do histórico é: ", window.history.state);


// innerWidth e innerHeight (retornam a largura e a altura da janela respectivamente)

console.log("A largura da janela é: " + window.innerWidth);
console.log("A altura da janela é: " + window.innerHeight);


// outerWidth e outerHeight (retornam a largura e a altura da janela respectivamente, incluindo toolbars e scrollbars)

console.log("A largura geral da janela é: " + window.outerWidth);
console.log("A altura geral da janela é: " + window.outerHeight);


// pageXOffset e pageYOffset (retorna a posição do scroll da janela horizonta e verticalmente respectivamente)

console.log("A posição X da janela é: " + window.pageXOffset);
console.log("A posição Y da janela é: " + window.pageYOffset);



/*	 SCREEN OBJECT
 *
 */

