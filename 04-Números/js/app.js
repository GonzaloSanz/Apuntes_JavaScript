'use strict'

// Formas de crear un número
const numero = 20;
const numero2 = 20.20;
const numero3 = .102030; // 0.102030
const numero4 = -45;
const numero5 = new Number(80);

/*
 ***********************************************************
 *                                                         *
 *                 Operaciones aritméticas                 *
 *                                                         *
 ***********************************************************

    +   Sumar
    -   Restar
    *   Multiplicar
    /   Dividir
    %   Resto
*/

const suma = numero + numero2;
console.log(suma); // 40.2

const resta = numero2 - numero;
console.log(resta); // 0.1999

const multiplicacion = numero * numero2;
console.log(multiplicacion); // 404

const division = numero / numero2;
console.log(division); // 0.9900

const resto = numero % numero2;
console.log(resto); // 20

/*
    isNaN()

    - Comprueba si no es un número el valor pasado.
    - Devuelve true si no lo es, y false si lo es.
*/

const texto = "Hola";
console.log(isNaN(texto)); // true
console.log(isNaN(numero)); // false

/*
 ***********************************************************
 *                                                         *
 *              Métodos con el objeto Number               *
 *                                                         *
 ***********************************************************
*/

/*
    Number.isNaN()

    - Comprueba si es un número el valor pasado.
    - Devuelve true si es, y false si no lo es (al contrario que la función isNaN())
*/

console.log(Number.isNaN(texto)); // false

/*
    Number.isInteger()

    - Comprueba si un número es entero.
*/

console.log(Number.isInteger(suma)); // false

/*
    Number.parseInt()

    - Convertir un string a número entero.
*/

const numeroEnteroFalso = "30";
console.log(Number.parseInt(numeroEnteroFalso));

/*
    Number.parseFloat()

    - Convertir un string a número decimal.
*/

const numeroDecimalFalso = "45.79";
console.log(Number.parseFloat(numeroDecimalFalso));

/*
 ***********************************************************
 *                                                         *
 *                Métodos con el objeto Math               *
 *                                                         *
 ***********************************************************
*/

/* 
    Math.PI

    - Sacar el número PI
*/

let resultado = Math.PI;
console.log(resultado); // 3.1415...

/*
    Math.round()

    - Redondea un número.
*/

resultado = Math.round(2.4);
console.log(resultado); // 2

/*
    Math.ceil()

    - Redondea un número hacia arriba.
*/

resultado = Math.ceil(2.1);
console.log(resultado); // 3

/* 
    Math.floor()

    - Redondear un número hacia abajo.
*/

resultado = Math.floor(2.99);
console.log(resultado); // 2

/*
    Math.sqrt()

    - Hacer la raíz cuadrada.
*/

resultado = Math.sqrt(64);
console.log(resultado); // 8

/* 
    Math.abs()

    - Sacar el valor absoluto (quitar el negativo de un número)-
*/

resultado = Math.abs(-250);
console.log(resultado); // 250

// Math.pow() -> Elevar a la potencia
resultado = Math.pow(2, 4);
console.log(resultado); // 2^4 = 16

/* 
    Math.min()
    
    - Sacar el número mínimo.
*/

resultado = Math.min(203, 5.6, -780, 2, 3214, 45); 
console.log(resultado);

/* 
    Math.max()

    - Sacar el número máximo.
*/

resultado = Math.max(56, -3, 20.1, 689.9, 302, 1); 
console.log(resultado);

/*
    Math.random()

    - Genera un número aleatorio.
    - Obligatorio hacer uso de la función floor, ceil o round para que salga un número entero.
*/

resultado = Math.floor(Math.random() * 10); // Aleatorio del 0 al 10
console.log(resultado);

resultado = Math.floor(Math.random() * (50-25) + 25+1); // Aleatorio del 25 al 50 (+ 25 sólo para que fuera de 25 a 49)
console.log(resultado);

/*
 ***********************************************************
 *                                                         *
 *               Incrementos y decrementos                 *
 *                                                         *
 ***********************************************************

    - Se usa '++' para incrementar y '--' para decrementar.
*/


/*
    número++

    - Incrementar en 1 después de mostrarlo.
*/

let puntaje = 5;
console.log(puntaje++); // 5
console.log(puntaje); // 6 (ahora si que lo ha incrementado)

/*
    ++número

    - Incrementa en 1 antes de mostrarlo.
*/

let puntaje2 = 5;
console.log(++puntaje2); // 6
console.log(puntaje2); // 6

/*
    += n  

    - Incrementar en n veces.
*/

console.log(puntaje += 3); // 9

/*
    -= n  

    - Decrementar en n veces.
*/

console.log(puntaje -= 3); // 6




