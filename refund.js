
var headingOne = document.createElement("p");
headingOne.innerText = "Return & Return Policy";
headingOne.setAttribute("id","headOne");
var lineOne = document.createElement("p");
lineOne.innerText = "Thanks for shopping at Ideakart.com.";
var lineTwo = document.createElement("p");
lineTwo.innerText = "If you are not entirely satisfied with your purchase, we're here to help.";

var headingTwo = document.createElement("p");
headingTwo.innerText = "Returns";
headingTwo.setAttribute("id","headTwo");
var lineThree = document.createElement("p");
lineThree.innerText = "You have 7 calendar days to return an item from the date you received it.";
var lineFour = document.createElement("p");
lineFour.innerText = "To be eligible for a return, your item must be unused and in the same condition that you received it.";
var lineFive = document.createElement("p");
lineFive.innerText = "Your item must be in the original packaging.";
var lineSix = document.createElement("p");
lineSix.innerText = "Your item needs to have the receipt or proof of purchase.";


var headingThree = document.createElement("p");
headingThree.innerText = "Refunds";
headingThree.setAttribute("id","headThree");
var lineSeven = document.createElement("p");
lineSeven.innerText = "Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.";
var lineEight = document.createElement("p");
lineEight.innerText = "If your return is approved, we will initiate a refund to your method of payment(Credit Card/Debit Card/Bank etc).";
var lineNine = document.createElement("p");
lineNine.innerText = "You will receive the credit within a certain amount of days, depending on your banks policies.";


var headingFour = document.createElement("p");
headingFour.innerText = "Shipping";
headingFour.setAttribute("id","headFour");
var lineTen = document.createElement("p");
lineTen.innerText = "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.";
var lineEleven = document.createElement("p");
lineEleven.innerText = "If you receive a refund, the cost of return shipping will be deducted from your refund.";


var headingFive = document.createElement("p");
headingFive.innerText = "Contact Us";
headingFive.setAttribute("id","headFive");
var lineTwelve = document.createElement("p");
lineTwelve.innerText = "If you have any questions on how to return your item to us, contact us at 9999999999";

document.querySelector(".refundContainer").append(headingOne,lineOne,lineTwo,headingTwo,lineThree,lineFour,lineFive,lineSix,headingThree,lineSeven,lineEight,lineNine,headingFour,lineTen,lineEleven,headingFive,lineTwelve);