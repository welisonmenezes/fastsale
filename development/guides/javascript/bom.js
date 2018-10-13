console.log("\n\n\n-------------------------------------------------\n");
console.log("Início arquivo 'bom.js'\n");
console.log("-------------------------------------------------\n");



// OBJECT 'window'

/*
 *	o objeto window é o objeto pai de todos
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

// SELF
// retorna a janela corrente
console.log("A janela corrente é: ", window.self.document.title);

// TOP
// retorna a janela pai de todos
console.log("A janela pai de todos é: ", window.top.document.title);


// NAME
// retorna o nome da janela
console.log("O nome da janela é: " + frames[0].name);



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
console.log("A posição X da janela é: " + window.scrollX);

console.log("A posição Y da janela é: " + window.pageYOffset);
console.log("A posição Y da janela é: " + window.scrollY);

// to IE 9 or earlier use: scrollLeft and scrollTop



/*	LOCAL STORAGE
 *  permite armazenar dados que persistirão mesmo após fechar o browser
 */

// salva um dado
window.localStorage.setItem('nomeVariavel', 'valorVariavel');

// le um dado
console.log(window.localStorage.getItem("nomeVariavel"));

// o total de itens
console.log("O total de itens no localStorage é: " + window.localStorage.length);

// apaga um dado
window.localStorage.removeItem('nomeVariavel');

// agora se tentar ler retornará 'null'
console.log(window.localStorage.getItem("nomeVariavel"));


/*	SESSION STORAGE
 *  permite armazenar dados que não persistirão após fechar o browser
 */

// salva um dado
window.sessionStorage.setItem('nomeVariavel', 'valorVariavel');

// le um dado
console.log(window.sessionStorage.getItem("nomeVariavel"));

// apaga um dado
window.sessionStorage.removeItem('nomeVariavel');

// agora se tentar ler retornará 'null'
console.log(window.sessionStorage.getItem("nomeVariavel"));

// limpa todos os dados da session
window.sessionStorage.clear();



/*	LOCATION
 *  contém informações sobre a url atual
 */
console.log("O objeto location: ", window.location);

// propriedades
console.log("A hash da url é: " + window.location.hash);
console.log("O host da url é: " + window.location.host);
console.log("O hostname da url é: " + window.location.hostname);
console.log("A url completa é: " + window.location.href);
console.log("A origin da url é: " + window.location.origin);
console.log("O pathname da url é: " + window.location.pathname);
console.log("A porta da url é: " + window.location.port);
console.log("O protocolo da url é: " + window.location.protocol);

// metodos
// redireciona a janela para outra url
//window.location.assign("https://www.w3schools.com");

// redireciona a janela para outra url, porém não insere no history do navegador
//window.location.replace("https://www.w3schools.com");


// obs: atribuir uma nova url para o atributo href também faz um redirecionamento
// window.location.href = "https://www.w3schools.com";

// recarrega a janela do navegador (cuidado com loops de reload)
// passando o parâmetro 'true' desconsidera o cache do navegador
//window.location.reload();



/*	 NAVIGATOR
 *
 */

console.log("O objeto navigator: ", window.navigator);
console.log("O nome do appCodeName é: " + navigator.appCodeName);
console.log("O nome do appName é: " + navigator.appName);
console.log("O nome do appVersion é: " + navigator.appVersion);
console.log("Os cookies estão habilitados? " + navigator.cookieEnabled);
console.log("O geolocation: ", navigator.geolocation);
console.log("O idioma do browser é: " + navigator.language);
console.log("Está online? " + navigator.onLine);
console.log("A plataforma do browser é: " + navigator.platform);
console.log("Browser Engine: " + navigator.product);
console.log("O user agent header enviado pelo navegador é: " + navigator.userAgent);



// geolocalization
navigator.geolocation.getCurrentPosition(showPosition, showError);
var watchPositionID = navigator.geolocation.watchPosition(showPosition, showError);

function showPosition(position) {
	console.log("latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

navigator.geolocation.clearWatch(watchPositionID);



/*	 SCREEN
 *
 */

console.log("A altura disponível para a janela é: " + window.screen.availHeight);
console.log("A largura disponível para a janela é: " + window.screen.availWidth);
console.log("A altura total da janela é: " + window.screen.height);
console.log("A largura total da janela é: " + window.screen.width);

console.log("A profundidade de cores da janela é: " + window.screen.colorDepth);
console.log("A profundidade de cores da janela é: " + window.screen.pixelDepth);

// coordenadas do screen
console.log("A coordenada X da janela é: " + window.screenLeft);
console.log("A coordenada X da janela é: " + window.screenX); // firefox

console.log("A coordenada Y da janela é: " + window.screenTop);
console.log("A coordenada Y da janela é: " + window.screenY); // firefox