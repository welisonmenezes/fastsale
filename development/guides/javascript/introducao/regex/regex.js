(function(){

/*
*	CRIAÇÃO
*/

// literal
var patt = /javascript/i;

// construtor
var patt2 = new RegExp('javascript', 'i');




/*
* 	MODIFICADORES
*/

// i (se é case sensitive)
var pattI = /javascript/i;
var textoI = "JAVASCRIPT";
mostrarNaTela(textoI.match(pattI));

// g (verifica todas as ocorrências)
var pattM = /^javascript/m;
var textoM = "JAVASCRIPT \njavascript javascript";
mostrarNaTela(textoM.match(pattM));

// m (verifica multiplas ocorrênica)
var pattG = /javascript/g;
var textoG = "JAVASCRIPT javascript javascript";
mostrarNaTela(textoG.match(pattG));



/*
*	COLCHETES
*/

var textoC = "A cada segundo um framework Javascript é criado.";

// busca cada ocorrência de cada item
mostrarNaTela(textoC.match(/[fram]/g));

// busca cada ocorrência que não pertenca a um dos itens
mostrarNaTela(textoC.match(/[^fram]/g));

// busca as ocorrências entre os itens
mostrarNaTela(textoC.match(/[a-c]/g));

// busca as ocorrênicas que não estão entre os itens
mostrarNaTela(textoC.match(/[^a-g]/g));

// busca uma ocorrência ou outra
mostrarNaTela(textoC.match(/[a|i]/g));



/*
* Metacharacters
*/

var textoM = "Ria Rua Tia \nTua 100 	Via Tiago";

// . (qualquer caracter que não seja nova linha)
mostrarNaTela(textoM.match(/R.a/g));

// \w (qualquer letra ou número [ignora epaços e tabs])
mostrarNaTela(textoM.match(/\w/g));

// \W (não letras [acha espaços e tabs])
mostrarNaTela(textoM.match(/\W/g));

// \d (qualquer dígito [números])
mostrarNaTela(textoM.match(/\d/g));

// \D (não dígitos [não números])
mostrarNaTela(textoM.match(/\D/g));

// \s (qualquer espaço em branco)
mostrarNaTela(textoM.match(/\s/g));

// \S (não espaço em branco)
mostrarNaTela(textoM.match(/\S/g));

// \b (que começa ou termina com o trecho)
mostrarNaTela(textoM.match(/\bTia\b/g));

// \B (tem o trecho mas não começa ou termina com o mesmo)
mostrarNaTela(textoM.match(/\Bago/g));

// \n (busca uma nova linha [\n])
mostrarNaTela(textoM.search(/\n/g));

// \t (busca um espaçamento com tab)
mostrarNaTela(textoM.search(/\t/g));



/*
*	QUANTIFICADORES
*/

var textoQ = "hahaha a bola quadrada dodo Quico kkkkk!!!";

// n+ (que contém pelo menos uma ocorrência)
mostrarNaTela(textoQ.match(/k+/g));

// n* (que contém zero ou mais ocorrências)
mostrarNaTela(textoQ.match(/k*/g));

// n? (que contém zero ou um ocorrência)
mostrarNaTela(textoQ.match(/k?/g));

// n{x} (que contém x ocorrências)
mostrarNaTela(textoQ.match(/k{5}/g));

// n{x,y} (que contém entre x e y ocorrências)
mostrarNaTela(textoQ.match(/k{3,4}/g));

// n{x} (que contém pelo menos x ocorrências)
mostrarNaTela(textoQ.match(/k{3,}/g));

// $ (que contém ocorrênica no final da string)
mostrarNaTela(textoQ.match(/!{3}$/g));

// ^ (que contém ocorrênica no início da string)
mostrarNaTela(textoQ.match(/^(ha){3}/g));

// ?=n (que contém ocorrênica seguida pelo padrão especificado)
mostrarNaTela(textoQ.match(/a(?= (do){2})/g));

// ?!n (que não contém ocorrênica seguida pelo padrão especificado)
mostrarNaTela(textoQ.match(/a(?! (do){2})/g));


/*
*	PROPRIEDADES
*/

var textoP = "Padrões Javascript";
var pattP = /[a-z]/img;

// constructor
mostrarNaTela("O construtor é: " + pattP.constructor.name);
 
// global
mostrarNaTela("É global? " + pattP.global);

// ignoreCase
mostrarNaTela("Ignora Case? " + pattP.ignoreCase);

// lastIndex (mostra a posição da ocorrência atual)
pattP.test(textoP);
mostrarNaTela(pattP.lastIndex);

// multiline
mostrarNaTela("É multiline? " + pattP.multiline);

// source (retorna o padrão como string)
mostrarNaTela("O source é: " + pattP.source);



/*
*	MÉTODOS
*/

// exec (teste o padrão numa string e retorna a primeira ocorrência)
var sExec = pattP.exec(textoP);
mostrarNaTela("A primeira ocorrência é: " + sExec);

// test (testa o padrão numa string e retorna true ou false)
mostrarNaTela("Passa no teste? " + pattP.test(textoP));

// toString (retorna o padrão completo como string)
mostrarNaTela("O padrão é: " + pattP.toString());



})();