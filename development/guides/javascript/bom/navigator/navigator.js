(function(){

/*	 NAVIGATOR
 *
 */

mostrarNaTela("O objeto navigator:<b> ", window.navigator + "</b>");
mostrarNaTela("O nome do appCodeName é:<b> " + navigator.appCodeName + "</b>");
mostrarNaTela("O nome do appName é:<b> " + navigator.appName + "</b>");
mostrarNaTela("O nome do appVersion é:<b> " + navigator.appVersion + "</b>");
mostrarNaTela("Os cookies estão habilitados?<b> " + navigator.cookieEnabled + "</b>");
mostrarNaTela("O geolocation:<b> ", navigator.geolocation + "</b>");
mostrarNaTela("O idioma do browser é:<b> " + navigator.language + "</b>");
mostrarNaTela("Está online?<b> " + navigator.onLine + "</b>");
mostrarNaTela("A plataforma do browser é:<b> " + navigator.platform + "</b>");
mostrarNaTela("Browser Engine:<b> " + navigator.product + "</b>");
mostrarNaTela("O user agent header enviado pelo navegador é:<b> " + navigator.userAgent + "</b>");


// geolocalization
navigator.geolocation.getCurrentPosition(showPosition, showError);
var watchPositionID = navigator.geolocation.watchPosition(showPosition, showError);

function showPosition(position) {
	mostrarNaTela("latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mostrarNaTela("O usuário negou o acesso à Geolocalização.");
            break;
        case error.POSITION_UNAVAILABLE:
            mostrarNaTela("A informação do localização está indisponível.");
            break;
        case error.TIMEOUT:
            mostrarNaTela("O tempo para a requisição expirou.");
            break;
        case error.UNKNOWN_ERROR:
            mostrarNaTela("Erro desconhecido.");
            break;
    }
}

navigator.geolocation.clearWatch(watchPositionID);

})();