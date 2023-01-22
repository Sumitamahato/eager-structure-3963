const swiper = new Swiper('.swiper', {
  // Optional parameters\
  autoplay :{
      delay:3000,
      disableOnInteraction:false,
  },

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// let show_list =document.getElementbyId("nav_title");
// let nav_list =document.getElementbyId("");

// function show_list(){
// show_list.style.display="block";
// }
// function hidelist(){
// show_list.style.display="none"
// }


function ok() {

window.location.href="cart.html"

}
console.log("abcd")




// loggin

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//        modal.style.display = "none";
//     }
// }
document.getElementById("account").addEventListener("click",() =>{
modal.style.display="block"


});

document.getElementById("cartIcon").addEventListener("click",() =>{
window.location.href="cartPage.html"

});


// linktovalentinePage

document.getElementById("valentineGift").addEventListener("click",() =>{
  window.location.href="./Vishal/allProductDetails.html"
  // C:\Users\ASUS\Desktop\deepan\eager-structure-3963\Vishal\allProductDetails.html


});