'use strict'

/*
***********************************************************
*                                                         *
*                    ¿Qué es coercion?                    *
*                                                         *
***********************************************************

    - Es la conversión implícita o explícita de un tipo de valor dado a otro.
*/

const numero1 = 20;
const numero2 = "40";

/*
    Coerción implícita

    - JavaScript lo modifica automáticamente.
*/

console.log(numero1 + numero2); // string


/*
    Coerción explícita

    - El usuario cambia el tipo de valor. 
*/

console.log(Number(numero2)); // number