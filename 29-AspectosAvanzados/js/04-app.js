'use strict'

/*
***********************************************************
*                                                         *
*                 ¿Qué es implicit binding?               *
*                                                         *
***********************************************************

    - Con la palabra reservada this, muestra en que lugar va a encontrar los datos.
*/

const usuario = {
    nombre: 'Gonzalo',
    edad: 22,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`); // En este mismo objeto encontrarás los valores
    },
    mascota : {
        nombre: 'Ajax',
        edad: 2,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`); // En el objeto mascota
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();