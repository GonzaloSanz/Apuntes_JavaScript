'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    ¿Qué es un bucle?                    *
 *                                                         *
 ***********************************************************

    - Es una estructura de control.
    - Permite que el código se ejecute hasta que una condición se cumpla o deje de cumplirse.
*/

const carrito = [
    { nombre: 'Monitor Aorus 27 pulgadas', precio: 500 },
    { nombre: 'Televisión LG 4K', precio: 100 },
    { nombre: 'Tablet Samsung', precio: 200 },
    { nombre: 'Auriculares Sony', precio: 300 },
    { nombre: 'Teclado Razer', precio: 400 },
    { nombre: 'Alcatel', precio: 700 }
];

/*
 ***********************************************************
 *                                                         *
 *                          for()                          *
 *                                                         *
 ***********************************************************

    - Permite definir el número máximo de iteraciones.
*/

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

/*
 ***********************************************************
 *                                                         *
 *                     break y continue                    *
 *                                                         *
 ***********************************************************

    - break corta la ejecución de un bucle.
    - continue permite interceptar un elemento y continuar la ejecución del bucle.
*/

// Cuando toque el 5, finalizar el bucle
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('Estamos en el 5');
        break;
    }

    console.log(`Número: ${i}`);
}

// Cuando llegue al 5, escribirlo en letras mayúsculas, pero no sacar el número y pasar a la siguiente iteración.
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('CINCO');
        continue;
    }

    console.log(`Número: ${i}`);
}

/*
 ***********************************************************
 *                                                         *
 *                  Ejercicio: Fizz Buzz                   *
 *                                                         *
 ***********************************************************

    Recorrer los 100 primeros números y cuando sea el:
        - 3 6 9 12... Mostrar fizz
        - 5 10 15 20... Mostrar buzz
        - 15 30 45... Mostrar FIZZ BUZZ!
*/

for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ!`);
    } else if (i % 3 == 0) {
        console.log(`${i} fizz`);
    } else if (i % 5 == 0) {
        console.log(`${i} buzz`);
    }
}

/*
 ***********************************************************
 *                                                         *
 *                          while()                        *
 *                                                         *
 ***********************************************************

    - Ejecuta el bloque de código mientras se cumpla la condición.
*/

// Mostrar todos los números desde el 100 mientras sean mayores que 10
let i = 100;

while (i > 10) {
    console.log(`Número ${i}`);
    i--; // Decremento
}

/*
 ***********************************************************
 *                                                         *
 *                       do while()                        *
 *                                                         *
 ***********************************************************

    - A diferencia de while(), al menos se ejecuta la primera vez, porque evalúa la condición al final.
*/

let j = 1;

do {
    console.log(`El número ${j} es menor que 10`);
    j++;

} while (j < 10);

/*
 ***********************************************************
 *                                                         *
 *                    forEach() y map()                    *
 *                                                         *
 ***********************************************************
*/

const tareas = ['Comer', 'Proyecto', 'Dibujo', 'Estudiar', 'Entrenar'];

/*
    forEach()

    -El segundo parámetro siempre es el índice (no es obligatorio).
*/

tareas.forEach((pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
})

/*
    map()

    - Devuelve un nuevo array.
*/

const lasTareas = tareas.map((tarea) => tarea);
console.log(lasTareas);

/*
 ***********************************************************
 *                                                         *
 *                        for of()                         *
 *                                                         *
 ***********************************************************

    - Recorre un array de forma mucho más simplificada.
*/

for (let tarea of tareas) {
    console.log(tarea);
}

/*
 ***********************************************************
 *                                                         *
 *                        for in()                         *
 *                                                         *
 ***********************************************************

    - Casi igual que for of, pero itera sobre OBJETOS.
    - Si se usa con un array normal, sólo devolverá sus índices.
*/

const coche = {
    modelo: 'Camaro',
    color: 'Rojo',
    motor: '6.0',
    puertas: 5
}

// Mostrar cada una de las propiedades del objeto coche
for (let caracteristica in coche) {
    console.log(`${coche[caracteristica]}`);
}

