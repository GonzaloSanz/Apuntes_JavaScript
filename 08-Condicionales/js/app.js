
/*
 ***********************************************************
 *                                                         *
 *                ¿Qué es un condicional?                  *
 *                                                         *
 ***********************************************************
 
    - Es una estructura de control que nos permite evaluar una condición.
    - Dependiendo del resultado, podrá ejecutar una cosa u otra.
*/

/*
 ***********************************************************
 *                                                         *
 *                Operadores de comparación                *
 *                                                         *
 ***********************************************************
 
    >       Mayor que
    <       Menor que
    >=      Mayor o igual que
    <=      Menor o igual que
    ==      Igual
    ===     Igual estricto
    !=      Diferente
    !==     Diferente estricto
    &&      Y
    ||      O
    !       No
*/

const edad = 18;

/*
 ***********************************************************
 *                                                         *
 *                   Condicional if()                      *
 *                                                         *
 ***********************************************************
*/

if (edad < 18) {
    console.log('Eres menor de edad.');

} else if (edad === 18) {
    console.log('Tienes 18 años.');

} else {
    console.log('Tienes más de 18 años');
}

/*
 ***********************************************************
 *                                                         *
 *                    Operador ternario                    *
 *                                                         *
 ***********************************************************
 
    - Se trata de un condicional if() mucho más rápido.
    - La interrogación (?) representa el valor true y los dos puntos (:) false.
*/

const numero = 3;

console.log(numero > 5 ? 'El número es mayor que 5' : 'El número es menor o igual a 5');


/*
 ***********************************************************
 *                                                         *
 *               Operador ternario anidado                 *
 *                                                         *
 ***********************************************************
*/

const autenticado = false;
const puedoPagar = false;

console.log(autenticado ? puedoPagar ? 'Está autenticado y puede pagar' : 'Está autenticado, pero no puede pagar' : 'No está autenticado');


/*
 ***********************************************************
 *                                                         *
 *                   Condicional Switch                    *
 *                                                         *
 ***********************************************************
*/

const metodoPago = 'Tarjeta';

switch (metodoPago) {
    case 'efectivo':
        console.log('Pagando en efectivo....');
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`Aun no has seleccionado un método de pago o método de pago no soportado`);
        break;
}
