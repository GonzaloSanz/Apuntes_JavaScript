'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    ¿Qué es un symbol?                   *
 *                                                         *
 ***********************************************************

    - Permiten crear una propiedad única de un objeto, no hay dos iguales.
*/

// Crear un symbol
const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('Son iguales');

} else {
    console.log('Son diferentes'); // Saldrá ésto
}

console.log(Symbol() === Symbol()); // false

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

/*
 ***********************************************************
 *                                                         *
 *               Agregar llaves al objeto                  *
 *                                                         *
 ***********************************************************
*/

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Gonzalo';
persona[apellido] = 'Sanz';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

// Acceder a la propiedad del objeto
console.log(persona[nombre]); // Gonzalo

/*
 ***********************************************************
 *                                                         *
 *        Las propiedades symbol no son iterables          *
 *                                                         *
 ***********************************************************
*/

for (let i in persona) {
    console.log(i); // tipoCliente, saldo
}

/*
 ***********************************************************
 *                                                         *
 *            Definir una descripción del symbol           *
 *                                                         *
 ***********************************************************
*/

const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = "Gonzalo";
console.log(cliente);

// Acceder al nombre
console.log(cliente[nombreCliente]);

// Acceder a la descripción
console.log(nombreCliente);


