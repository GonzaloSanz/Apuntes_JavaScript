'use strict'

/*
 ***********************************************************
 *                                                         *
 *                     ¿Qué es un set?                     *
 *                                                         *
 ***********************************************************

    - Son listas iterables sin valores duplicados.
    - Más rápidos que los arrays.
*/

// Instanciar un nuevo set
const carrito = new Set();

/*
 ***********************************************************
 *                                                         *
 *                      Métodos de set                     *
 *                                                         *
 ***********************************************************
*/

/*
    .add()
    
    - Agrega datos al set.
*/

carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.add('disco #3'); // Lo agrega porque está en minúscula
carrito.add('Disco #3'); // No lo agrega porque es idéntico a uno existente
console.log(carrito);

/* 
    .has()

    - Comprobar si un valor existe en el set.
    - Devuelve true o false.
*/

console.log(carrito.has('Disco #2')); // true

/* 
    .size
    
    - Ver la longitud del set.
*/

console.log(carrito.size); // 4

/*
    .delete()
    
    - Borrar un elemento del set.
*/

carrito.delete('Disco #3');
console.log(carrito);

/*
    .clear()
    
    - Vaciar todo el set.
*/

carrito.clear();
console.log(carrito);

/*
 ***********************************************************
 *                                                         *
 *                     Recorrer un set                     *
 *                                                         *
 ***********************************************************
*/

carrito.forEach( producto => {
    console.log(producto);
});

carrito.forEach( (producto, index) => {
    console.log(producto + " - " + index); // index y valor en el set son lo mismo
});

/*
 ***********************************************************
 *                                                         *
 *   Ejemplo: Eliminar los valores duplicados del array    *
 *                                                         *
 ***********************************************************
*/

const numeros = [10, 20, 30, 40, 10, 678, 20, 1180, 35, 67, 40, 21, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);