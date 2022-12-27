'use strict'

/*
 ***********************************************************
 *                                                         *
 *                  ¿Qué es un iterador?                   *
 *                                                         *
 ***********************************************************

    - Un objeto que permite recorrer una colección de datos y procesar cada uno de sus elementos.
*/

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

/*
 ***********************************************************
 *                                                         *
 *                    Crear un iterador                    *
 *                                                         *
 ***********************************************************
*/

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {

            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

/*
 ***********************************************************
 *                                                         *
 *                 Utilizar un iterador                    *
 *                                                         *
 ***********************************************************
*/

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());