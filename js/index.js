// Variables
const form = document.querySelector('#form');
// const btn = document.querySelector('#btn-trial');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


eventListeners();
//Event listeners
function eventListeners() {

    firstName.addEventListener('blur', validation);
    lastName.addEventListener('blur', validation);
    email.addEventListener('blur', validation);
    password.addEventListener('blur', validation);
    
}

//Functions

// function starting (){

// }

function validation(e){
    e.preventDefault();

    if(e.target.value.length > 0){
        //Hide icon
        e.target.classList.remove('error'); 
    } else{
        //Show icon
        e.target.classList.add('error'); 

        showMessage();
    }
  
    // para enviar el formulario

    // if(er.test(email.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
    //     console.log('Pasaste la validacion');
    //     btnEnviar.disabled = false;
    //     btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    // }
}

function showMessage() {
    //Show message
    const warning = document.createElement('p'); 
    warning.textContent = 'probando';
    warning.classList.add('message');    
    lastName.appendChild(warning);
}