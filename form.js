let myForm = document.getElementById("my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailMessage = document.getElementById("email-text");
let passwordMessage = document.getElementById("password-text");


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    hasError = false;
    if(email.value.trim() == ""){
        emailMessage.textContent = "Please fill the required field"
           hasError = true;
    }else if (!emailRegex.test(email.value)){
      emailMessage.textContent = "Please enter the correct format"
          hasError = true;
    }

    if(password.value.trim() == ""){
        passwordMessage.textContent = "Please fill the required field"
          hasError = true;
    }else if(password.value.trim().length < 6){
        passwordMessage.textContent = "Password must be 6 characters long"
            hasError = true;
    }

    if(hasError) return;
    
    let user = {
        email: email.value,
        password : password.value
    }

    localStorage.setItem("user",JSON.stringify(user));
    myForm.reset();

})

email.addEventListener("input", () => {
    if (emailRegex.test(email.value.trim())) {
        emailMessage.textContent = "";
    }
});

password.addEventListener("input", () => {
    if (password.value.length >= 6) {
        passwordMessage.textContent = "";
    }
});

