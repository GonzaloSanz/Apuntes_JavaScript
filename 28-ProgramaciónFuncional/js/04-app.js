'use strict'

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Móvil', precio: 500 },
    { nombre: 'Ratón', precio: 35 },
    { nombre: 'Portátil', precio: 800 },
];

/*
***********************************************************
*                                                         *
*            Map en la programación funcional             *
*                                                         *
***********************************************************
*/

const obtenerNombres = producto => producto.nombre;

const resultado = carrito.map( obtenerNombres );
console.log(resultado);