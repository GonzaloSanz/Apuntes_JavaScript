'use strict'

/*
***********************************************************
*                                                         *
*              Fetch API con async...await                *
*                                                         *
***********************************************************
*/

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

/*
    Función con encadenamiento .then()

    function obtenerDatos() {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado))
            .catch(error => console.log(error));
    }
*/

// Función con async await
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
        
    }catch(error){
        console.log(error);
    }
}