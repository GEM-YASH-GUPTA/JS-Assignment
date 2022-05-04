
var form = document.querySelector("form");
var phone = document.getElementById("inputPhone");
var names = document.getElementById("inputName");
var email = document.getElementById("inputEmail");

var tablediv = document.getElementById("tablediv");
tablediv.style = "overflow: scroll; height: 250px;";

var heading = document.getElementById("heading");
heading.style = "text-align:center; color:goldenrod;"; 

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
    var phones = /[2-9]{2}\d{8}/;
    if((phones.test(x) == true && x.length===10) || x.length ==0 ){
        return true;
    }
    return false;
}


const showError = (input,message) =>{
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    alert(message);
};
const showSuccess = (input) =>{
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
};

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
    return result;
}


var count=1;
form.addEventListener('submit' , function(e){
    e.preventDefault();
    let isEmailValid = checkEmail();
    let isPhoneValid = checkPhone();
    let isNameValid = checkName();

    let isFormValid =  isEmailValid && isPhoneValid && isNameValid ;

    if(isFormValid){
        var array = [];

        var details = {
            "Name" : inputName.value,
            "Phone" : inputPhone.value,
            "Email" : inputEmail.value,
        }
        var array = JSON.parse(localStorage.getItem('details') || '[]');
        array.push(details);
        localStorage.setItem('details' , JSON.stringify(array));
    }

    
   var tbody = document.getElementById("tbody");
   var table = document.getElementById("table");
   var storage =  JSON.parse(localStorage.getItem('details'));

   if(isFormValid){
    var i = storage.length-1;   
       var row = document.createElement('tr');

       var column = document.createElement('td');
       var textnode = document.createTextNode(count);
       column.appendChild(textnode);
       row.appendChild(column);
       count++;

       var column = document.createElement('td');
       var textnode = document.createTextNode(storage[i].Name);
       column.appendChild(textnode);
       row.appendChild(column);
      

       var column = document.createElement('td');
       var textnode = document.createTextNode(storage[i].Phone);
       column.appendChild(textnode);
       row.appendChild(column);

       var column = document.createElement('td');
       var textnode = document.createTextNode(storage[i].Email);
       column.appendChild(textnode);
       row.appendChild(column);

       tbody.appendChild(row);
   }
})