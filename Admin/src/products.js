// Burger Menu
let burger=document.getElementById('menu');
let menuBtn1=document.getElementById('menuBtn1');
let menuBtn2=document.getElementById('menuBtn2');
let menuBtn3=document.getElementById('menuBtn3');
let menuBtn4=document.getElementById('menuBtn4');
let burgerC=0;
burger.addEventListener('click',()=>{
    if(burgerC==0){
        menuBtn1.style.display='none';
        menuBtn2.style.display='none';
        menuBtn3.style.display='none';
        menuBtn4.style.display='none';
        document.getElementById('mainMenu').style.border=0;
        document.getElementById('mainMenu').style.display='none';
        document.getElementById('mainDisplay').style.width='100%';
        burgerC++;
    }else{
        menuBtn1.style.display='block';
        menuBtn2.style.display='block';
        menuBtn3.style.display='block';
        menuBtn4.style.display='block';
        document.getElementById('mainMenu').style.borderRight='1px solid black';
        document.getElementById('mainMenu').style.display='grid';
        document.getElementById('mainDisplay').style.width='80%';
        burgerC--;
    }
})

// Dashboard Button

menuBtn1.addEventListener('click',()=>{
    window.location.href='dashboard.html';
})
menuBtn2.addEventListener('click',()=>{
    window.location.href='products.html';
})
menuBtn3.addEventListener('click',()=>{
    window.location.href='sales.html';
})
menuBtn4.addEventListener('click',()=>{
    window.location.href='addmembers.html';
})

// Logout
let logout=document.getElementById('logOut');
let flag=localStorage.getItem('loginStatus') || false;
logout.addEventListener('click',()=>{ 
    location.replace('adminLogin.html');
    flag=false;
    localStorage.setItem('loginStatus',flag);
})
if(flag=="false"){
    location.replace('adminLogin.html');
}

//Products Api
let ProductsUrl = "https://63987374fe03352a94d1697f.mockapi.io/Products";
//Show Products
let mainDisplayContainer = document.getElementById("mainDisplay");
let gridDisplayContainer = document.getElementById("gridDisplay");
let showProdButton = document.getElementById("showProd");

let showProductData = JSON.parse(localStorage.getItem("showProducts")) || [];

let mainData = [];

showProdButton.addEventListener("click",()=>{
    async function fetchData(){
        try {
            let res = await fetch(ProductsUrl)
            let data = await res.json();
            mainData = data;
            console.log(data)
            showProdCard(data)
            showProductData.push(data);
            localStorage.setItem("showProducts",JSON.stringify(showProductData))
            alert("Products Available")
        } catch (error) {
            alert("Products not available")
            console.log("Products not available")
        }
    }
    fetchData()
})

function showProdCard(data){
    gridDisplayContainer.innerHTML = null;
    data.forEach((el) => {
        let tr = document.createElement("div");

        let Image = document.createElement("img");
        Image.setAttribute("src",el.Image);

        let Rating = document.createElement("h4");
        Rating.innerText = "Rating: " + el.Rating;

        let Description = document.createElement("p");
        Description.innerText = el.Description;

        let Stock = document.createElement("p");
        Stock.innerText = "Minimum You Can Buy: " + el.Stock;

        let Price = document.createElement("h4");
        Price.innerText = "$" + el.Price;

        tr.append(Image,Rating,Description,Stock,Price);
        gridDisplayContainer.append(tr);
    });
}