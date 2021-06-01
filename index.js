const btn = document.getElementById("btn");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameErr = document.getElementById("first-name-err");
const lastNameErr = document.getElementById("last-name-err");
const emailErr = document.getElementById("email-err");
const passwordErr = document.getElementById("password-err")


btn.addEventListener("click", e =>{
    e.preventDefault();

    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,7})+$/;

    if(firstName.value === ""){
        firstNameErr.style.display = "block";
        firstName.style.border = "2px solid red";
    }
    if(lastName.value === ""){
        lastNameErr.style.display = "block"
        lastName.style.border = "2px solid red";
    }
    if(reg.test(email.value) === false){
        emailErr.style.display = "block"
        email.style.border = "2px solid red";
    }
    if(password.value === ""){
        passwordErr.style.display = "block"
        password.style.border = "2px solid red";
    }
})