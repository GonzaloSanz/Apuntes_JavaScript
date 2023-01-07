'use strict'

/*
***********************************************************
*                                                         *
*                     Funciones puras                     *
*                                                         *
***********************************************************

    - Retornan el número exacto de parámetros recibidos.
    - No modifican el valor original, el resultado debe ser una nueva variable.
*/

const duplicar = numero => numero * 2;

const numero1 = 20;
const resultado = duplicar(numero1);

console.log(numero1); // 20
console.log(resultado); // 40