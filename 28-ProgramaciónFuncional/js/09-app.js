'use strict'

/*
***********************************************************
*                                                         *
*                   ¿Qué es composition?                  *
*                                                         *
***********************************************************

    - Se trata de una alternativa a las clases.
    - Consiste en crear las funciones que se necesiten, e ir asignándolas al objeto.

*/

const obtenerNombre = info => ({ // ({ }) permite adjuntar una función dentro de otra 
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardandoEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
}); 

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo Electrónico: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign( // Asignar al objeto
        info,
        obtenerNombre(info),
        guardandoEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardandoEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Gonzalo', null, 'Mercadona');
cliente.mostrarNombre();
cliente.agregarEmail('gonzalo@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('-------------------------------------------');

const empleado = Empleado('Juan', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('juan@hotmail.es');
empleado.mostrarEmail();
empleado.mostrarPuesto();