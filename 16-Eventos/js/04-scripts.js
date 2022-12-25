
// 14.4. EVENTOS SUBMIT A UN FORMULARIO

const formulario = document.querySelector('#formulario');

// submit -> Cuando se presiona el botón que tiene el type submit
formulario.addEventListener('submit', (e) =>{
    e.preventDefault(); // Previene la acción que realizaría (enviar el formulario) y de error en éste caso.
    
    console.log(e.target.method); // ver que método se usa (POST)
    console.log(e.target.action); // Ver a que enlace lleva
});