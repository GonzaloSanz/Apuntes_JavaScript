
// 14.6. DELEGATION PARA PREVENIR EVENT BUBLING
// Otra forma de prevenir el problema.

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e =>{

    // Hacer una estructura condicional según la clase del elemento clickado
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en título');

    }else if(e.target.classList.contains('precio')){
        console.log('Diste click en el precio');

    }else if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
});

