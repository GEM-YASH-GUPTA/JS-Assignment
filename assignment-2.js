
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
        // localStorage.setItem('details' , JSON.stringify(details));

        var array = JSON.parse(localStorage.getItem('details') || '[]');
        array.push(details);
        localStorage.setItem('details' , JSON.stringify(array));
        

        
        // array = JSON.parse(localStorage.getItem('details') || '[]');
        // console.log(array);
        // var tabs =document.getElementById("sec-tabs");

        // var obj =JSON.parse(localStorage.getItem('details'));
        // const test = Object.values(obj);
        // console.log(test);
        // Object.values(obj).forEach(val => tabs.appendChild(document.createTextNode(val)));

        // var text = document.createTextNode(Object.values(obj)) ;
        // tabs.appendChild(text);
        // console.log(obj.Name);
    }

    
   var tbody = document.getElementById("tbody");
   var table = document.getElementById("table");
   var storage =  JSON.parse(localStorage.getItem('details'));
//    var count=0;

   if(isFormValid){
    var i = storage.length-1;   
//    for(var i =0 ; i<storage.length ; i++){
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
    
//    }
//    console.log(data);

    // for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    //     var text = document.createTextNode( localStorage.getItem( localStorage.key( i ) ) );
        
    //   }

      

   

    // for(var key in details)
    // {
    //     var text = document.createTextNode(localStorage.getItem('details[0]'));
    //     tabs.appendChild(text);

    // }

})
// var tabs =document.getElementById("sec-tabs");

// console.log