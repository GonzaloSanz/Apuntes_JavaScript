'use strict'

/*
 ***********************************************************
 *                                                         *
 *                  ¿Qué es un weakmap?                    *
 *                                                         *
 ***********************************************************

    - Un set que sólo acepta objetos.
    - Mantiene los valores de las propiedades del objeto privados.
    - No se puede conocer la extensión del weakMap ni iterarlo.
*/

const producto = {
    idProducto: 10
}

// Instanciar un weakMap
const weakMap = new WeakMap();

/*
 ***********************************************************
 *                                                         *
 *                   Métodos de weakmap                    *
 *                                                         *
 ***********************************************************
*/

/*
    .set()

    - Añadir un elemento al weakmap.
*/

weakMap.set(producto, 'Monitor');
console.log(weakMap);


/*
    .has()

    - Comprobar si tiene un elemento.
*/

console.log(weakMap.has(producto)); // true

/*
    .get()

    - Obtener el valor de un elemento.
*/

console.log(weakMap.get(producto)); // Monitor

/*
    .delete()

    - Borrar un elemento del weakmap.
*/

weakMap.delete(producto);




