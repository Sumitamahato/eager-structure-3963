// Burger Menu
let burger = document.getElementById("menu");
let menuBtn1 = document.getElementById("menuBtn1");
let menuBtn2 = document.getElementById("menuBtn2");
let menuBtn3 = document.getElementById("menuBtn3");
let menuBtn4 = document.getElementById("menuBtn4");
let burgerC = 0;
burger.addEventListener("click", () => {
  if (burgerC == 0) {
    menuBtn1.style.display = "none";
    menuBtn2.style.display = "none";
    menuBtn3.style.display = "none";
    menuBtn4.style.display = "none";
    document.getElementById("mainMenu").style.border = 0;
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainDisplay").style.width = "100%";
    burgerC++;
  } else {
    menuBtn1.style.display = "block";
    menuBtn2.style.display = "block";
    menuBtn3.style.display = "block";
    menuBtn4.style.display = "block";
    document.getElementById("mainMenu").style.borderRight = "1px solid black";
    document.getElementById("mainMenu").style.display = "grid";
    document.getElementById("mainDisplay").style.width = "80%";
    burgerC--;
  }
});

// Dashboard Button

menuBtn1.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
menuBtn2.addEventListener("click", () => {
  window.location.href = "products.html";
});
menuBtn3.addEventListener("click", () => {
  window.location.href = "sales.html";
});
menuBtn4.addEventListener("click", () => {
  window.location.href = "addmembers.html";
});

// Logout

let logout=document.getElementById('logOut');
let flag=localStorage.getItem('loginStatus') || "false";
logout.addEventListener('click',()=>{ 
    location.replace('adminLogin.html');
    flag="false";
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

//Pagination Buttons
let paginationWrapper = document.getElementById("pagination-wrapper");

let mainData = [];
let dLength=0;

//get Product Function
function showProdCard(data) {
  gridDisplayContainer.innerHTML = null;
  data.forEach((el,ind) => {
    let tr = document.createElement("div");

    let id = document.createElement("p");
    id.innerText = el.id;

    let tr2 = document.createElement("div");
    tr2.setAttribute("id","imgDiv");

    let image = document.createElement("img");
    image.setAttribute("src", el.image);

    let title = document.createElement("h3");
    title.innerText = el.title;

    let description = document.createElement("p");
    description.innerText = el.description.substring(0,70)+"...";
    
    let category = document.createElement("p");
    category.innerText = "Category: " + el.category;

    let rating = document.createElement("p");
    rating.innerText = "Rating: " + el.rating;

    let stock = document.createElement("p");
    stock.innerText = "Minimum You Can Buy: " + el.stock;

    let price = document.createElement("h4");
    price.innerText = "Price: " + el.price;

    let tr3 = document.createElement("div");
    tr3.setAttribute("class","delDiv")

    let deleteBtn = document.createElement("h4");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class","delbtn");
    deleteBtn.setAttribute("data-id",el.id);

    deleteBtn.addEventListener("click",(e)=> {
      if(el.id == e.target.dataset.id){
        deleteProd(el.id);
      }
    })

    tr2.append(image)
    tr3.append(deleteBtn);
    tr.append(tr2, title, description, category, rating, stock, price, tr3);
    gridDisplayContainer.append(tr);
  });
}

//GET product button
showProdButton.addEventListener("click", () => {
  fetchData(1);
});

// GET Method
// let fetchMe=0;
async function fetchData(n) {
  try {
    let res = await fetch(`${ProductsUrl}?limit=12&page=${n}`);
    let data = await res.json();
    mainData = data;
    showProdCard(data);
    // console.log(data)
    // paginationPages(data.length)
    fetchDetails()
    // fetchMe == 0 ? alert("Available Products") :'';
    
  } catch (error) {
    alert("Products not available");
    // console.log("Products not available")
  }
}

// Method 2 for fetching data
// function fetchData(){
//     fetch(ProductsUrl)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data)
//         showProdCard(data)
//     })
// }


//Add Product function
function value() {
  gridDisplayContainer.innerHTML = "";
  gridDisplayContainer.innerHTML = `
      <form id="productAddingForm">
          <h2>ADD PRODUCTS 🛍️</h2>
          <input type="text" name="img" placeholder="Image Url" id="addImgInput">
          <input type="number" name="rate" placeholder="Rating" id="addRateInput">
          <input type="text" name="title" placeholder="Title" id="addTitleInput">
          <input type="text" name="desc" placeholder="Description" id="addDescInput">
          <input type="number" name="stock" placeholder="Stock" id="addStockInput">
          <input type="number" name="price" placeholder="Price" id="addPriceInput">
          <input type="text" name="category" placeholder="Category" id="addCatgInput"><br/>
          <input type="submit" id="submitButton" value="Submit">
      <form>
  `;
}

// Add Button
addProdButton.addEventListener("click", async () => {
  value();

  let hideBtn = document.querySelectorAll(".pagination-button");

  for(let i=0;i<hideBtn.length;i++){
    hideBtn[i].style.display = "none";
  }

  let forms = document.querySelector("form");
  forms.addEventListener("submit", (e) => {
    e.preventDefault();
    let addImg = addImgInput.value;
    let addRate = addRateInput.value;
    let addTitle = addTitleInput.value;
    let addDesc = addDescInput.value;
    let addStock = addStockInput.value;
    let addPrice = addPriceInput.value;
    let addCatg = addCatgInput.value;

    let addObj = {
      "image": addImg,
      "rating": addRate,
      "title": addTitle,
      "description": addDesc,
      "stock": addStock,
      "price": addPrice,
      "category": addCatg,
    };
    addprod(addObj);
  });
});

// POST Method
async function addprod(addObj) {
  try {
    let res = await fetch(ProductsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addObj),
    });

    let data = await res.json();
    // console.log(data);
    if (res.ok) {
      alert("Product Added Successfully");
    } else {
      alert("Please Fill Properly");
    }
  } catch (error) {
    console.log(error);
  }
}


