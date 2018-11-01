(function(){

var data = new Date();
mostrarNaTela("O 'data' vale: " + data);

var data2 = new Date(0);
mostrarNaTela("O 'data2' vale: " + data2);

var data3 = new Date(2018, 10, 30, 12, 60, 60, 0);
mostrarNaTela("O 'data3' vale: " + data3);

var data4 = new Date("October 13, 2014 11:13:00");
mostrarNaTela("O 'data4' vale: " + data4);

// constructor 
mostrarNaTela("O constructor é: " + data.constructor.name);

// prototype
Date.prototype.showDate = function(){
	mostrarNaTela("A data retornada é: " + this);
};
data.showDate();



/*
*	MÉTODOS
*/

// getDate (retorna o dia do mês [1-31])
mostrarNaTela("O dia do mês é: " + data.getDate());

// getDay (retorna o dia da semana [0-6])
mostrarNaTela("O dia da semana é: " + data.getDay());

// getFullYear (retorna o ano)
mostrarNaTela("O ano atual é: " + data.getFullYear());

// getHours (retorna a hora [0-23])
mostrarNaTela("A hora atual é: " + data.getHours());

// getMilliseconds (retorna os milesegundos [0-999])
mostrarNaTela("Os milesegundos são: " + data.getMilliseconds());

// getMinutes (retorna os minutos)
mostrarNaTela("Os minutos são: " + data.getMinutes());

// getSeconds (retorna os segundos)
mostrarNaTela("Os segundos são: " + data.getSeconds());

// getMonth (retorna o mes atual [0-11])
mostrarNaTela("O mês atual é: " + data.getMonth());

// getTime (retorna a quantidade de milesegundos desde 1 janeiro de 1970)
mostrarNaTela("O total de milesegundos desde 1970 é: " + data.getTime());

// getTimezoneOffset (retorna em minutos a diferença entre o tempo local e utc time)
mostrarNaTela("A diferença entre o UTC é: " + data.getTimezoneOffset());

// getUTCDate (retorna o dia do mês de acordo com o utc)
mostrarNaTela("O dia do mês de acordo com utc é: " + data.getUTCDate());

// getUTCDay (retorna o dia da semana de acordo com o utc)
mostrarNaTela("O dia da semana de acordo com o utc é: " + data.getUTCDay());

// getUTCFullYear (retorna o ano de acordo com o utc)
mostrarNaTela("O ano de acordo com o utc é: " + data.getUTCFullYear());

// getUTCHours (retorna a hora de acorodo com o utc)
mostrarNaTela("A hora atual de acordo com o utc é: " + data.getUTCHours());

// getUTCMilliseconds (retorna os milesegundos de acordo com o utc)
mostrarNaTela("Os milesegundos de acordo com o utc é: " + data.getUTCMilliseconds());

// getUTCMinutes (retorna os minutos de acordo com o utc)
mostrarNaTela("Os minutos de acordo com o utc são: " + data.getUTCMinutes());

// getUTCMonth (retorna o mês corrente de acordo com o utc)
mostrarNaTela("O mês corrente de acordo com o utc é: " + data.getUTCMonth());

// getUTCSeconds (retorna os segundos de acordo com o utc)
mostrarNaTela("Os segundos de acordo com o utc são: " + data.getUTCSeconds());

// now (retorna os milesegundos desde 1 de janeiro de 1970)
mostrarNaTela("Os milesegundos desde 1 janeiro de 1970 são: " + Date.now());

// parse (retorna a diferença em milesegundo entre 1 jan 1970 e a data x)
mostrarNaTela("A diferença entre as datas é: " + Date.parse("March 21, 2012"));




var setDate = new Date();

// setDate (seta o dia do mes)
setDate.setDate(15);
mostrarNaTela("o dia do mês de 'setDate' é: " + setDate.getDate());

// setFullYear (seta o ano)
setDate.setFullYear(1990);
mostrarNaTela("o ano de 'setDate' é: " + setDate.getFullYear());

// setHours (seta a hora)
setDate.setHours(11);
mostrarNaTela("a hora de 'setDate' é: " + setDate.getHours());

// setMilliseconds (seta os milesegundos)
setDate.setMilliseconds(888);
mostrarNaTela("os milesegundos de 'setDate' são: " + setDate.getMilliseconds());

// setMinutes (seta os minutos)
setDate.setMinutes(12);
mostrarNaTela("os minutos de 'setDate' são: " + setDate.getMinutes());

// setMonth (seta o mês)
setDate.setMonth(0);
mostrarNaTela("O mês de 'setDate' é: " + setDate.getMonth());

// setSeconds (seta os segundos)
setDate.setSeconds(35);
mostrarNaTela("os segundos de 'setDate' são: " + setDate.getSeconds());

// setTime (seta os milesegundos desde 1 jan 1970)
setDate.setTime(777777);
mostrarNaTela("os milesegundos desde 1 jan de 1970 de 'setDate' são: " + setDate.getTime());

// setDate (seta o dia do mes [utc])
setDate.setUTCDate(15);
mostrarNaTela("o dia utc do mês de 'setDate' é: " + setDate.getUTCDate());

// setFullYear (seta o ano [utc])
setDate.setUTCFullYear(1990);
mostrarNaTela("o ano utc de 'setDate' é: " + setDate.getUTCFullYear());

// setHours (seta a hora [utc])
setDate.setUTCHours(11);
mostrarNaTela("a hora utc de 'setDate' é: " + setDate.getUTCHours());

// setMilliseconds (seta os milesegundos [utc])
setDate.setUTCMilliseconds(888);
mostrarNaTela("os milesegundos utc de 'setDate' são: " + setDate.getUTCMilliseconds());

// setMinutes (seta os minutos [utc])
setDate.setUTCMinutes(12);
mostrarNaTela("os minutos utc de 'setDate' são: " + setDate.getUTCMinutes());

// setMonth (seta o mês [utc])
setDate.setUTCMonth(0);
mostrarNaTela("O mês utc de 'setDate' é: " + setDate.getUTCMonth());

// setSeconds (seta os segundos [utc])
setDate.setUTCSeconds(35);
mostrarNaTela("os segundos utc de 'setDate' são: " + setDate.getUTCSeconds());

// toDateString (retorna a data em uma string)
mostrarNaTela("A string de 'data' é: " + data.toDateString());
console.log(data.toDateString());

// toISOString (retorna a data numa string padrão ISO)
mostrarNaTela("A string ISO de 'data' é: " + data.toISOString());
console.log(data.toISOString());

// toJSON (formata a data no padrão json date)
mostrarNaTela("O json de 'data' é: " + data.toJSON());
console.log(data.toJSON());

// toLocaleDateString (formata a data no padrão local)
mostrarNaTela("A localização de 'data' é: " + data.toLocaleDateString());
console.log(data.toLocaleDateString());

// toLocaleTimeString (formata a hora no padrão local)
mostrarNaTela("O time localização de 'data' é: " + data.toLocaleTimeString());
console.log(data.toLocaleTimeString());

// toLocaleString (formata a data+hora no padrão local)
mostrarNaTela("A localização full de 'data' é: " + data.toLocaleString());
console.log(data.toLocaleString());

// toTimeString (retorna o timestring da data no padrão local)
mostrarNaTela("O TimeString de 'data' é: " + data.toTimeString());
console.log(data.toTimeString());

// toUTCString (retorna o timestring utc da data)
mostrarNaTela("O TimeString UTC de 'data' é: " + data.toUTCString());
console.log(data.toUTCString());

// UTC (retorna os milesgundos entre 1 jan 1970 e a data x)
mostrarNaTela("os milesgundos entre 1 jan 1970 e a data é: " + Date.UTC(2012, 2, 30));

// valueOf (retorna o valor primitiva da data)
mostrarNaTela("O valueOf de 'data' é: " + data.valueOf());

})();