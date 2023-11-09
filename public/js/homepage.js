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
            body: JSON. 
        })
    }
}