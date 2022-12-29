'use strict'

/*
***********************************************************
*                                                         *
*               ¿Qué es el callback hell?                 *
*                                                         *
***********************************************************

    - Se trata de un anidamiento de funciones que no ayuda a la legibidad del código, haciéndolo difícil de mantener.
    - La solución es el uso de 'promises'.
*/

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);

            setTimeout(() => {
                nuevoPais('España', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallBackHell();