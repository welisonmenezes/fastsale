(function(){

// PROPRIEDADES

// E (retorna o número de euler)
mostrarNaTela("O euler é: " + Math.E);

// LN2 (retorna o logaritimo natural de 2)
mostrarNaTela("O logarítimo de 2 é: " + Math.LN2);

// LN10 (retorna o logarítimo natural de 10)
mostrarNaTela("O logartítimo de 10 é: " + Math.LN10);

// LOG2E (retorna a base 2 do log de E)
mostrarNaTela("A base 2 do log de E é: " + Math.LOG2E);

// LOG10E (retorna a base 10 do log de E)
mostrarNaTela("A base 10 do log de E é: " + Math.LOG10E);

// PI (retorna o PI)
mostrarNaTela("O valor de PI é: " + Math.PI);

// SQRT1_2 (retorna a raíz quadrada de 1 por 2)
mostrarNaTela("A raíz quadrada de 1 por 2 é: " + Math.SQRT1_2);

// SQRT2 (retorna a raíz quadrada de 1 por 2)
mostrarNaTela("A raíz quadrada de 2 é: " + Math.SQRT2);



// METODOS

// abs (retorna o número absoluto de x)
mostrarNaTela("O número absoluto de -45.3 é: " + Math.abs(-45.3));

// cbrt (retorna a raíz cúbica de x)
mostrarNaTela("A raíz cúbica de 125 é: " + Math.cbrt(125));

// ceil (retorna o número arredondado pra cima)
mostrarNaTela("21.3 arredondado pra cima é: " + Math.ceil(21.3));

// floor (retorna o número arredondado pra baixo)
mostrarNaTela("21.6 arredondado pra baixo é: " + Math.floor(21.6));

// round (retorna o número arredondado para o inteiro mais próximo)
mostrarNaTela("21.4 arredondado com round é: " + Math.round(21.4));
mostrarNaTela("21.6 arredondado com round é: " + Math.round(21.6));

// cos (retorna o conseno de x)
mostrarNaTela("O coseno de 3 é: " + Math.cos(3));

// max (retorna o maior número de n números)
mostrarNaTela("O maior número é: " + Math.max(3, 45, 5, 1, 43, 22, 39, 99));

// min (retorna o menor número de n números)
mostrarNaTela("O menor número é: " + Math.min(3, 45, 5, 1, 43, 22, 39, 99));

// pow (retorna a potência de x na potênica y)
mostrarNaTela("5 na potência 5 é: " + Math.pow(5, 5));

// random (retorna um número randômico entre 0 e 1)
mostrarNaTela("O número randômico é: " + Math.random());
// combinando métodos
mostrarNaTela("Um número randômico entre 1 e 10 é: " + Math.ceil(  Math.random() * 10  ) );

// sqrt (retorna a raíz quadrada de x)
mostrarNaTela("A raíz quadrada de 9 é: " + Math.sqrt(9));

// tan (retorna a tangente do ângulo x)
mostrarNaTela("A tangente do ângulo 90º é: " + Math.tan(90));


// PARA MAIS MÉTODOS CONSULTE: https://www.w3schools.com/jsref/jsref_obj_math.asp

})();