//Edit Product function
function val() {
  gridDisplayContainer.innerHTML = "";
  gridDisplayContainer.innerHTML = `
        <form id="updatingProducts">
            <h2>UPDATE PRODUCTS 🛍️</h2>
            <input type="text" name="id" placeholder="ID" id="updateIdInput">
            <input type="text" name="img" placeholder="Image Url" id="updateImgInput">
            <input type="number" name="rate" placeholder="Rating" id="updateRateInput">
            <input type="text" name="title" placeholder="Title" id="updateTitleInput">
            <input type="text" name="desc" placeholder="Description" id="updateDescInput">
            <input type="number" name="stock" placeholder="Stock" id="updateStockInput">
            <input type="number" name="price" placeholder="Price" id="updatePriceInput">
            <input type="text" name="category" placeholder="Category" id="updateCatgInput"><br/>
            <input type="submit" id="submitButton" value="Edit">
        <form>
    `;
}

// Edit Button
editProdButton.addEventListener("click", () => {
  val();
  let forms = document.querySelector("form");
  forms.addEventListener("submit", (e) => {
    e.preventDefault();

    let upId = updateIdInput.value;
    let upImg = updateImgInput.value;
    let upRate = updateRateInput.value;
    let upTitle = updateTitleInput.value;
    let upDesc = updateDescInput.value;
    let upStock = updateStockInput.value;
    let upPrice = updatePriceInput.value;
    let upCatg = updateCatgInput.value;

      let obj = {
        "id": upId,
        "image": upImg,
        "rating": upRate,
        "title": upTitle,
        "description": upDesc,
        "stock": upStock,
        "price": upPrice,
        "category": upCatg,
      };
      editprod(obj);
});
});

//PUT Method
async function editprod(obj) {
  try {
    let res = await fetch(
      `https://63987374fe03352a94d1697f.mockapi.io/Products/${obj.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    // let data = await res.json();
    console.log(res);

    if (res.ok == true) {
      alert("Updated Successfully");
    } else {
      alert("Id not found, Product added successfully");
      let new_Post=obj;
      addprod(new_Post);
    }
  } catch (error) {
    alert("Wrong input");
  }
}


//Delete Product function
async function deleteProd(obj){
  try {
    let res = await fetch(
      `https://63987374fe03352a94d1697f.mockapi.io/Products/${obj}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    let data = await res.json();
    // console.log(data);

    if (res.ok == true) {
      alert("Product Deleted Successfully");
      fetchMe++;
      fetchData();
    } else {
      alert("Something went Wrong");
    }
  } catch (error) {
    alert("Product cannot be deleted");
  }
}


// Pagination
function fetchDetails(){
  fetch(ProductsUrl)
  .then((res)=> res.json())
  .then((data)=>{
    let totalCount = data.length
    let totalPages = Math.ceil(totalCount/12)
    renderPagination(totalPages)
  })
}

// Rendering Pagination Buttons
function renderPagination(numOfPages){

  function listOfButtons(){
    let arr = [];
    for(let i = 1;i <=numOfPages; i++){
      arr.push(getPaginationButtons(i));
    }
    return arr.join(" ");
  }

  paginationWrapper.innerHTML = `
    <div>
      ${listOfButtons()}
    </div>
  `

  let pageButtons = document.querySelectorAll(".pagination-button");
  for(let btn of pageButtons){
      btn.addEventListener("click",(e)=>{
        fetchData(e.target.dataset.id);
      })
  }

}

// Creating Pagination Buttons
function getPaginationButtons(pageNumber){
  return `<button class="pagination-button" data-id=${pageNumber}>${pageNumber}</button>`
}