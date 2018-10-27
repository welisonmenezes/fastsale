(function(){

// CRIAÇÃO

//literal
var myArr = [1,2,3,4,5];
mostrarNaTela("O item 2 de myArr é: " +  myArr[1]);

// construtor
var myArr2 = new Array(1,2,3,4,5);
mostrarNaTela("O item 2 de myArr2 é: " +  myArr2[1]);

// editando
myArr[1] = "String teste";
mostrarNaTela("O item 2 de myArr é: " +  myArr[1]);

// construtor
mostrarNaTela("O construtor do myArr é: " + myArr.constructor.name);
mostrarNaTela("O construtor do myArr2 é: " + myArr2.constructor.name);

// tamanho (retorna o tamanho do array)
mostrarNaTela("O tamanho do myArr é: " + myArr.length);
mostrarNaTela("O tamanho do myArr2 é: " + myArr2.length);

// add metodo no prototype
Array.prototype.getSize = function(){
	return "O tamanho deste array é: " + this.length;
}
mostrarNaTela(myArr.getSize());
mostrarNaTela(myArr2.getSize());



/*
*	MÉTODOS
*/

// concat (concatena um array ao outro)
var concatArr1 = ["maçã", "banana", "limão"];
var concatArr2 = ["pêra", "uva", "manga", "laranja"];
var concatAll = concatArr1.concat(concatArr2);
mostrarNaTela(concatAll);


// copyWithin [es6] (define o target, start e o end para copira e inserir no proprio array) 
var copyArr = [0,1,2,3,4,5,6];
mostrarNaTela("Original: " + copyArr);
copyArr.copyWithin(0, 3, 7);
mostrarNaTela("copiado whitin: " + copyArr);


// entries [es6] (retoran um array iterator com chave e valor)
var frutas = ["uva", "limão", "banana", "caqui"];
var entr = frutas.entries();
mostrarNaTela(entr.next().value);
mostrarNaTela(entr.next().value);


// every (verifica se todos os itens do array são compatíveis [true se sim])
var everyArr = [19,32, 67, 49, 22, 15, 28];
var checkIdade = function(valor, index, array){
	return valor >= 18;
}
mostrarNaTela("Todos são maiores de idade? " + everyArr.every(checkIdade));

// some (verifica se há algum item do array que é compatível [true se sim])
mostrarNaTela("Há algum maior de idade? " + everyArr.some(checkIdade));


// fill [es6] (adiciona o valor nas posições indicadas);
var fillArr = [0,1,2,3,4,5,6];
mostrarNaTela("O array não preenchido é: " + fillArr);
fillArr.fill("X", 2, 4);
mostrarNaTela("O array preenchido é: " + fillArr);


// filter (cria um novo array com itens compatíveis)
var filterArr = [13, 19, 32, 15, 43, 89];
var filterCheck = function(valor, index, array){
	return valor >= 18;
}
var newfilterArr = filterArr.filter(filterCheck);
mostrarNaTela("O novo array filtrado é: " + newfilterArr);


// find [es6] (retorna o valor do primeiro item compatível)
var findArr = [9, "zé", 54, "Welison", 54, false, "Welison", 4];
var findCheck = function(valor, index, array){
	return valor === "Welison";
}
mostrarNaTela("O primeiro item encontrado foi: " + findArr.find(findCheck));

// findIndex [es6] (retorna o index do primeiro item compatível)
mostrarNaTela("O index do primeiro item encontrado é: " + findArr.findIndex(findCheck));


// forEach [es6] (executa um método para cada item do array)
var foreachArr = [7,11,2,75,12,5,87,21,6];
var funcEach = function(valor, index, array){
	mostrarNaTela(this.label + index + " é: " + valor);
}
var foreachObj = {
	label: "O varlor do item "
}
foreachArr.forEach(funcEach, foreachObj);


// from [es6] (cria um array a partir de um objeto)
var fromFunc = function(valor, index){
	return valor.toUpperCase();
};
var fromArr = Array.from("abcdefghijlmnopqrstuvxz", fromFunc);
mostrarNaTela("O array from é: " + fromArr);


// includes [es7] (verifica se o array tem determinado valor)
// pode-se indicar o start como 2º parametro
var includesArr = [1, "Carro", false, 45, "txt"];
mostrarNaTela("O array includesArr temo o item 'Carro'? " + includesArr.includes("Carro"));


// indexOf (retorna o index do primeiro item compatível)
// pode-se indicar o start como 2º parametro
var indexOfArr = ["Alemanha", "Inglaterra", "Brasil", "França", "Brasil", "Canada", "Rússia"];
mostrarNaTela("O index do item 'Brasil' é: " + indexOfArr.indexOf("Brasil"));

// lastIndexOf (retorna o index do último item compatível)
mostrarNaTela("O último index do item 'Brasil' é: " + indexOfArr.lastIndexOf("Brasil"));

// isArray (verifica se é um array)
mostrarNaTela("O indexOfArr é um array? " + Array.isArray(indexOfArr));
mostrarNaTela("O texto é um array? " + Array.isArray("texto"));


// join (retorna os intens do array em uma string)
var arrJoin = ["Flamengo", "Vasco", "Fluminense", "Botafogo"];
console.log(arrJoin.join());
mostrarNaTela(arrJoin.join());


// keys [es6] (retorna um array iterator com as chaves do array)
var keysArr = [2, 5, 21, 7, 9, 34, 30];
var chaves = keysArr.keys();
mostrarNaTela("Primeira chave do array 'keysArr' é: " + chaves.next().value);
mostrarNaTela("Segundo  chave do array 'keysArr' é: "  + chaves.next().value);


// map (cria um novo array aplicando a função sobre os itens do array original)
var mapArr = ["Rio de Janeiro", "São Paulo", "Belo Horizonte", "Porto Alegre"];
var mapFunc = function(value, index, array){
	return "Cidade " + (index+1) + ": " + value;
}
var newMapArr = mapArr.map(mapFunc);
mostrarNaTela(mapArr);
mostrarNaTela(newMapArr);


// pop (remove o último item do array e retora esse item)
var popArr = ["José", "Luiz", "Marcelo", "Jair", "Paulo"];
var lastPop = popArr.pop();
mostrarNaTela("O último item de 'popArr' era: " + lastPop);
mostrarNaTela("O array 'popArr' ficou: " + popArr);

// shift (remove o primeiro item do array e retorna esse item)
var firstShif = popArr.shift();
mostrarNaTela("O primeiro item de 'popArr' era: " + firstShif);
mostrarNaTela("O array 'popArr' ficou: " + popArr);


// push (adiciona um novo item no final do array e retorna o novo tamanho)
var pushArr = ["Fusca", "Kombi", "Passati"];
var newPushL = pushArr.push("Gol");
mostrarNaTela("O novo tamanho do array pushArr é: " + newPushL);
mostrarNaTela("O novo array pushArr é: " + pushArr);

// unshift (add um novo item no início do array e retorna o novo tamanho)
var newUnshiftL = pushArr.unshift("Escort");
mostrarNaTela("O novo tamanho do array pushArr é: " + newUnshiftL);
mostrarNaTela("O novo array pushArr é: " + pushArr);


// reduce (reduz o array em um único valor acumlando no primeiro parametro)
var reduceArr = [1,2,3,4,5];
var reduceFun = function(total, value, index, array){
	return total+"-"+value
}
var reduceVal = reduceArr.reduce(reduceFun);
mostrarNaTela(reduceVal);

// reduceRight (o mesmo que reduce, só que de trás pra frente)
var reduceRVal = reduceArr.reduceRight(reduceFun);
mostrarNaTela(reduceRVal);


// reverse (inverte a ordem do array)
var reverseArr = ["um", "dois", "três", "quatro", "cinco"];
mostrarNaTela("o array invertido fica: " + reverseArr.reverse());

// slice (seleciona os itens de um array apartir de um start até um end)
var sliceArr = ["beterraba", "pizza", "chocolate", "hamburger", "jiló", "xuxu"];
var goodFood = sliceArr.slice(1, 4);
mostrarNaTela(goodFood);


// sort (ordena um array)
var arrNum = [5, 2, 0, 1, 6, 40, 3];
var sortFun = function(a, b){
	if(a < b){
		return -1;
	}else if(a > b){
		return 1;
	}else{
		return 0;
	}
}
// com números causa incosistencia
mostrarNaTela("Ordenado fica: " + arrNum.sort());
// pode-se usar um método para auxiliar
mostrarNaTela("Ordenado corretamente fica: " + arrNum.sort(sortFun));


// splice (add itens no local determinado e se necessário remove a quantidade informada)
var spliceArr = ["cachorro", "gato", "pássaro", "peixe"];
spliceArr.splice(2, 1, "vaca", "lagarto");
mostrarNaTela(spliceArr);


// toString (convete o array em um string)
var stringArr = ["array", "objeto", "função", "variável"];
console.log(stringArr.toString());
mostrarNaTela(stringArr.toString());


// valueOf (retorna o próprio array [faz referencia ao mesmo])
var originalArr = ["celuar", "computador", "ipad", "televisão"];
var arrCopiado = originalArr;
var outroArr = originalArr.valueOf();
var arrClonado = originalArr.slice();

originalArr.push("videogame");

mostrarNaTela("originalArr: " + originalArr);

// assim apenas repassa a referencia do array original
mostrarNaTela("arrCopiado: " + arrCopiado);
mostrarNaTela("outroArr: " + outroArr);

// note que assim se faz um cópia independente do array
mostrarNaTela("arrClonado: " + arrClonado);

})();