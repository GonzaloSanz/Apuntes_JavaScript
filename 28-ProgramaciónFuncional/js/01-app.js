'use strict'

/*
***********************************************************
*                                                         *
*           ¿Qué es la programación funcional?            *
*                                                         *
***********************************************************

    - Es un paradigma (estilo) de programación, que se basa en gran medida en el uso de funciones.
    - Dichas funciones deben tomar una entrada y tener una salida de datos.
    - No se permite la modificación de datos (utilizar casi siempre const).
*/

/*
***********************************************************
*                                                         *
*                Funciones de primera clase               *
*                                                         *
***********************************************************

    - Una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función
    y puede ser asignada a una variable.
*/

const suma = function(a, b) {
    return a + b;
}

const resultado = suma;
console.log(resultado(10,20)); // 30