'use strict'

/*
***********************************************************
*                                                         *
*                  ¿Qué es el hoisting?                   *
*                                                         *
***********************************************************

    - JavaScript se ejecuta en dos fases (creación y ejecución)
        + Creación: se crean o se registran todas las variables y funciones.
        + Ejecución: Se ejecutan o las manda llamar.
    - Esto permite llamar a funciones antes de ser creadas (entre otras cosas).
*/

/*
***********************************************************
*                                                         *
*   Diferencia entre expresión y declaración de función   *
*                                                         *
***********************************************************
*/

// Declaración de función
obtenerCliente('Gonzalo');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es: ${nombre}`);
}

// Expresión de función
const obtenerCliente2 = nombre => console.log(`El nombre del cliente es: ${nombre}`);

obtenerCliente2('Juan'); // En este caso, NO se puede llamar a la función antes de la expresión. 
