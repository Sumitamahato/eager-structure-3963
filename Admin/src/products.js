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

//Product Buttons
let showProdButton = document.getElementById("showProd");
let addProdButton = document.getElementById("addProd");
let editProdButton = document.getElementById("editProd");

let mainData = [];

//Show product button
showProdButton.addEventListener("click",()=>{
    async function fetchData(){
        try {
            let res = await fetch(ProductsUrl)
            let data = await res.json();
            mainData = data;
            console.log(data)
            showProdCard(data)
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

//Add product Button
addProdButton.addEventListener("click",()=>{
    addProductCard()
})

function addProductCard(){
    gridDisplayContainer.innerHTML = null;

    gridDisplayContainer.innerHTML=`
    <form action="" id="productAddingForm">
        <h2>ADD PRODUCT 🛍️</h2>
        <input type="text" name="img" placeholder="Image Url" id="">
        <input type="number" name="rate" placeholder="Rating" id="">
        <input type="text" name="title" placeholder="Title" id="">
        <input type="text" name="desc" placeholder="Description" id="">
        <input type="number" name="stock" placeholder="Stock" id="">
        <input type="number" name="price" placeholder="Price" id="">
        <input type="text" name="category" placeholder="Category" id=""><br/>
        <input type="submit" id="submitButton" value="Submit">
    </form>
    `

    let form=document.getElementById('productAddingForm');

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        fetch(ProductsUrl,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "image":e.target[0].value,
                "rating":e.target[1].value,
                "title":e.target[2].value,
                "description":e.target[3].value,
                "stock":e.target[4].value,
                'price':e.target[5].value,
                "category":e.target[6].value
            })
        })
        alert("Products added Successfully")
    })
}

//Update Products
editProdButton.addEventListener("click",()=>{
    editProductCard()
});

function editProductCard(){
    gridDisplayContainer.innerHTML = null;

    gridDisplayContainer.innerHTML=`
    <form action="" id="updatingForm">
        <h2>Update PRODUCTS 🛍️</h2>
        <input type="text" name="img" placeholder="Image Url" id="updateImgInput">
        <input type="number" name="rate" placeholder="Rating" id="updateRateInput">
        <input type="text" name="title" placeholder="Title" id="updateTitleInput">
        <input type="text" name="desc" placeholder="Description" id="updateDescInput">
        <input type="number" name="stock" placeholder="Stock" id="updateStockInput">
        <input type="number" name="price" placeholder="Price" id="updatePriceInput">
        <input type="text" name="category" placeholder="Category" id="updateCatgInput"><br/>
        <input type="submit" id="submitButton" value="Submit">
    </form>
    `

    let form=document.getElementById('productAddingForm');

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        fetch(`ProductsUrl/${ids}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "id": e.target[0].value,
                "image":e.target[1].value,
                "rating":e.target[2].value,
                "title":e.target[3].value,
                "description":e.target[4].value,
                "stock":e.target[5].value,
                'price':e.target[6].value,
                "category":e.target[7].value
            })
        })
        alert("Products updated Successfully")
    })
}