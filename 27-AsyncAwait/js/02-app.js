'use strict'

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de cliente se descargó correctamente');

            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

/*
***********************************************************
*                                                         *
*            Programación síncrona vs asíncrona           *
*                                                         *
***********************************************************

    - Síncrona: Difiere la ejecución de la función, a la espera de que se complete una operación.  
        + Permite tener una mejor respuesta en las aplicaciones y reduce el tiempo de espera del cliente.
        
    - Asíncrona: Cada instrucción se ejecutará en secuencia hasta terminar.
*/

/*
***********************************************************
*                                                         *
*                ¿Qué es async...await?                   *
*                                                         *
***********************************************************

    - Es una sintaxis para gestionar promesas. Abandona el modelo de encadenamiento con .then().
        + async: Se colocará previamente a function, para definirla así como una función asíncrona.
        + await: Espera a que se resuelva la promesa.
*/

async function ejecutar() {
    try {
        const respuesta = await descargarClientes(); // await detiene la ejecución del código hasta que se resuelve el promise

        // Si hubiera algún error, saltaría directamente al catch
        console.log(2 + 2);
        console.log(respuesta);

    } catch (error) {
        console.log(error);
    }
}

ejecutar();