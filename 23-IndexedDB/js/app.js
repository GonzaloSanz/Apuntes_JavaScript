'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es IndexedDB?                    *
*                                                         *
***********************************************************

    - Es una API en JavaScript para almacenar grandes cantidades de datos estructurados.
    - A diferencia de Storage, puede almacenar cualquier tipo de datos soportado en JavaScript.
    - No tiene límite (Storage son 5 MB) pero con archivos de más de 50 MB va a preguntar por permisos.
    - Storage es buena solución para almacenar poca información (carritos abandonados o JSON Web Token).
    - IndexedDB es una base de datos completa, pero no es recomendable para almacenar passwords o tarjetas de crédito ya que es visible.
    - Se encuentra en F12 -> Aplicación -> Almacenamiento -> IndexedDB.
*/

let DB;

document.addEventListener('DOMContentLoaded', () => {
    miDB();

    // Esperamos cinco segundos a que se cree la base de datos, para insertar el cliente
    setTimeout(() => {
        crearCliente();
    }, 5000);
});

/*
***********************************************************
*                                                         *
*                 Crear la base de datos                  *
*                                                         *
***********************************************************
*/

function miDB() {

    /*
        window.indexedDB.open(nombre_bbdd, versión)

        - Crear la base de datos con una versión específica. 
    */

    // Base de datos con version 1.0
    let miDB = window.indexedDB.open('bbdd_clientes', 1);

    /*
        .onerror

        - En caso de que exista algún error al crearse (algunos navegadores no soporta IndexedDB)
    */

    miDB.onerror = function () {
        console.log('Hubo un error al crear una base de datos');
    }

    /*
        .onsuccess

        - La base de datos se creó correctamente.
    */

    miDB.onsuccess = function () {
        console.log('¡Base de datos creada!');

        DB = miDB.result;
    }

    /*
        .onupgradeneeded

        - Configurar la base de datos.
        - Sólo se va a ejecutar la primera vez.
    */

    miDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        /*
            -createObjectStore()

            - Creación del ObjectStore, un almacén de datos (parecido a una tabla).
            - Si el nombre del almacén ya existe, dará error. 
        */

        const objectStore = db.createObjectStore('clientes', {
            keyPath: 'id', // nombre de la clave primaria
            autoIncrement: true // la clave primaria será autoincremental
        });

        // Definir las columnas (nombre_campo, keyPath (como hace referencia a los campos), {opciones})
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
    }
}

/*
***********************************************************
*                                                         *
*                    Crear un registro                    *
*                                                         *
***********************************************************

    - Las transacciones permiten operar con la base de datos.
*/

function crearCliente() {
    /*
        Modos para la transacción:

        readonly -> Habilitar el modo de lectura.
        readwrite -> Habilitar el modo de lectura y escritura.
    */

    // Definimos el almacén y el modo de la transacción
    let transaction = DB.transaction(['clientes'], 'readwrite');

    // Comprobar si la transacción se ha completado
    transaction.oncomplete = function () {
        console.log('Transacción completada');
    }

    transaction.onerror = function () {
        console.log('Error en la transacción');
    }

    // Definimos el almacén donde se va a guardar el registro
    const objectStore = transaction.objectStore('clientes');

    // Creamos el objeto
    const nuevoCliente = {
        telefono: 678120394,
        nombre: 'Gonzalo',
        email: 'gonzalosanz@gmail.com'
    }

    /*
        Operaciones:
        
        .add -> Añadir registro
        .put -> Actualizar registro
        .delete -> Eliminar registro
    */

    // Insertamos el objeto a la base de datos
    objectStore.add(nuevoCliente);
}

