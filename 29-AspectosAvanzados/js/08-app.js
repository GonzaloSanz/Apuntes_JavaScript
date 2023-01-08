'use strict'

/*
***********************************************************
*                                                         *
*                      ¿Qué es self?                      *
*                                                         *
***********************************************************

    - Es una palabra reservada que se refiere a la ventana global (window).
    - Muy usada en Service Workers y Progressive Web Apps (PWA).
*/

window.onload = () => {
    console.log('Ventana lista');
}

self.onload = () => {
    console.log('Ventana lista utilizando self');
}


window.nombre = 'Samsung Galaxy S20';

const producto = {
    precio: 600,
    disponible: true,
    mostrarInformacion: function() {
        return `El producto ${self.nombre} tiene un precio de ${this.precio} euros.`;
    }
}

console.log(producto.mostrarInformacion());

