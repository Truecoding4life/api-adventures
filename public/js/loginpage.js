// Login and Sign up handler
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    
    if(type === 'danger'){
        
    }
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible " role="alert">`,
        `   <div class='d-flex align-item-center'> <i> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg> </i>  ${message} </div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    if(alertPlaceholder.lastChild){
        removeExtraNotification()
    }
    alertPlaceholder.append(wrapper)
}


function removeExtraNotification (){
    alertPlaceholder.removeChild(alertPlaceholder.lastChild)
}
const loginHandler = async (event) => {
    event.preventDefault();

   
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            appendAlert('User Authorized, please wait a second we are logging you in', 'secondary');
            setTimeout(() => {
                document.location.replace('/');
            }, 3 * 1000)

        } else {
            appendAlert('Fail authenticate user', 'danger');
            
            setTimeout(() => {
                alertPlaceholder.removeChild(alertPlaceholder.lastChild);
            }, 3000);
        }
    }
};


const signUpHandler = async (event) => {
    event.preventDefault();
const email = document.querySelector('#emailSignup').value.trim();
const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#passwordSignup').value.trim();
    if(email && password && username) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ 
                email: email, 
                username: username,  
                password:password, }), 
            headers: {'Content-Type': 'application/json'},
        })
        if(response.ok) {
            appendAlert('Sign Up Success, Welcome to API Adventure', 'secondary');
            setTimeout(() => {
                document.location.replace('/');
            }, 3 * 1000)
            
        } else {
            alert('Please enter a valid email and password');
            
        }   
    }
}

const loginBox = document.querySelector('#login');
const signUp = document.querySelector('#signUp');
loginBox.addEventListener('submit', loginHandler);
signUp.addEventListener('submit', signUpHandler);