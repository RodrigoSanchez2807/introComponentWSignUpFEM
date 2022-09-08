const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const form = document.querySelector('#form-sub');

//Regular expression for email validation
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListeners();
//Event listeners
function eventListeners() {

    firstName.addEventListener('blur', validation);
    lastName.addEventListener('blur', validation);
    email.addEventListener('blur', validation);
    password.addEventListener('blur', validation);

    form.addEventListener('submit', validation);

}

function validation(e) {

    e.preventDefault();
    
    switch (e.target.name) {
        case "first_Name":
            if(firstName.value === '') {
                firstName.classList.add('error'); 

                document.getElementById('message').style.display = 'block';
                
            }else{
                firstName.classList.remove('error');

                document.getElementById('message').style.display = 'none';
            }
        break;
    
        case "last_Name":
            if(lastName.value === '') {
                lastName.classList.add('error'); 

                document.getElementById('message2').style.display = 'block';
                
            }else{
                lastName.classList.remove('error');

                document.getElementById('message2').style.display = 'none';
            }
        break;
    
        case "e-mail":

            if(email.type === 'email'){

               if(regex.test( email.value)){

                email.classList.remove('error'); 

                email.placeholder = 'Email Address';
        
                document.getElementById('message3').style.display = 'none';


               }else{

                email.classList.add('error');

                email.placeholder = 'email@example.com';
    
                document.getElementById('message3').style.display = 'block';
               }

            }

            if(email.value === '') {
            
                email.classList.add('error');

                email.placeholder = 'email@example.com';
    
                document.getElementById('message3').style.display = 'block';
         
            }
            
        break;
    
        case "passwd":
            
            if(password.value === '') {
                password.classList.add('error'); 

                document.getElementById('message4').style.display = 'block';
                
            }else{
                password.classList.remove('error');

                document.getElementById('message4').style.display = 'none';
            }
        break;
    }
}