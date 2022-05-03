
var form = document.querySelector("form");
var phone = document.getElementById("inputPhone");
var names = document.getElementById("inputName");
var email = document.getElementById("inputEmail");

// function isEmpty(e){
//     e.preventDefault();
//     var a = document.getElementById("inputPhone").value;
//     // var hasNumber = /[^a-zA-Z]/; 
//     // if(a ===""  || hasNumber.test(a) == true)
//     // {
//     //     alert("enter");
//     // }

    // console.log(validPhone(a));
// }

function required(x){
    if(x===""){
        return true;
    }
    return false;
}

function validName(x){
    var name = /^[a-zA-Z][a-zA-Z ]*$/ ;
    if(name.test(x) == true){
        return false;
    }
    return true;
}

function validEmail(x){
    var email =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.test(x) == true){
        return true;
    }
    return false;
}

function validPhone(x){
    // var phones=/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    var phones = /[2-9]{2}\d{8}/;
    if((phones.test(x) == true && x.length===10) || x.length ==0 ){
        return true;
    }
    return false;
}


const showError = (input,message) =>{
    // const errlabel = input.;
    // add the error class
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    alert(message);
};
const showSuccess = (input) =>{
    // const errlabel = input.;
    // add the error class
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    // alert(message);
};

// showError(names , "sadasd");
// showSuccess(names , "sdas");

// function checkName(){
//     var result = false;
//     // var temp = names;
//     if(required(names)){
//         showError(names , "Name is required");
//     }
//     else if(!validName(names)){
//         showError(names , "Enter your name in valid format");
//     }
//     else{
//         showSuccess(names);
//         result=true;
//     }
//     return result;

// }
function checkName(){
    var result = false;
    var temp = names.value.trim();
    if(required(temp)){
        showError(names, "Name is required");
    }
    else if(validName(temp)){
        showError(names , "Enter name in valid format" );
    }
    else{
        showSuccess(names);
        result=true;
    }
    return result;
    
}

function checkEmail(){
    var result = false;
    var temp = email.value.trim();
    if(required(temp)){
        showError(email , "Email is required");
    }
    else if(!validEmail(temp)){
        showError(email , "Enter email in valid format" );
    }
    else{
        showSuccess(email);
        result=true;
    }
    return result;
    
}



function checkPhone(){
    var result = false;
    var temp = phone.value.trim();

    if(!validPhone(temp)){
        showError(phone , "Enter phone number in valid format");
    }
    else{
        showSuccess(phone);
        result=true;
    }
    return true;
}






form.addEventListener('submit' , function(e){
    e.preventDefault();
    let isEmailValid = checkEmail();
    let isPhoneValid = checkPhone();
    let isNameValid = checkName();

    let isFormValid =  isEmailValid && isPhoneValid && isNameValid ;

    if(isFormValid){
        let details = {
            "Name" : inputName.value,
            "Phone" : inputPhone.value,
            "Email" : inputEmail.value,
        }
        localStorage.setItem('details' , JSON.stringify(details));
    }
})
// console.log