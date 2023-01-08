'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es new binding?                  *
*                                                         *
***********************************************************
    
    - Acceso a this creando un nuevo objeto con la palabra new.
    - Se corresponde con la programación orientada a objetos en versiones anteriores de JavaScript.
*/

function Coche(modelo, color) {
    // New binding
    this.modelo = modelo;
    this.color = color;
}

const coche = new Coche('Camaro', 'negro');
console.log(coche);

/*
***********************************************************
*                                                         *
*                ¿Qué es window binding?                  *
*                                                         *
***********************************************************
    
    - Asignar variables a la ventana global.
*/

window.saludo = 'Buenos días';

function hola() {
    console.log(saludo);
}

hola();



