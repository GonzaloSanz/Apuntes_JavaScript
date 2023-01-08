'use strict'

/*
***********************************************************
*                                                         *
*                    ¿Qué es event loop?                  *
*                                                         *
***********************************************************

    - Es el modelo de concurrencia de eventos.
    - Hay eventos que tienen más prioridad que otros al ejecutarse.
    - Más información: https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop
*/

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Promesa resuelta');
}).then(console.log);

console.log('Último');

function saludo() {
    console.log('hola');
}

saludo();