'use strict'

/*
***********************************************************
*                                                         *
*                 ¿Qué es explicit binding?               *
*                                                         *
***********************************************************

    - Añade valores externos.
    - Se necesitan tres funciones: call, apply y bind.
        + call: Existe en todas las funciones de JavaScript.
*/

function persona(elemento1, elemento2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${elemento1} y ${elemento2}`);
}

const informacion = {
    nombre: 'Gonzalo'
};

const musicaFavorita = ['Pop', 'Rock'];

/*
    .call()

    - Se le pasa cada elemento de forma individual.
*/

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

/*
    .apply()

    - Similar a .call(), pero se le puede pasar el array entero.
*/

persona.apply(informacion, musicaFavorita);

/*
    .apply()

    - Se pasan los elementos de forma individual (al igual que .call()), pero crea una nueva función.
*/

const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFuncion();
