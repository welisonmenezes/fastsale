(function(){

// CRIAÇÃO

//literal
var myStr = "String Teste";
mostrarNaTela("A string literal é: " +  myStr);

// construtor
var myStr2 = new String("String Teste 2");
mostrarNaTela("A string com construtor é: " +  myStr);

// editando
myStr = "String Editada!!!";
mostrarNaTela("A string editada ficou: " +  myStr);

// construtor
mostrarNaTela("O construtor do myStr é: " + myStr.constructor.name);
mostrarNaTela("O construtor do myStr2 é: " + myStr2.constructor.name);

// tamanho (retorna o tamanho do array)
mostrarNaTela("O tamanho de myStr é: " + myStr.length);
mostrarNaTela("O tamanho de myStr2 é: " + myStr2.length);

// add metodo no prototype
String.prototype.getSize = function(){
	return "O tamanho desta string é: " + this.length;
}
mostrarNaTela(myStr.getSize());
mostrarNaTela(myStr2.getSize());



/*
*	MÉTODOS
*/

// charAt (retorna o caracter na posição indicada [começa em zero])
var strCharAt = "JavaScript";
mostrarNaTela("O caracter na posição 4 é: " + strCharAt.charAt(4));

// charCodeAt (retorna o código unicode do caracter da posição indicada)
mostrarNaTela("O charcode na posição 4 é: " + strCharAt.charCodeAt(4));


// concat (concatena um string a outra(s))
var concat1 = "Aprenda ";
var concat2 = "Padrões ";
var concat3 = "JavaScript";
var concatAll = concat1.concat(concat2, concat3);
mostrarNaTela(concatAll);


// endsWith [es6] (verifica se a string termina com determinado padrão)
var strEnds = "Sistemas de Informação";
mostrarNaTela("A string 'strEnds' termina com 'ção'? " + strEnds.endsWith("ção"));

// startsWith [es6] (verifica se a string começa com determiado padrão)
mostrarNaTela("A string 'strEnds' começa com 'Sis'? " + strEnds.startsWith("Sis"));


// fromCharCode (converte o código unicode em caracter)
var res = String.fromCharCode(72, 69, 76, 76, 79);
mostrarNaTela("O texto fromCharCode é: " + res);


// includes [es6] (verifica se string é compatível no texto)
var strIncludes = "Desenvolvedor Frontend do Brasil";
mostrarNaTela("A strIncludes tem o trecho 'Front' ?" + strIncludes.includes("Front"));


// indexOf (retorna a posição da 1ª correspendência)
var strIndexOf = "Ordem e Progresso";
mostrarNaTela("A posição da 1ª correspondênica é: " + strIndexOf.indexOf("e"));

// lastIndexOf (retorna a posição da última correspondência)
mostrarNaTela("A posição da última correspondênica é: " + strIndexOf.lastIndexOf("e"));


// localeCompare (verifica qual string vem primeiro)
// retorna -1 para sim, 0 pra igual e 1 pra não
var lc1 = "xaxyz";
var lc2 = "xbxyz";
var lc = lc1.localeCompare(lc2);
mostrarNaTela("lc1 vem antes de lc2? " + lc);


// match (verifica se há correspondência apartir de expressão regular)
// retorna um array com as combinações ou null se não houver
var strMatch = "Aplicação WEB, Aplicação Desktop";
var matchMatch = strMatch.match(/ação/g);
console.log(matchMatch);
mostrarNaTela("O match é: " + matchMatch);


// repeat [es6] (repete determinada string a quantidade de vezes especificada)
var strRepeat = "Mas o que é isso?!! ";
mostrarNaTela(strRepeat.repeat(3));


// replace (troca a string compatível por outra especificada)
var strReplace = "Java é a melhor linguagem de programação";
var strReplaced = strReplace.replace("Java", "JavaScript");
mostrarNaTela(strReplaced);
// com expressão regular
var strRRegEx = strReplace.replace(/[a-z]/g, "x");
mostrarNaTela(strRRegEx);


// search (verifica se há correspondênica apartir de str ou regex)
// retorna a 1ª posição da ocorrência
var strSearch = "HTML, CSS, JavaScript, PHP, MySQL, Java";
mostrarNaTela("A posição da 1ª ocorrência é: " + strSearch.search("Java"));


// slice (extrai parte de uma string e a retorna)
var strSlice = "update sem where";
mostrarNaTela(strSlice.slice(6, strSlice.length));


// split (convert a string em um array)
// parametro um é a string separadora
// parametro dois é o tamanho máximo do array retornado
var strSplit = "Feliz Natal Brasil";
var strSplited = strSplit.split(" ", 2);
console.log(strSplited);
for(var i = 0; i < strSplited.length; i++){
	mostrarNaTela(strSplited[i]);
}


// substr (retorna a substring a partir da posição e tamanho especificados)
var strSubstr = "star trek é melhor que star wars";
var subStr = strSubstr.substr(12, 6);
mostrarNaTela(subStr);


// substring (retorana a substring a partir da posição inicial e final especificados)
var subString = strSubstr.substring(12, 18);
mostrarNaTela(subString);


// toLocaleLowerCase, toLowerCase, toLocaleUpperCase, toUpperCase
// torna o texto maiúsculo ou minúsculo
var lowerTxt = "texto minúsculo";
var upperTxt = "TEXTO MAIÚSCULO";

mostrarNaTela("O toLocaleLowerCase é: " + upperTxt.toLocaleLowerCase());
mostrarNaTela("O toLowerCase é: " + upperTxt.toLowerCase());

mostrarNaTela("O toLocaleUpperCase é: " + lowerTxt.toLocaleUpperCase());
mostrarNaTela("O toUpperCase é: " + lowerTxt.toUpperCase());


// toString (retorna a própria string)
var strToString = "Meu texto de teste";
mostrarNaTela(strToString.toString());


// trim (remove os espaços em branco das extremidades de string)
var strTrim = "     Texto a ser limpado     ";
mostrarNaTela("(Texto sujo: " + strTrim + " )");
mostrarNaTela(strTrim.trim());


// valueOf (retorna a própria string)
var strValueOf = "Valor de...";
mostrarNaTela(strValueOf.valueOf());


})();