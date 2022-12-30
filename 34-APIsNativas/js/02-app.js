'use strict'

/*
***********************************************************
*                                                         *
*                    API de observación                   *
*                                                         *
***********************************************************

    - Cuando un elemento esté visible o no, lo notificará.
*/

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            console.log('Ya está visible');
        }
    });

    // Le decimos el elemento a observar
    observer.observe(document.querySelector('.premium'));
});