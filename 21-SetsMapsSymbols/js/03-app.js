'use strict'

/*
 ***********************************************************
 *                                                         *
 *                     ¿Qué es un map?                     *
 *                                                         *
 ***********************************************************

    - Un map es una lista ordenada, con formato llave - valor.
    - Tanto la llave y el valor pueden ser cualquier tipo de dato. 
*/

// Instanciar un map
const cliente = new Map();

/*
 ***********************************************************
 *                                                         *
 *                      Métodos de set                     *
 *                                                         *
 ***********************************************************
*/

/*
    .set(llave, valor)
    
    - Agregar o reescribir un elemento.
*/

cliente.set('nombre', 'Gonzalo');
cliente.set('tipo', 'premium');
cliente.set('saldo', 500);
cliente.set('mayorEdad', true);

console.log(cliente);

/*
    .size
    
    - Ver extensión del map.
*/

console.log(cliente.size); // 4

/*
    .has()

    - Comprobar si existe un elemento por la llave.
*/

console.log(cliente.has('nombre')); // true

/*
    .get() 
    
    - Obtener el valor de una llave.
*/

console.log(cliente.get('nombre')); // Gonzalo

/*
    .delete () 
    
    - Borrar un elemento por su llave.
*/

cliente.delete('saldo');

/*
    .clear() 

    - Borrar todos los elementos del map.
*/

cliente.clear();

// Inicializar un map con valores
const paciente = new Map([ ['nombre', 'Gonzalo'], ['sala', '12']]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente);

/*
 ***********************************************************
 *                                                         *
 *                      Iterar un map                      *
 *                                                         *
 ***********************************************************
*/

paciente.forEach( (datos, index) => {
    console.log(index + " - " + datos); // nombre - Antonio, ...
})