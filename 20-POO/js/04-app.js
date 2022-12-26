'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    Getters y Setters                    *
 *                                                         *
 ***********************************************************

    - Los getters (accedentes) y setters (mutadores) son métodos de acceso a los atributos de una clase.
    - Los accedentes recuperan el valor de un atributo.
    - Los mutadores asignan un valor a un atributo.
*/

class Cliente {

    // Atributo privado
    // Sólo accesible desde la clase (métodos)
    #nombre;

    // Accedente (Getter)
    getNombre(){
        return this.#nombre;
    }

    // Mutador (Setter)
    setNombre(nombre){
        this.#nombre = nombre;
    }
}

const gonzalo = new Cliente();

// Cambiar el nombre
gonzalo.setNombre('Gonzalo');

// Obtener el nombre actual
console.log(gonzalo.getNombre());
