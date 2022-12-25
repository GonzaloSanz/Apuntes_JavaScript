'use strict'

/*
 ***********************************************************
 *                                                         *
 *                   ¿Qué es Storage?                      *
 *                                                         *
 ***********************************************************
 
    - El objeto Storage nos permite almacenar datos de manera local en el navegador, sin necesidad de realizar
    conexiones a base de datos.
    - Se encuentra en: F12 -> Aplicación -> Almacenamiento
*/

/*
 ***********************************************************
 *                                                         *
 *             Local Storage vs Session Storage            *
 *                                                         *
 ***********************************************************
 
    - Con Local Storage puedes apagar el ordenador y los datos seguirán persistiendo en el navegador.
    - Con Sesion Storage si se cierra el navegador, se pierden.
*/

/*
 ***********************************************************
 *                                                         *
 *                    Almacenar datos                      *
 *                                                         *
 ***********************************************************
*/

/*
    .setItem(clave, valor)

    - Agregar elementos al Storage.
*/

localStorage.setItem('nombre', 'Gonzalo');

sessionStorage.setItem('lugar', 'España');

/*
    JSON.stringify(valor)

    - Sólo se pueden almacenar strings en Storage.
    - Con este método, convertimos un objeto o array a string.
*/

const producto = {
    nombre : "Monitor 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

/*
 ***********************************************************
 *                                                         *
 *                    Recuperar datos                      *
 *                                                         *
 ***********************************************************
*/

/* 
    .getItem(clave)

    - Recupera datos del Storage.
    - Si intentas recuperar un valor que no existe, devuelve null.
*/

const nombre = localStorage.getItem('nombre');
console.log(nombre);

/* 
    JSON.parse()
    
    - Convertir string a objeto o array. 
*/
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));

/*
 ***********************************************************
 *                                                         *
 *                   Actualizar datos                      *
 *                                                         *
 ***********************************************************
*/

const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo mes');

localStorage.setItem('meses', JSON.stringify(mesesArray));

/*
 ***********************************************************
 *                                                         *
 *                    Eliminar datos                       *
 *                                                         *
 ***********************************************************
*/

/*
    .removeItem(clave)

    - Eliminar un dato del Storage, a través de su clave.
*/

localStorage.removeItem('nombre');

/*
    .clear()

    - Borrar todos los datos del Storage.
*/

localStorage.clear();