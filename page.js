const fullName= document.getElementById("full-name") ;
const email = document.getElementById("email") ;
const password= document.getElementById("password") ;
const age= document.getElementById("age") ;
const comments= document.getElementById("comments") ;
const termsCheckbox = document.getElementById("terms-checkbox");
const myForm = document.getElementById("my-form");
const text = document.getElementById("text")
const emailMessage = document.getElementById("email-message")
const termsMessage = document.getElementById("terms-message");
const commentMessage = document.getElementById("comment-message");
const passwordMessage = document.getElementById("password-message")
const nameMessage = document.getElementById("name-message");
const genderRadios = document.querySelectorAll('input[name="gender"]');

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;


myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
     let hasError = false;

    if( !age.value.trim()){

     text.textContent = "This field is required";
     hasError = true;

    }
    if(!fullName.value.trim()){
           nameMessage.textContent = "FullName is required";
     hasError = true;
    }

        if(!email.value.trim()){
           emailMessage.textContent = "Email is required";
     hasError = true;
    }else if(!emailRegex.test(email.value)){
     emailMessage.textContent = "Invalid Email format";
     hasError = true;
    }

    if(!password.value.trim()){
        passwordMessage.textContent = "Password is required";
     hasError = true;
    }else if(password.value.length < 6){
          passwordMessage.textContent = "Password must be 6 characters long ";
     hasError = true;
    }

    if(!comments.value.trim()){
           commentMessage.textContent = "Add comment";
     hasError = true;
    }

   const genderChecked = Array.from(genderRadios).some(r => r.checked);
    if(!genderChecked) hasError = true;
    
    if(!termsCheckbox.checked){
     termsMessage.textContent="Please accept terms and conditions";
     hasError = true;
    }

      if (!hasError) {
        alert("Form submitted successfully!");
        myForm.reset(); 
    }
    
})


const fields = [
    { input: fullName, message: nameMessage, validator: val => val.trim() !== "" },
    { input: email, message: emailMessage, validator: val => emailRegex.test(val.trim()) },
    { input: password, message: passwordMessage, validator: val => val.length >= 6 },
    { input: age, message: text, validator: val => val.trim() !== "" },
    { input: comments, message: commentMessage, validator: val => val.trim() !== "" },
    { input: termsCheckbox, message: termsMessage, validator: el => el.checked }
];

// Add event listener for all fields
fields.forEach(field => {
    const eventType = field.input.type === "checkbox" ? "change" : "input";

    field.input.addEventListener(eventType, () => {
        const value = field.input.type === "checkbox" ? field.input : field.input.value;
        if (field.validator(value)) {
            field.message.textContent = "";
        }
    });
});
