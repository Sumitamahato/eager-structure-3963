var coll = document.getElementsByClassName("label");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let total=JSON.parse(localStorage.getItem("totalSum"));

let itemInYourCart=document.querySelector(".itemInCart");
let estTotal=document.querySelector(".total");
estTotal.innerHTML=`$${total}`
itemInYourCart.innerHTML=`$${total}`


let placeOrder=document.querySelector(".proceedtoCheckout>button");
placeOrder.addEventListener("click",function(){
    window.location.href="placed.html";
})

let editCart=document.querySelector("#editCart");
editCart.addEventListener("click",function(){
    window.location.href="./cartPage.html"
})