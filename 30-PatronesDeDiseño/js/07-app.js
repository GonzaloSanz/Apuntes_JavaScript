'use strict'

/*
***********************************************************
*                                                         *
*                   Namespaces Pattern                    *
*                                                         *
***********************************************************

    - Evita la colisión de nombres en el scope global de JavaScript.
    - Muy útil en proyectos grandes.
*/

const restauranteApp = {};

restauranteApp.platos = [
    {
        nombre: 'Pizza',
        precio: 11.99
    },
    {
        nombre: 'Hamburguesa',
        precio: 6.99
    },
    {
        nombre: 'Perrito Caliente',
        precio: 2.50
    },
];

restauranteApp.funciones = {
    mostrarMenu: platos => {
        console.log('Bienvenido a nuestro menú.');

        platos.forEach((plato, index) => {
            console.log(`${index} : ${plato.nombre} - ${plato.precio} euros.`);
        });
    },
    ordenar: id => {
        console.log(`Tu plato: ${restauranteApp.platos[id].nombre} se está preparando.`);
    },
    agregarPlato: (nombre, precio) => {
        const nuevoPlato = {
            nombre, 
            precio
        };

        restauranteApp.platos.push(nuevoPlato);
    }
}

restauranteApp.funciones.ordenar(1);
restauranteApp.funciones.agregarPlato('Taco', 5.99);

const { platos } = restauranteApp;
restauranteApp.funciones.mostrarMenu(platos);