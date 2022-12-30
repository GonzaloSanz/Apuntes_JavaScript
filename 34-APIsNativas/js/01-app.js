'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es una API?                      *
*                                                         *
***********************************************************

    - Significa 'Interfaz de Programación de Aplicaciones'.
    - Es un mecanismo que permite a dos componentes de software comunicarse entre sí, mediante un conjunto de definiciones y protocolos.
    - Establece cómo un módulo de un software se comunica o interactúa con otro, para cumplir una o muchas funciones.
    - Casi todas las APIs modernas de JavaScript utilizan promises.
*/

/*
***********************************************************
*                                                         *
*                  API de notificación                    *
*                                                         *
***********************************************************

    - Permite configurar y mostrar notificaciones de escritorio al usuario.
*/

// Pedir permiso de notificaciones
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('El resultado es:', resultado); // Si se acepta, será granted
        })
});

// Ver la notificación
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {

    // Si se han permitido las notificaciones
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo JavaScript'
        });

        // Ir a un sitio web al hacer click en la notificación
        notificacion.onclick = function () {
            window.open('https://www.google.es');
        }
    }
});