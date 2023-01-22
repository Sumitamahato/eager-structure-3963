let cartbox=document.getElementById("shoppingCart");
// console.log(cartbox);

// let a=[{"title": "Foodie Cutie Plush Snacks",
// "id":1,
// "description": "Share a sweet treat with your Valentine with a Fuzzy Friends Valentine's Food Plushie! These 5-inch plush toys are colored in traditional Valentine's Day hues and come in a variety of shapes, such as donuts, cupcakes, milkshakes, and hearts. They make lovely additions for gift baskets, care packages, party favors, and Valentine's Day decorating.",
// "image": "https://www.dollartree.com/ccstore/v1/images/?source=/file/v462274093779551515/products/341393.jpg&height=940&width=940",
// "price": "1.00",
// "count":10},
// {"title": "Fuzzy Friends Valentine's Themed Garden Gnome Plushies, 3.21x1.5x6 in.","id":2,"description": "Cute Fuzzy Friends make you feel all warm and fuzzy inside when you receive them for Valentine's Day. These fuzzy fellows bring a smile to everyone who sees them. Soft 6-in. tall garden gnomes are decorated in 4 Valentine's color designs and can be given as gifts or kept to remember fond memories. They can also be donated to shelters and shared with people who may have lost loved ones.","image": "https://www.dollartree.com/ccstore/v1/images/?source=/file/v4084831130488505879/products/322913.jpg&height=940&width=940","price": "3.00","count":20},]

// localStorage.setItem("cart",JSON.stringify(a));

let cart=JSON.parse(localStorage.getItem("cart"))||[];
// let totalSum=0;
cartlist(cart)

function cartlist(arr){
let totalSum=0;

    cartbox.innerHTML=null;
    let sum=0;
    
    if(arr.length==0){
        cartbox.innerHTML=`<p>Your basket is currently empty !</p>`
    }else{
        let cartItem=[];
        arr.forEach((item)=>{
            sum=+item.price*item.count;
            totalSum+=item.price*item.count;
            // console.log(sum)
            cartItem.push( `
            <div class="trow">
                <div class="item">
                    <img src=${item.image} alt="">
                </div>
                <div class="itemDesc">
                    <h4>${item.title}</h4>
                    <p>${item.description.substring(0,100)}</p>
                </div>
                <div class="pickOrDeliv">
                    <div>
                        <input class="delivOpt" type="radio" name="delivOpt" value="Free" checked>
                        <label for="delivOpt" id="freeLabel"><h4><span id="free">FREE</span> In-Store Pickup</h4></label>
                    </div>
                    <div>
                        <input class="delivOpt" type="radio" name="delivOpt" value="parcel">
                        <label for="delivOpt"><h4>Parcel Delivery</h4></label>
                    </div>
                </div>
                <div class="quantityy">
                    <h4>Units</h4>
                    <select data-price=${item.price} data-id="${item.id}" name="quantity"  class="selectQuant">
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <button>Remove</button>
                </div>
                <div class="price">
                    <p>$<span class='miniPrices' data-id=${item.id}>${sum.toFixed(2)}</span></p>
                </div>
            </div>
            `)
        })
        
        
        localStorage.setItem("totalSum",sum);
        cartbox.innerHTML=cartItem.join('');

        selectTag=document.querySelectorAll(".selectQuant");
        let miniPrices=document.querySelectorAll('.miniPrices');
        // selectTag.addEventListener("click",function(){
        //     console.log(selectTag.value)
        // })
   
        selectTag.forEach(function(el){
            el.addEventListener("change",function(e){
                let cartId=e.target.dataset.id;
                let val=el.value;
                totalSum=+val*sum;
                miniPrices.forEach((element,id)=>{
                    if(element.dataset.id==cartId){
                        // let a=element.innerText;
                        element.innerText=val*e.target.dataset.price;
                    }
                })
                for(let i=0;i<cart.length;i++){
                    // console.log(cartId)
                    if(cart[i].id==cartId){
                        totalSum=totalSum-(cart[i].count*cart[i].price);
                        cart[i].count=val;
                        localStorage.setItem("cart",JSON.stringify(cart));
                        cartlist(cart)
                        break;
                    }
                }
            })
        })
        document.getElementById("itemInCart").innerText=`$${totalSum.toFixed(2)}`
        document.getElementById("total").innerText=`$${totalSum.toFixed(2)}`
    }



    let removeBtn=document.querySelectorAll(".quantityy>button");
    removeBtn.forEach((item)=>{
        item.addEventListener("click",function(e){
            let id=e.target.dataset.id
            console.log(e)
            for(let i=0;i<cart.length;i++){
                if(cart[i].id==id){
                    cart.splice(i,1);
                    cartlist(cart);
                    localStorage.setItem("cart",JSON.stringify(cart));
                    break;
                }
            }
        })
    })
}














let continueShopping=document.querySelector(".cartHeading>a");
continueShopping.addEventListener("click",function(){
    window.location.href="index.html";
})
let proceedtoCheckout=document.querySelector(".proceedtoCheckout>button");
proceedtoCheckout.addEventListener("click",function(){
    window.location.href="paymentPage.html";
})
// let signupBtn=document.querySelector("signUp>a");
// signupBtn.addEventListener("click",function(){
//     window.location.href="paymentPage.html";
// })