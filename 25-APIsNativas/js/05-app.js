'use strict'

/*
***********************************************************
*                                                         *
*                 API de página visible                   *
*                                                         *
***********************************************************

    - Detecta si estamos viendo la página principal o no.
*/

document.addEventListener('visibilitychange', () => {
    // Ejemplo: Si se sale de la página, pausa el vídeo. Si vuelve, continua reproduciéndolo.
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la función para reproducir el vídeo...');
    }else{
        console.log('Pausar el vídeo...');
    }
});