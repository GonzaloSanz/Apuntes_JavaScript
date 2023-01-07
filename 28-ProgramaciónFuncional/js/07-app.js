'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es un closure?                   *
*                                                         *
***********************************************************

    - Es una forma de acceder a un valor o función desde el exterior.
*/

const obtenerCliente = () => {
    const nombre = "Gonzalo";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente(); // Gonzalo