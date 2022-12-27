'use strict'

/*
 ***********************************************************
 *                                                         *
 *                 ¿Qué es un weakset?                     *
 *                                                         *
 ***********************************************************

    - Sólo se puede agregar objetos.
    - No existe el método .size.
    - No son iterables.
*/

// Instanciar un nuevo weakset
const weakSet = new WeakSet();

const cliente = {
    nombre: 'Gonzalo',
    edad: 18
}

/*
 ***********************************************************
 *                                                         *
 *                   Métodos de weakset                    *
 *                                                         *
 ***********************************************************
*/

/* 
    .add()

    - Añade un objeto.
*/

weakSet.add(cliente);

/*
    .has()

    - Comprobar si existe un determinado objeto en él.
    - Devuelve true o false.
*/

console.log(weakSet.has(cliente)); // true

/*
    .delete

    - Eliminar un objeto.
*/

weakSet.delete(cliente);



