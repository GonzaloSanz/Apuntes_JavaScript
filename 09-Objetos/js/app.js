'use strict'

/*
    1. ¿QUÉ ES UN OBJETO?

    - Es un contenedor de propiedades, teniendo cada una un nombre (clave) y un valor.
*/

/* 
    2. OBJETO LITERAL

    - Las propiedades están declaradas textualmente en el código.
*/

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

// objeto.propiedad -> Acceder a la propiedad
console.log(producto.nombre);

// objeto['propiedad'] -> Otra forma poco común
console.log(producto['nombre']); 

// objeto.propiedad = valor -> Agregar una nueva propiedad
producto.imagen = "imagen.jpg";
console.log(producto);

// delete objeto.propiedad -> Eliminar la propiedad
delete producto.disponible;
console.log(producto);

/* 
    3. DESESTRUCTURACIÓN DE OBJETOS

    - Ofrece la posibilidad de poder coger los datos de objetos o arrays directamente y de manera múltiple, para extraerlos a variables o constantes.
*/

// Extraer el nombre del producto y convertirlo en una constante
const {nombre} = producto;
console.log(nombre);

// Múltiple extracción
const{precio, disponible} = producto;
console.log(precio);
console.log(disponible);


// Objetos dentro de otros objetos (objetos anidados)
const productoAnidado = {
    nombre2: "Monitor 20 pulgadas",
    precio2: 300,
    disponible2: false,
    informacion : {
        medidas: {
            peso: '1kg',
            altura: '50cm'
        },
        fabricacion : {
            pais: 'España'
        }
    }
}

// Acceder a las medidas
console.log(productoAnidado.informacion.medidas);

// Acceder al país de fabricación
console.log(productoAnidado.informacion.fabricacion.pais);


/*
    4. DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
*/

// Crear las variables nombre, informacion, fabricacion y país
const {nombre2, informacion,  informacion : {fabricacion, fabricacion: {pais}}} = productoAnidado;
console.log(nombre2);
console.log(informacion);
console.log(fabricacion);
console.log(pais);


/* 
    5. CURIOSIDAD SOBRE LOS OBJETOS

    - Aunque el objeto esté declarado como una variable constante, sus propiedades pueden modificarse y borrarse.
*/ 

const producto3 = {
    precio: 450,
}

producto3.precio = 678;
console.log(producto3.precio); // 678


/*
    6. CONGELAR OBJETOS

    - El objeto se comportará como una verdadera constante, no puede cambiar su valor.
    - Necesario el uso del modo estricto 'use strict' en el archivo.
*/

// Object.freeze() -> Congelar un objeto
Object.freeze(producto);

// Object.isFrozen() -> Saber si un objeto está congelado
console.log(Object.isFrozen(producto)); // true

/*
    7. SELLAR OBJETOS

    - A diferencia de freeze, se podrán modificar las propiedades, pero no insertar ni borrar.
*/ 

// Object.seal() -> Sellar un objeto
Object.seal(productoAnidado);

// Sólo permitirá modificar
productoAnidado.disponible2 = true; 

// Object.isSealed() -> Saber si un objeto está sellado
console.log(Object.isSealed(productoAnidado)); // true


/*
    8. UNIR DOS OBJETOS
*/

// Object.assign(o1, o2...) -> Une varios objetos en uno sólo.

const jugador = {
    nombre: 'Lionel',
    apellido: 'Messi',
    equipo: 'FC Barcelona'
}

const medidas = {
    peso: '70kg',
    altura: '1.69m'
}

const ficha = Object.assign(jugador, medidas);
console.log(ficha);

// Otra alternativa más utilizada es el operador Rest/Spread (...)
const ficha2 = {...jugador, ...medidas};
console.log(ficha2);


/* 
    9. THIS

    - Se refiere a los valores que existen en el propio objeto. 
*/

const producto4 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto4.mostrarInfo();


/* 
    10. CONSTRUCTOR DE OBJETOS

    - Permite automatizar la creación de objetos, sobretodo cuando son varios. 
*/

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Crear el producto y mostrarlo
const productoAutomatizado = new Producto('Televisión 4K', 1500);
console.log(productoAutomatizado);


/*
    11. OTROS MÉTODOS ÚTILES
*/

// Object.keys() -> Obtener las llaves del objeto.
console.log(Object.keys(productoAutomatizado)); // (3) ['nombre', 'precio', 'disponible']

// Object.values() -> Obtener los valores del objeto.
console.log(Object.values(productoAutomatizado)); // (3) ['Televisión 4K', 1500, true]

// Object.entries() -> Obtener las llaves y sus valores, la combinación de las dos anteriores.
console.log(Object.entries(productoAutomatizado)); // (3) [Array(2), Array(2), Array(2)]
