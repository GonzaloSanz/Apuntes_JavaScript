'use strict'

/*
 ***********************************************************
 *                                                         *
 *                 ¿Qué son los prototypes?                *
 *                                                         *
 ***********************************************************

    - Los prototipos son objetos que pueden tener propiedades y métodos.
    - Pueden ser utilizados por otros objetos para heredar sus propiedades. 
    - Muy útil para encapsular y reutilizar el código, dando la posibilidad de adaptarlo al diseño orientado a objetos.
*/

// Objeto literal
const cliente = {
    nombre: 'Gonzalo',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente); // object

// Constructor de objeto
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const gonzalo = new Cliente('Gonzalo', 500);
console.log(gonzalo);