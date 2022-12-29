'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es un promise?                   *
*                                                         *
***********************************************************

    - Es un objeto que representa la terminación o el fracaso de una operación asíncrona.
    - Se pueden pasar dos parámetros: 
        + resolve -> Lo que se ejecuta en caso de éxito
        + reject -> Lo que se ejecuta en caso de fallo.
*/

const aplicarDescuento = new Promise ( (resolve, reject) => {

    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});


/*
***********************************************************
*                                                         *
*                 Resultado del promise                   *
*                                                         *
***********************************************************

    - puede tener tres valores posibles:
        - fullfilled: El promise se complió.
        - rejected: EL Promise no se cumplió
        - pending: No se ha cumplido y tampoco fue rechazado.
*/

console.log(aplicarDescuento); // Promise {<rejected>: 'No se pudo aplicar el descuento'}

aplicarDescuento
    .then( resultado => console.log(resultado)) // No entra aquí porque la promesa ha fallado
    .catch(error => console.log(error)); // No se pudo aplicar el descuento