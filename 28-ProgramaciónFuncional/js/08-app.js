'use strict'

/*
***********************************************************
*                                                         *
*                   Partials y Currying                   *
*                                                         *
***********************************************************

    - Consiste en dividir funciones que toman varios argumentos en varias partes.
*/

const suma = (a, b, c) => a + b + c;

const resultadoSuma = suma(5, 4, 3);
console.log(resultadoSuma); // 12

const parcial = a => b => c => suma(a, b, c);

const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial); // 12