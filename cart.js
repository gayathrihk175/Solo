var cart = JSON.parse(localStorage.getItem("cart"));
var forRedirection = document.querySelector(".redirection");
forRedirection.addEventListener("click",function(){
    window.location.href="mainprodpage.html";
});

var proceedForPay = document.querySelector("#payment");
proceedForPay.addEventListener("click",function(){
    window.location.href="payment.html";
    // if(displayPrice.innerText == 0){
    //     productButton.setAttribute("disabled","disabled");
    // }else{
    //     window.location.href = "payment.html";
    // }
})

var displayPrice = document.querySelector("#priceDisplay");


var totalPrice = 0;

function displayProducts(cart) {
    document.querySelector("section").innerHTML = "";
    totalPrice = 0;
    cart.forEach(function(elem,index){
        
        totalPrice += parseInt(elem.price)

        var productDiv = document.createElement("div");
        productDiv.setAttribute("id","prodBox");

        var productVisual = document.createElement("img");
        productVisual.setAttribute("id","prodImage");
        productVisual.src = elem.image_url;

        var productDesc = document.createElement("p");
        productDesc.setAttribute("id","prodDesc");
        productDesc.innerText = elem.info;

        var productAmount = document.createElement("p");
        productAmount.setAttribute("id","prodAmt");
        productAmount.innerText = elem.price;

        var productButton = document.createElement("button");
        productButton.setAttribute("id","prodBtn");
        productButton.innerText = "Remove from Cart";
        productButton.addEventListener("click",function(){
            deleteFromCart(index);
        })

        displayPrice.innerText ="Total Price :" +  totalPrice

        productDiv.append(productVisual,productDesc,productAmount,productButton);
        document.querySelector("section").append(productDiv);
    })
}

displayProducts(cart);

function deleteFromCart(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));

    displayProducts(cart);

}