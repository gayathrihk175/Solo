var loginSubmission = document.querySelector("form")
var signupDetails = JSON.parse(localStorage.getItem("signupDetails"));
var changingName = document.querySelector("#changeSignUpName");

loginSubmission.addEventListener("submit",function(){
     event.preventDefault();

     var data={
        email: document.querySelector("#loginUsername").value,
         password: document.querySelector("#loginPassword").value,
     }



    if(signupDetails.userEmail == data.email && signupDetails.userPassword == data.password){
         alert("Login Successful")
         localStorage.setItem("signinData",JSON.stringify(data))
         window.location.href="index.html"
         changingName.innerText = "Hello !";
     }else{
         alert("User not found. Please create an account !");
         window.location.href="signup.html";
     }
 })