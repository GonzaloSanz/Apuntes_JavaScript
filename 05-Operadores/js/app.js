'use strict'

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;
const password1 = "Admin";
const password2 = "admin";

/*
    1. OPERADORES

    >       Mayor que
    <       Menor que
    >=      Mayor o igual que
    <=      Menor o igual que
    ==      Igual
    ===     Igual estricto
    !=      Diferente
    !==     Diferente estricto
*/

console.log(numero1 > numero3); // false

console.log(numero1 < numero3); // true

console.log(numero1 == numero2); // true

console.log(numero1 === numero2); // false

console.log(password1 != password2); // true
console.log(numero1 != numero2); // false

console.log(numero1 !== numero2); // true
console.log(numero1 !== parseInt(numero2)); // false

/*
    2. NULL VS UNDEFINED

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
