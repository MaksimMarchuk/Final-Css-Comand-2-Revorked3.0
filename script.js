const email = document.getElementById("email");
const password = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const policy = document.getElementById("policy"); 
const regBtn = document.getElementById("reg-btn");


function validateEmail() {
    const value = email.value;
    const error = document.getElementById("emailError");

    if (!value.includes("@")) {
        error.textContent = "Invalid email";
        return false; 
    }

    error.textContent = ""; 
    return true;
}


function validatePassword() {
    const value = password.value;
    const error = document.getElementById("passwordError");

    if (value.length < 8) {
        error.textContent = "Minimum 8 characters";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateConfirm() {
  const error = document.getElementById("confirmError");

  if (password.value !== confirmPass.value) {
    error.textContent = "Passwords do not match";
    return true;
  }
}

function checkForm() {
    const isValid =
        validateEmail() &&
        validatePassword() &&
        validateConfirm() &&
        policy.checked;

    regBtn.disabled = !isValid;
}


email.addEventListener("input", checkForm);
password.addEventListener("input", checkForm);
confirmPass.addEventListener("input", checkForm);
policy.addEventListener("change", checkForm);



showLogin.addEventListener("click", (e) => {
    e.preventDefault(); 
    registerForm.style.display = "none";
    loginForm.style.display = "flex"; 
});


toRegLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
});







// const btn = document.getElementById("reg-continue-btn");
// function checkForm() {
//     const isValid =
//         nameInput.value.trim() !== "" &&
//         email.value.trim() !== "" &&
//         password.value.length >= 8 &&
//         confirmPass.value === password.value &&
//         policy.checked;

//     btn.disabled = !isValid;
// }

// nameInput.addEventListener("input", checkForm);
// email.addEventListener("input", checkForm);
// password.addEventListener("input", checkForm);
// confirmPass.addEventListener("input", checkForm);
// policy.addEventListener("change", checkForm);








// const form = document.querySelector('.reg-form');
// const btn = document.querySelector('.btn-submit');
// const inputs = form.querySelectorAll('input[required]');
// const checkbox = document.querySelector('.check-item input[required]');
// const toggleLink = document.querySelector('.desktop-link a');
// const title = document.querySelector('h1');


// function checkForm() {
//     let allFilled = true;

//     inputs.forEach(input => {
//         if (input.value.trim() === "") allFilled = false;
//     });

   
//     if (allFilled && checkbox.checked) {
//         btn.style.backgroundColor = "#E9C441"; 
//         btn.disabled = false;
//     } else {
//         btn.style.backgroundColor = "transparent"; 
//         btn.style.opacity = "0.5";
//         btn.disabled = true;
//     }
// }


// inputs.forEach(input => input.addEventListener('input', checkForm));
// checkbox.addEventListener('change', checkForm);


// toggleLink.addEventListener('click', (e) => {
//     e.preventDefault(); 

//     if (title.innerText === "CREATE ACCOUNT") {
//         title.innerText = "LOG IN";
//         btn.innerText = "LOG IN";
        
//         form.querySelector('input[placeholder="Name"]').style.display = "none";
//         form.querySelector('input[placeholder="Confirm password"]').style.display = "none";
//         document.querySelector('.checks').style.display = "none";
//     } else {
//         location.reload(); 
//     }
// });


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     window.location.href = "home.html"; 
// });


// checkForm();






// const email = document.getElementById("email");
// const name = document.getElementById("name");
// const password = document.getElementById("pass");
// const ConfirmPass = document.getElementById("confirm-pass");
// const checkbox = document.getElementById("policy");
// const RegButton = document.getElementById("reg-btn");


// function validateEmail(){
//     const value = email.value;
//     const error = document.getElementById("emailError");

//     if(!value.includes("@")){
//         error.textContent = "Invalid email";
//     }

//     error.textContent = "";
//     return true
    
// }

// function validatePassword() {
//   const value = password.value;
//   const error = document.getElementById("passwordError");

//   if (value.length < 8) {
//     error.textContent = "Minimum 8 characters";
//     return false;
//   }

//   error.textContent = "";
//   return true;
// }

// function validateConfirm() {
//   const error = document.getElementById("confirmError");

//   if (password.value !== confirmPassword.value) {
//     error.textContent = "Passwords do not match";
//     return false;
//   }

//   error.textContent = "";
//   return true;
// }

// function checkForm() {
//   const isValid =
//     validateEmail() &&
//     validatePassword() && 
//     validateConfirmPass() &&  
//     policy.checked;     

//   const btn = document.getElementById("reg-btn");
  
//   btn.disabled = !isValid;
// }