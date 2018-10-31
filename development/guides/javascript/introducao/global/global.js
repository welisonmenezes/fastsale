(function(){

/*
*	PROPRIEDADES
*/

mostrarNaTela("O valor númerico que reperesenta o Infinito é: " + Infinity);

mostrarNaTela("O valor que reperesenta um não número é: " + NaN);

mostrarNaTela("O valor que reperesenta um valor indefinido é: " + undefined);



/*
*	MÉTODOS
*/


var urlTeste = "https://w3schools.com/my test.asp?name=ståle&car=saab";
mostrarNaTela("A url normal é: " + urlTeste);

// encodeURI e decodeURI (encoda e decodifica uma url respectivamente)
var urlEnc = encodeURI(urlTeste);
mostrarNaTela("A url codificada é: " + urlEnc);
var urlDec = decodeURI(urlEnc);
mostrarNaTela("A url decodificada é: " + urlDec);

// encodeURIComponent e decodeURIComponent (encoda e decodifica toda a url respectivamente)
var urlEncC = encodeURIComponent(urlTeste);
mostrarNaTela("A url codificada totalmente é: " + urlEncC);
var urlDecC = decodeURIComponent(urlEncC);
mostrarNaTela("A url decodificada totalmente é: " + urlDecC);


// eval (executa uma string como script)
var comando = "var num1 = 1; var num2 = 5; mostrarNaTela('o valor somado é: ' + (num1 + num2));";
eval(comando);


// isFinite (verifica se um número é finito)
mostrarNaTela("O número 123 é finito? " + isFinite(123));
mostrarNaTela("O Infinity é finito? " + isFinite(Infinity));

// isNaN (verifica se x é um número válido)
mostrarNaTela("45 não é número? " + isNaN(45));
mostrarNaTela("'45' não é número? " + isNaN("45"));
mostrarNaTela("'casa' não é número? " + isNaN("casa"));


// Number (tenta converter x para número, se não conseguir retoran NaN)
mostrarNaTela("Usando Number em '11 22 33' : " + Number("11 22 33"));
mostrarNaTela("Usando Number em '11223' : " + Number("11223"));
mostrarNaTela("Usando Number em '54.4' : " + Number("54.4"));
mostrarNaTela("Usando Number em true : " + Number(true));
// new Date() retorna os milisegundos desde 1 janeiro de 1970
mostrarNaTela("Usando Number em new Date() : " + Number(new Date()));

// parseFloat (tenta retorna um número flutuante, se não conseguir retorna NaN)
mostrarNaTela("Usando parseFloat em '23': " + parseFloat('23'));
mostrarNaTela("Usando parseFloat em '60 32': " + parseFloat('60 32'));
mostrarNaTela("Usando parseFloat em '25 anos': " + parseFloat('25 anos'));
mostrarNaTela("Usando parseFloat em true: " + parseFloat(true));
mostrarNaTela("Usando parseFloat em new Date(): " + parseFloat(new Date()));

// parseInt (tenta retorna um número inteiro, se não conseguir retorna NaN)
mostrarNaTela("Usando parseInt em 2.56: " + parseInt(2.56));
mostrarNaTela("Usando parseInt em '60 32': " + parseInt('60 32'));
mostrarNaTela("Usando parseInt em '25 anos': " + parseInt('25 anos'));
mostrarNaTela("Usando parseInt em true: " + parseInt(true));
mostrarNaTela("Usando parseInt em new Date(): " + parseInt(new Date()));

// String
mostrarNaTela("Usando String em true: " + String(true));
mostrarNaTela("Usando String em 28: " + String(28));
mostrarNaTela("Usando String em new Date(): " + String(new Date()));

})();