document.querySelector("form").addEventListener("submit",contactUs);

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const emailId = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const message = document.querySelector("#message");

function contactUs(){
    event.preventDefault();

    if(firstName.value && lastName.value && emailId.value && phoneNumber.value && message.value){
        alert("Thank You! Your form has been submitted.");
        location.reload();
    }else{
        alert("All fields are mandatory!");
    }
}
