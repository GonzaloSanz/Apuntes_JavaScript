'use strict'

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Gonzalo');
datos.set('profesion', 'Desarrollador Web');

/*
 ***********************************************************
 *                                                         *
 *                  Iterador por defecto                   *
 *                                                         *
 ***********************************************************
*/

for (let ciudad of ciudades) {
    console.log(ciudad); // valor (Londres, New York, Madrid, Paris)
}

for (let orden of ordenes) {
    console.log(orden); // valor (123, 231, 131, 102)
}

for (let dato of datos) {
    console.log(dato); // llave y valor (nombre, Gonzalo  profesion, Desarrollador Web)
}

/*
 ***********************************************************
 *                                                         *
 *                    Iterador entries                     *
 *                                                         *
 ***********************************************************

    - Imprime las llaves y sus valores.
*/

for (let entry of ciudades.entries()) {
    console.log(entry); // Muestra llave y valor (0, Londres  2, New York...)
}

for (let entry of ordenes.entries()) {
    console.log(entry); // En los sets, llave y valor salen igual (123, 123  231, 231...)
}

for (let entry of datos.entries()) {
    console.log(entry); // nombre, Gonzalo  profesion, Desarrollador Web
}

/*
 ***********************************************************
 *                                                         *
 *                     Iterador values                     *
 *                                                         *
 ***********************************************************

    - Imprime los valores.
*/

for (let value of ciudades.values()) {
    console.log(value); // Londres, New York, Madrid, Paris
}

for (let value of ordenes.values()) {
    console.log(value); // 123, 231, 131, 102
}

for (let value of datos.values()) {
    console.log(value); // Gonzalo, Desarrollador Web
}

/*
 ***********************************************************
 *                                                         *
 *                     Iterador values                     *
 *                                                         *
 ***********************************************************

    - Imprime las posiciones o llaves.
*/

for (let key of ciudades.keys()) {
    console.log(key); // 0, 1, 2, 3
}

for (let key of ordenes.keys()) {
    console.log(key); // // 123, 231, 131, 102
}

for (let key of datos.keys()) {
    console.log(key); // nombre, profesion
}