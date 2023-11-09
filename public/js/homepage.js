const email = document.getElementById ('email').value.trim();
const password = document.getElementById('password').value.trim();
const emailSignup = document.getElementById('emailSignup').value.trim();
const firstName = document.getElementById('firstName').value.trim();
const lastName = document.getElementById('lastName').value.trim();
const passwordSignup = document.getElementById('passwordSignup').value.trim();

const loginBox = document.getElementById('loginBox');
const signUp = document.getElementById('signUp');

loginBox.addEventListener('submit', loginHandler);
signUp.addEventListener('submit', signUpHandler);

async function loginHandler(event) {
    if(email && password) {
        const respond = await fetch('/api/login', {
            methods: 'POST',
            body: JSON.stringify({email, password}), 
            headers: {'Content-Type': 'application/json'},
        })
        if(respond.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }   
    }    
};
async function signUpHandler(event) {
    if(email && password) {
        const respond = await fetch('/api/signup', {
            methods: 'POST',
            body: JSON.stringify({emailSignup, firstName, lastName, passwordSignup}), 
            headers: {'Content-Type': 'application/json'},
        })
        if(respond.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Please enter a valid email and password');
        }   
    }
}