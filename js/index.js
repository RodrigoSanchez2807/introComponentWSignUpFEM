// Variables
const form = document.querySelector('#form');
const btn = document.querySelector('#btn-trial');

const firstName = document.querySelector('#first-name');
const LastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

//Event listeners
function eventListeners() {

    // form.addEventListener('DOMContentLoaded', validate);

    form.addEventListener('submit', validate);
    

    

}




function validate(e){
    e.preventDefault();

    console.log('diste click en el botón');



    
    
    
    
    
    
    
    
    // para enviar el formulario

    // if(er.test(email.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
    //     console.log('Pasaste la validacion');
    //     btnEnviar.disabled = false;
    //     btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    // }


    
}