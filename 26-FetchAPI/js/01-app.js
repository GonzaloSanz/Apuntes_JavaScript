'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es fetch API?                    *
*                                                         *
***********************************************************

    - Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
    - Sólo soporta texto plano o JSON, no XML.
*/

/*
***********************************************************
*                                                         *
*         Consultar datos desde un archivo .txt           *
*                                                         *
***********************************************************
*/

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';

    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); // 200 -> Bien   404 -> Error
            console.log(respuesta.statusText); // OK
            console.log(respuesta.url); // http://127.0.0.1:5500/26-FetchAPI/data/datos.txt
            console.log(respuesta.type); // basic 

            return respuesta.text();
        })
        .then(datos => { // Aquí ya se reciben los datos que devuelve el primer then()
            console.log(datos); // Informacion desde un archivo .txt
        })
        .catch(error => {
            console.log(error);
        });
}
