'use strict'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 510 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Móvil', precio: 700 },
]

/* 
    .some()

    - Comprueba si un valor existe en un array normal u objetos.
*/

const existe = carrito.some(producto => producto.nombre === 'Móvil');
console.log(existe); // true

const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2); // true


// Método alternativo para arrays normales.
meses.forEach(mes => {
    if (mes === 'Enero') {
        console.log('Enero si existe');
    }
});

const resultado = meses.includes('Diciembre'); // Devuelve true si existe.


/* 
    .findIndex()

    - Permite conocer en qué índice del array se encuentra el valor.
*/

// Encontrar el índice en array normal
const indice = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice); // -1 porque no existe en el array

// Encontrar el índice en objetos (Si hubiera dos iguales, mostraría la primera coincidencia)
const indice2 = carrito.findIndex(producto => producto.precio === 400);
console.log(indice2); // 4

/* 
    .reduce()

    - Tomar muchos datos, unirlos y entregar un resultado.
*/

// Mostrar el total a pagar del carrito
let cuenta = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(cuenta);

/* 
    .filter()

    - Crea un nuevo array a partir de un valor o comprobación.
*/

let resultado2;

// Crear un nuevo array con productos que cuesten  menos o igual que 400€
resultado2 = carrito.filter(producto => producto.precio <= 400);
console.log(resultado2);

// Crear un nuevo array con productos que no sean Audífonos
resultado3 = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado3);


/* 
    .find()

    - Crea un nuevo array basado en una condición. Sólo devuelve la primera coincidencia.
*/

// Mostrar el primer producto que cueste menos o igual que 300€
resultado4 = carrito.find(producto => producto.precio <= 300);
console.log(resultado4);


/* 
    .every()

    - Comprueba si todos los elementos de un array cumplen una condición.
    - Devuelve true o false.
*/

const cumplir = carrito.every(producto => producto.precio < 500);
console.log(cumplir); // false



/* 
    .concat()

    - Unir varios arrays u otros tipos de dato en otro array.
*/

const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const todosLosMeses = meses.concat(meses2, meses3, 'Otro mes', 'Otro mes más');
console.log(todosLosMeses);


/* 
    Rest/Spread (...)

    - Alternativa a .concat()
*/

const meses4 = [...meses, ...meses2, 'Octubre'];
console.log(meses4);