'use strict'

/*
    1. ¿QUÉ ES UN BOOLEANO?

    - Es un dato lógico que solo puede tener los valores false(0) o true(1).
*/ 

// Formas de inicializar booleanos
const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"; // string
const boolean4 = new Boolean(false); // objeto

// Comparar booleanos
console.log(boolean1 == boolean3); // false
console.log(boolean1 == boolean4); // true
console.log(boolean1 === boolean4); // false 
console.log(boolean1 === boolean3); // false

// Evaluar booleanos
const autenticado = false;

if(autenticado){ // No es buena práctica hacer if(autenticado === true)
    console.log('Estás autenticado.');
}

if(!autenticado){
    console.log("No estás autenticado.");
}