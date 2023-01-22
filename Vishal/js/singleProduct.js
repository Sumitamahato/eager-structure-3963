let selectData= JSON.parse(localStorage.getItem("singleProduct"));
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let img=document.querySelector("#productImg");
let title=document.querySelector("#productTitle");
let desc=document.querySelector("#productDesc");

displaydata(selectData)

function displaydata(data){
    img.innerHTML="";
    title.innerHTML="";
    desc.innerHTML="";

    for (let i=0;i<data.length;i++){
        // div for img
        let imgDiv = document.createElement("div");
        // div for title
        let titleDiv = document.createElement("div");
        // div for desc
        let descDiv = document.createElement("div");

        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src",data[i].image)
        imgProduct.style.marginTop="50px"
        imgProduct.style.marginBottom="50px"
        imgDiv.append(imgProduct);
        img.append(imgDiv);

        let titleProduct = document.createElement("h2");
        titleProduct.innerText= data[i].title;
        
        let idProduct = document.createElement("p");
        idProduct.innerText= "SKU: "+data[i].id;

        let avilableProduct = document.createElement("p");
        avilableProduct.innerText = "Item also avilable for in-store purchase. For availability contact to store";

        let storeDetail = document.createElement("div");
        storeDetail.style.backgroundColor="#f2f2f2";
        storeDetail.style.textAlign="left";
        storeDetail.style.padding="15px";


        let storePrefer = document.createElement("h5");
        storePrefer.innerText="Your Preferred Store:-";
        storePrefer.style.marginLeft="30px";
        
        let storeID = document.createElement("p");
        storeID.innerText="DollarTree #502";
        storeID.style.marginLeft="30px";
        
        let storeAdd1 = document.createElement("p");
        storeAdd1.innerText ="1509 Sams Circle."; 
        storeAdd1.style.marginLeft="30px";
        
        let storeAdd2 = document.createElement("p");
        storeAdd2.innerText = "Chesapeake, VA 23320-4694";
        storeAdd2.style.marginLeft="30px";
        
        let storeContact = document.createElement("p");
        storeContact.innerText = "575-005-7006";
        storeContact.style.marginLeft="30px";

        let cartProduct = document.createElement("button");
        cartProduct.innerText = "Add To Cart"
        cartProduct.style.backgroundColor= "#3faf78"
        cartProduct.style.border= "0px"
        cartProduct.style.padding= "15px"
        cartProduct.style.marginTop= "15px"
        cartProduct.style.marginBottom= "15px"
        cartProduct.addEventListener("click", function(){
            cart.push(data[i]);
            localStorage.setItem("cart",JSON.stringify(cart));
        });

        
        storeDetail.append(storePrefer, storeID, storeAdd1, storeAdd2, storeContact)
        titleDiv.append(titleProduct, idProduct, avilableProduct, storeDetail, cartProduct);
        title.append(titleDiv);

        let descProductTitle=document.createElement("h2");
        descProductTitle.innerText= "Description"
        let descProduct = document.createElement("p");
        descProduct.innerText= data[i].description;
        descDiv.append(descProductTitle, descProduct);
        desc.append(descDiv);
    }
}

//   sumita js 
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


})

document.getElementById("cartIcon").addEventListener("click",() =>{
window.location.href="../cartPage.html"

})

let logo= document.querySelector("#logoset");
logo.addEventListener("click", ()=>{
  window.location.href="../index.html"
})