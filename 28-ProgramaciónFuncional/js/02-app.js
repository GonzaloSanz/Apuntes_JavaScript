'use strict'

/*
***********************************************************
*                                                         *
*                 Funciones como argumentos               *
*                                                         *
***********************************************************
*/

const suma = function(a, b) {
    return a + b;
}

const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = funcion => funcion(10, 20);

console.log(sumarOMultiplicar( suma ) ); // 30
console.log(sumarOMultiplicar( multiplicar ) ); // 200