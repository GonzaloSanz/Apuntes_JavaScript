'use strict'

/*
***********************************************************
*                                                         *
*               API de conexión a internet                *
*                                                         *
***********************************************************

    - Detecta si el usuario tiene conexión a internet.
*/

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Estás conectado a internet');
    }else{
        console.log('No estás conectado a internet');
    }
}