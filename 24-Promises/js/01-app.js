'use strict'

/*
***********************************************************
*                                                         *
*                  ¿Qué es un callback?                   *
*                                                         *
***********************************************************

    - Asegura que una función no se va a ejecutar antes de que se complete una tarea.
    - Ayuda a desarrollar código JavaScript asíncrono, evitando problemas y errores.
*/

const paises = ['España', 'Portugal', 'Alemania', 'Italia', 'Australia', 'Francia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);

}
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();

// Muestra la lista de países con Suiza ya agregada
nuevoPais('Suiza', mostrarPaises);