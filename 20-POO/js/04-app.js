'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    Getters y Setters                    *
 *                                                         *
 ***********************************************************

    - Los accedentes (getters) permiten acceder a la propiedades del objeto.
    - Los mutadores (setters) modifican las propiedades del objeto.
*/

class Cliente {

    // Propiedad privada
    // Sólo accesible desde la clase (métodos)
    #nombre;

    // Accedente (Getter)
    setNombre(nombre){
        this.#nombre = nombre;
    }

    // Mutador (Setter)
    getNombre(){
        return this.#nombre;
    }
}

const gonzalo = new Cliente('Gonzalo', 600);

// Obtener el nombre actual
console.log(gonzalo.getNombre());

// Cambiar el nombre
gonzalo.setNombre('OtroNombre');