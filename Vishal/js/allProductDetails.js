let url = "https://63987374fe03352a94d1697f.mockapi.io/Products"
let bag = [];
let allProduct = [];

fetch(url)
.then((res)=> res.json())
.then((data)=>{
    bag=data;
    console.log(data);
    displayProduct(data);
})

function displayProduct(data){
    document.querySelector("#productContainer").innerHTML="";
    
    data.forEach((element)=>{
        let div = document.createElement("div");
        
        let productImg = document.createElement("img");
        productImg.setAttribute("src",element.image)

        let productRating = document.createElement("p");
        productRating.innerText=element.rating;
        
        let productTitle = document.createElement("h2");
        productTitle.innerText=element.title;

        let productMini = document.createElement("p");
        productMini.innerText = "Minimum You can Buy: 10";

        div.addEventListener("click",()=>{
            allProduct.push(element);
            localStorage.setItem("singleProduct",JSON.stringify(allProduct));
        })

        div.append(productImg, productRating, productTitle, productMini);
        document.querySelector("#productContainer").append(div);
    })
}