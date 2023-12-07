document.addEventListener('DOMContentLoaded', () => {

const boxi = document.querySelector('.boxi');
const loginLinki = document.querySelector('.login-linki');
const registerLinki = document.querySelector('.register-linki');
const btLogin = document.querySelector('.btLogin');
const close = document.querySelector('.close');

registerLinki.addEventListener('click',()=> {
    boxi.classList.add('active');
});
loginLinki.addEventListener('click',()=> {
    boxi.classList.remove('active');
});
btLogin.addEventListener('click',()=> {
    boxi.classList.add('active-popup');
});
close.addEventListener('click',()=> {
    boxi.classList.remove('active-popup');
});





function validateLoginForm() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    if(email === "" || password === "") {
        alert("Please enter all fields.");
        return false;
    }

    console.log("User logged in successfully.");
    return true;
}

function validateRegisterForm() {
    var username = document.getElementById('registerUsername').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    if(username === "" || email === "" || password === "") {
        alert("Please enter all fields.");
        return false;
    }

    console.log("User registered successfully.");
    return true;
}

document.getElementById('loginSubmitButton').addEventListener('click', function(e) {
    e.preventDefault();
    validateLoginForm();
});

document.getElementById('registerSubmitButton').addEventListener('click', function(e) {
    e.preventDefault();
    validateRegisterForm();
});
});
















