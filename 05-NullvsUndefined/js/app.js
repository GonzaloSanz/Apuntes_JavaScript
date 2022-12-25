'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    Null vs Undefined                    *
 *                                                         *
 ***********************************************************
 
    - Ambos sirven para algo muy parecido, que es indicar la ausencia de valor.

    - Undefined es un valor que denota que no hay valor porque no se ha definido todavía.
    - Null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente.
*/

// Dato null
let numeroVacio = null;
console.log(numeroVacio); // null

// Dato undefined
let numeroSinValor;
console.log(numeroSinValor); // undefined

// Comparar null y undefined
console.log(numeroVacio == numeroSinValor); // true
console.log(numeroVacio === numeroSinValor); // false 
