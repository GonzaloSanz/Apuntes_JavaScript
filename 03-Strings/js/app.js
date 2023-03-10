'use strict'

/*
    ¿QUÉ ES UN STRING?

    - Es una secuencia de caracteres usada para representar texto.
*/

// Tres formas de crear un String
const producto = "Monitor 20 pulgadas";
const producto2 = String('Monitor 24 pulgadas');
const producto3 = new String('Monitor 27 pulgadas'); // Objeto

console.log(producto);
console.log(producto2);
console.log(producto3);

// Introducir comillas dobles dentro de un string con \"
const producto4 = "Monitor 32\"";
console.log(producto4); // Monitor 32"

/*
    MÉTODOS PARA STRINGS
*/

/*
    .length

    - Saber los caracteres totales.
*/
console.log(producto.length); // 19

/*
    .indexOf()

    - Ver si contiene una cadena o caracter, devolviendo la posición de la primera coincidencia.
*/
console.log(producto.indexOf('Monitor')); // 0
console.log(producto.indexOf('o')); // 1
console.log(producto.indexOf('Agua')); // -1 (No existe en la cadena)

/*
    .lastIndexOf()

    - Ver si contiene una cadena o caracter, devolviendo la posición de la última coincidencia.
*/
console.log(producto.indexOf('o')); // 5

/*  
    .startsWith()

    - Comprueba que un string comience con la palabra indicada.
    - Tienes dos parámetros: la palabra a buscar y la posición donde empezará a buscar (el segundo es opcional).
*/
const texto = 'Usuario guardado en la base de datos';

console.log(texto.startsWith("Usuario", 0)); // true
console.log(texto.startsWith("Hola")); // false


/*
    .endsWith()

    - Comprueba que un string termine con la palabra indicada.
*/
console.log(texto.endsWith("datos")); // true
console.log(texto.endsWith("adios")); // false


/*
    .includes()

    - Alternativa a .indexOf(), devuelve un booleano.
*/
console.log(producto.includes('Monitor')); // true
console.log(producto.includes('A')); // false

/*
    .concat() 

    - Concatenar cadenas
*/
console.log(producto.concat(producto2)); // Monitor 20 pulgadasMonitor 24 pulgadas

/*
    +

    - Otra forma de concatenación.
*/
console.log(producto + producto2); // Monitor 20 pulgadasMonitor 24 pulgadas

/*
    `${}` (Template strings o literal)

    - Introducir variables dentro del string.
*/
console.log(`${producto} tiene un precio de 120€`); // Monitor 20 pulgadas tiene un precio de 120€

/*
    .trim()

    - Eliminar espacios al principio y final.
*/
const producto5 = "  Televisión 4k      ";
console.log(producto5.trim());

/*
    .trimStart() 

    - Eliminar espacios al principio.
*/
console.log(producto5.trimStart());

/* 
    .trimEnd() 

    - Eliminar espacios al final.
*/
console.log(producto5.trimEnd());

/*
    .replace() 

    - Reemplazar texto de una cadena.
*/
console.log(producto.replace("pulgadas", "\"")); // Monitor 20 "

/*
    .slice() 

    - Extraer o cortar una parte de la cadena. 
    - Si se pone como primer parámetro un número mayor al segundo, no funciona.
*/
console.log(producto.slice(4)); // tor 20 pulgadas
console.log(producto.slice(3, 8)); // itor 

/*
    .subString() 

    - Extraer una parte de la cadena. Puede funcionar con el número mayor primero (es inteligente y le da la vuelta).
*/
console.log(producto.substring(6)); // r 20 pulgadas
console.log(producto.substring(10, 2)); // nitor 20

/*
    .charAt()

    - Obtiene el caracter que esté en la posición pasada.
*/
console.log(producto.charAt(5)); // o

/*
    .repeat()

    - Repetir una cadena de texto.
*/
console.log('en promoción! '.repeat(3)); // en promoción! en promoción! en promoción!
console.log('en promoción! '.repeat(2.4)); // Un número decimal se redondea (a 2 en este caso)

/*
    .split()

    - Dividir el string en un array
*/
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // Divide cada palabra -> (4) ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']
console.log(actividad.split("Estoy aprendiendo")); // (2) ['', ' JavaScript Moderno']

/*
    .toUpperCase()

    - Convertir toda la cadena a mayúsculas.
*/
console.log(producto.toUpperCase()); // MONITOR 20 PULGADAS

/*
    .toLowerCase()

    - Convertir toda la cadena a minúsculas.
*/
console.log(producto.toLowerCase()); // monitor 20 pulgadas

/*
    .toString()

    - Transforma un número a string.
*/
const precio = 300;
console.log(precio.toString());

/*
    cadena[índice]

    - Devuelve el caracter que hay en esa posición.
*/
const textoNombre = "Gonzalo";

console.log(textoNombre[3]); // z
console.log(textoNombre[textoNombre.length - 1]); // o (El último caracter de la cadena)