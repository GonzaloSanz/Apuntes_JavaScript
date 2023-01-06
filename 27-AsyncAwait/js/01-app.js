'use strict'

/*
***********************************************************
*                                                         *
*                 ¿Qué es try...catch?                    *
*                                                         *
***********************************************************

    - Es una declaración que señala un bloque de instrucciones a intentar (try) y especifica una respuesta si se produce una excepción (catch).
*/

console.log(1 + 1);

try {
    hola();

} catch (error) {
    console.log(error);
}