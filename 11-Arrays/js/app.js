'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    ¿Qué es un array?                    *
 *                                                         *
 ***********************************************************

    - Es un tipo de dato estructurado que almacena un conjunto de datos homogéneo. 
*/

// Formas de crear un array
const hobbies = ['Bailar', 'Escuchar música', 'Leer', 'Ver la televisión'];
const meses = new Array('Enero', 'Febrero', 'Marzo'); // Forma menos común.

// Crear un array con datos variados (incluso otro array o un objeto)
const deTodo = ["Hola", 10, true, null, {nombre: 'Juan', trabajo:'Programador'}, [1, 2, 3]];

/* 
    console.table()

    - Muestra todo el array en una tabla, por consola.
*/

console.table(hobbies);

/*
    .length
    
    - Ver la longitud del array.
*/

console.log(hobbies.length);

/*
 ***********************************************************
 *                                                         *
 *             Acceder a los valores del array             *
 *                                                         *
 ***********************************************************

    - Los arrays siempre empiezan con el índice 0 (corresponde al primer valor del array).
*/

const numeros = [2, 367, 89, 21, [1, 2, 3]];

// Mostrar el primer número
console.log(numeros[0]);

// Mostrar el número 89
console.log(numeros[2]);

// Acceder al segundo número del array dentro de numeros
console.log(numeros[6][1]); // 2

/*
 ***********************************************************
 *                                                         *
 *                    Recorrer el array                    *
 *                                                         *
 ***********************************************************

    - Se usará un bucle for() o forEach().
*/

const losMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

for(let i = 0; i < losMeses.length; i++){
    console.log(losMeses[i]);
}

/*
 ***********************************************************
 *                                                         *
 *           Agregar y modificar valores del array         *
 *                                                         *
 ***********************************************************
*/

// Agregar el mes de Julio
losMeses[7] = 'Julio';

// Modificar Enero a enero
losMeses[0] = 'enero';

// Agregar el mes de Diciembre en la posición 12
losMeses[12] = 'Diciembre'; // JavaScript dejará los índices anteriores vacios.

console.table(losMeses);

/*
 ***********************************************************
 *                                                         *
 *     Agregar elementos al principio o final del array    *
 *                                                         *
 ***********************************************************
*/

const carrito = [];
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 120
}

const producto2 = {
    nombre: 'Samsung Galaxy S22',
    precio: 700
}

const producto3 = {
    nombre: 'Televisión 4K',
    precio: 2300
}

/*
    .push()

    - Agregar al final del array.
*/

carrito.push(producto);
carrito.push(producto2);

/*
    .unshift()

    - Agregar al inicio del array.
*/

carrito.unshift(producto3);
console.table(carrito);

/*
 ***********************************************************
 *                                                         *
 *    Agregar elementos al array con el operador spread    *
 *                                                         *
 ***********************************************************
*/

let resultado;

resultado = [...carrito, producto];
resultado = [producto3, ...resultado, producto2]
console.table(resultado);

/*
 ***********************************************************
 *                                                         *
 *              Eliminar elementos del array               *
 *                                                         *
 ***********************************************************
*/

/*
    .pop()

    - Eliminar el último elemento.
*/

resultado.pop();
console.table(resultado);

/*
    .shift()
    
    - Eliminar el primer elemento.
*/

resultado.shift();
console.table(resultado);

/*
    .splice()

    - Eliminar uno o varios elementos concretos.
*/

resultado.splice(1, 3); // A partir del índice 1 (incluído), borra tres elementos.
resultado.splice(0); // Borra el primer elemento

console.table(resultado);

/*
 ***********************************************************
 *                                                         *
 *        Convertir elementos de un array en strings       *
 *                                                         *
 ***********************************************************
*/

/*
    .join()

    - Une los elementos de una array en un string. 
    - Se puede pasar el separador dentro del paréntesis.
*/

const elementos = ['Fuego', 'Aire', 'Agua', 'Tierra'];

console.log(elements.join()); // Fuego,Aire,Agua,Tierra
console.log(elements.join(' ')); // Fuego Aire Agua Tierra

/*
 ***********************************************************
 *                                                         *
 *                Desestructuración de arrays              *
 *                                                         *
 ***********************************************************

    - A diferencia de los objetos, puedes darle el nombre que quieras a la nueva variable, porque su valor está definido por la posición.
*/

const numeros2 = [10, 20, 30, 40, 50];

// Sacar el número 10
const [primero] = numeros2;
console.log(primero); // 10

// Acceder al número 30
const [primero1, segundo, tercero] = numeros2;
console.log(tercero); // 30

// Forma más correcta y menos pesada (utilizar comas)
const [, , treinta] = numeros2;
console.log(treinta); // 30

// Sacar múltiples valores en un array (usar spread)
const [, ...elResto] = numeros2;
console.log(elResto); // 20, 30, 40, 50