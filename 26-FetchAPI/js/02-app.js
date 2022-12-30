'use strict'

/*
***********************************************************
*                                                         *
*                    ¿Qué es un JSON?                     *
*                                                         *
***********************************************************

    - Significa Notación de Objeto JavaScript (JavaScript Object Notation).
    - Es un formato de texto sencillo para estructurar datos en forma de texto.
    - Permite el intercambio de información entre aplicaciones de manera sencilla, liviana y rápida.
*/

/*
***********************************************************
*                                                         *
*               Consultar un archivo JSON                 *
*                                                         *
***********************************************************
*/

const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then (respuesta => {
            return respuesta.json();
        })
        .then( resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML({empresa, id, nombre, trabajo}) {

    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `;
}