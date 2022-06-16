
var formSubmission = document.querySelector("form").addEventListener("submit",function(){

    event.preventDefault();

    var signupData = {
        userName : document.querySelector("#customerName").value,
        userNumber : document.querySelector("#customerNumber").value,
        userEmail: document.querySelector("#customerEmail").value,
        userPassword : document.querySelector("#customerPassword").value,
        userPasswordConfirm : document.querySelector("#customerPasswordConf").value,
    }
    localStorage.setItem("signupDetails",JSON.stringify(signupData));
    window.location.href="signin.html";



 });
