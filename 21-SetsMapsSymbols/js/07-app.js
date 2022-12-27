'use strict'

/*
 ***********************************************************
 *                                                         *
 *                 ¿Qué es un generador?                   *
 *                                                         *
 ***********************************************************

    - Es una función que devuelve un iterador.
    - Siempre llevan un asterisco (*) después de function.
*/

/*
 ***********************************************************
 *                                                         *
 *                   Crear un generador                    *
 *                                                         *
 ***********************************************************

    - yield son los valores restáticos que va a iterar el generador.
*/

function* creargenerador() {
    yield 1;
    yield 'Gonzalo';
    yield 3 + 3;
    yield true;
}

const iterador = creargenerador();
console.log(iterador);

/*
 ***********************************************************
 *                                                         *
 *                 Métodos del generador                   *
 *                                                         *
 ***********************************************************
*/

/*
    .next()
    
    - Acceder al siguiente elemento.
    - Despierta al generador y luego éste se suspende otra vez.
*/

console.log(iterador.next()); // value: 1  done: false

/*
    .value
    
    - Acceder al valor del elemento
*/

console.log(iterador.next().value); // Gonzalo

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); // value: undefined (no hay más valores) y done: true (se ha acabado el generador)

/*
    .done 
    
    - Saber si ha acabado ya un generador (no hay más valores por recorrer)
*/

console.log(iterador.done); // true


/*
 ***********************************************************
 *                                                         *
 *      Ejemplo: Generador para un carrito de compras      *
 *                                                         *
 ***********************************************************
*/

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

function* generadorCarrito(carrito) {

    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const iterador2 = generadorCarrito(carrito);

// Llamamos al iterador con next para ir accediendo a los valores del generador
console.log(iterador2.next()); // value: Producto1  done: false
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next()); // value: undefined  done: true
