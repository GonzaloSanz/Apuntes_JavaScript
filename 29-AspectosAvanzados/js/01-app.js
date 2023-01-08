'use strict'

/*
***********************************************************
*                                                         *
*            ¿Qué es el scope de una variable?            *
*                                                         *
***********************************************************

    - Determina el alcance donde puede ser vista una variable.
*/

const cliente = 'Gonzalo';

function mostrarCliente() {
    const cliente = 'Pedro';

    console.log(cliente);
}

mostrarCliente(); // Pedro

console.log(cliente); // Gonzalo
