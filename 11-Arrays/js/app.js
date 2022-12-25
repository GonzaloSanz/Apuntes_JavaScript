'use strict'

/*
    1. ¿QUÉ ES UN ARRAY?

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

// Ver la longitud del array
console.log(hobbies.length);

/* 
    2. ACCEDER A LOS VALORES DEL ARRAY
    
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
    3. RECORRER EL ARRAY

    - Se usará un bucle for o foreach.
*/

const losMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

for(let i = 0; i < losMeses.length; i++){
    console.log(losMeses[i]);
}

/*
    4. AGREGAR O MODIFICAR VALORES DEL ARRAY
*/

// Agregar el mes de Julio
losMeses[7] = 'Julio';

// Modificar Enero a enero
losMeses[0] = 'enero';

// Agregar el mes de Diciembre en la posición 12
losMeses[12] = 'Diciembre'; // JavaScript dejará los índices anteriores vacios.

console.table(losMeses);

/*
    4. AGREGAR ELEMENTOS AL PRINCIPIO O FINAL DEL ARRAY
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

// .push()
// Agregar al final del array
carrito.push(producto);
carrito.push(producto2);

// .unshift()
// Agregar al inicio del array
carrito.unshift(producto3);

console.table(carrito);


/*
    5. USO DEL OPERADOR SPREAD PARA AGREGAR ELEMENTOS AL ARRAY
*/

let resultado;

resultado = [...carrito, producto];
resultado = [producto3, ...resultado, producto2]
console.table(resultado);

/*
    6. ELIMINAR ELEMENTOS DEL ARRAY
*/

// .pop()
// Eliminar el último elemento 
resultado.pop();
console.table(resultado);

// .shift()
// Eliminar el primer elemento
resultado.shift();
console.table(resultado);

// .splice()
// Eliminar uno o varios elementos concretos
resultado.splice(1, 3); // A partir del índice 1 (incluído), borra tres elementos.
resultado.splice(0); // Borra el primer elemento

console.table(resultado);

/*
    7. CONVERTIR ELEMENTOS DE UN ARRAY EN STRING
*/

// .join()
// Une los elementos de una array en un string. Se puede pasar el separador dentro del paréntesis.
const elementos = ['Fuego', 'Aire', 'Agua', 'Tierra'];

console.log(elements.join()); // Fuego,Aire,Agua,Tierra"
console.log(elements.join(' ')); // Fuego Aire Agua Tierra


/*
    8. DESESTRUCTURACIÓN DE ARRAYS

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


/*
    8. ITERAR UN ARRAY CON FOREACH

    - Una función mucho mejor y más simple que el bucle for.
*/

const carrito2 = [
    {nombre: 'Monitor Aorus 27 pulgadas', precio: 500},
    {nombre: 'Televisión LG 4K', precio: 100},
    {nombre: 'Tablet Samsung', precio: 200},
    {nombre: 'Auriculares Sony', precio: 300},
    {nombre: 'Teclado Razer', precio: 400},
    {nombre: 'Alcatel', precio: 700}
]

carrito2.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

/*
    8. ITERAR UN ARRAY CON MAP

    - Casi igual que el forEach, pero devuelve un array.
*/

// Recoger todos los productos que cuesten menos de 300€.
const nuevoArray = carrito2.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArray);