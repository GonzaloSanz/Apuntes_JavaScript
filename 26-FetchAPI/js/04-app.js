'use strict'

/*
***********************************************************
*                                                         *
*            Consultar una API desde una URL              *
*                                                         *
***********************************************************

    - Recomendable instalar la extensión del navegador 'JSONView'.
    - Enlace JSON: https://picsum.photos/list
*/

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado));
}

function mostrarHTML(perfiles) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    perfiles.forEach(perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}