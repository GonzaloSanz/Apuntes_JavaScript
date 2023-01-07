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

// Coger los productos que cuestan más de 400
const resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);

/*
***********************************************************
*                                                         *
*                   Función de alto orden                 *
*                                                         *
***********************************************************

    - Toma o retorna otra función como argumento.
*/

const mayor400 = producto => producto.precio > 400;

const resultado2 = carrito.filter(mayor400); // .filter() toma otra función como argumento
console.log(resultado2);