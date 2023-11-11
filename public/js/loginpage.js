// Login and Sign up handler

const loginHandler = async (event) => {
    event.preventDefault();
const email = document.querySelector('#email').value.trim();
const password = document.querySelector('#password').value.trim();
    if(email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({email, password}), 
            headers: {'Content-Type': 'application/json'},
        })
        if(response.ok) {
            alert('You are now logged in')
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
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
            alert('You are now signed up successful')
            document.location.replace('/dashboard');
        } else {
            alert('Please enter a valid email and password');
        }   
    }
}

const loginBox = document.querySelector('#loginBox');
const signUp = document.querySelector('#signUp');
loginBox.addEventListener('submit', loginHandler);
signUp.addEventListener('submit', signUpHandler);