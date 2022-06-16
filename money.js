var moneyMakingButton = document.querySelector("#getStarted");
moneyMakingButton.addEventListener("click",function(){
    window.location.href = "signup.html";
})

var heading = document.createElement("p");
heading.setAttribute("id","head");
heading.innerText = "Earn Money Online | Working from Home";


var moneyBox = document.createElement("div");
moneyBox.setAttribute("id","mainMoneyBox");

var moneyBoxOne = document.createElement("div");
var numberOne = document.createElement("p");
numberOne.innerText = "1";
var titleOne = document.createElement("p");
titleOne.innerText = "Upload Products that you have!";
var pointOne = document.createElement("li");
pointOne.innerText = "Create your Account by clicking here";
var pointTwo = document.createElement("li");
pointTwo.innerText = "Verify your account";
var pointThree = document.createElement("li");
pointThree.innerText = "Go to Dashboard";
var pointFour = document.createElement("li");
pointFour.innerText = "Pick any product. For example mobile phone, or any item.";
var pointFive = document.createElement("li");
pointFive.innerText = "Search for it in the Database";
var pointSix = document.createElement("li");
pointSix.innerText = "If it's available, upload a photograph.";
var pointSeven = document.createElement("li");
pointSeven.innerText = "Please mention the price you bought it at.";

var moneyBoxTwo = document.createElement("div");
var numberTwo = document.createElement("p");
numberTwo.innerText = "2";
var titleTwo = document.createElement("p");
titleTwo.innerText = "Provide a brief description of how to use!";
var pointOneA = document.createElement("li");
pointOneA.innerText = "Describe the product you just uploaded.";
var pointTwoA = document.createElement("li");
pointTwoA.innerText = "Mention from where you bought it, online or offline";
var pointThreeA = document.createElement("li");
pointThreeA.innerText = "A Video increases your chances of getting a product approved, but it is not mandatory to upload videos.";

var moneyBoxThree = document.createElement("div");
var numberThree = document.createElement("p");
numberThree.innerText = "3";
var titleThree = document.createElement("p");
titleThree.innerText = "On Approval get scratch cards and earn money!";
var pointOneB = document.createElement("li");
pointOneB.innerText = "We will review the products you uploaded.";
var pointTwoB = document.createElement("li");
pointTwoB.innerText = "On approval you will get a scratch card, which can be money or coupon code.";
var pointThreeB = document.createElement("li");
pointThreeB.innerText = "Make sure you provide the correct bank details or UPI Id, to which you want the money to transfer";

moneyBoxOne.append(numberOne,titleOne,pointOne,pointTwo,pointThree,pointFour,pointFive,pointSix,pointSeven);
moneyBoxTwo.append(numberTwo,titleTwo,pointOneA,pointTwoA,pointThreeA);
moneyBoxThree.append(numberThree,titleThree,pointOneB,pointTwoB,pointThreeB);
moneyBox.append(moneyBoxOne,moneyBoxTwo,moneyBoxThree);
document.querySelector(".moneyContainer").append(heading,moneyBox);