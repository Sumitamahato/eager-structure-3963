// let url = "https://63987374fe03352a94d1697f.mockapi.io/School"
let url = "https://63987374fe03352a94d1697f.mockapi.io/Products"
let bag = [];
let allProduct = [];
let paginationWrapper = document.getElementById("pagination-wrapper");

function fetchData(n){
    fetch(`${url}?limit=9&page=${n}`)
    .then((res)=> res.json())
    .then((data)=>{
        bag=data;
        console.log(data);
        displayProduct(data);
        fetchDetails()
    })
}
fetchData(1);

function displayProduct(data){
    document.querySelector("#productContainer").innerHTML="";
    
    data.forEach((element)=>{
        let div = document.createElement("div");
        
        let productImg = document.createElement("img");
        productImg.setAttribute("src",element.image)

        let productRating = document.createElement("p");
        productRating.innerText=element.rating+"/5";
        
        let productTitle = document.createElement("h3");
        productTitle.innerText=element.title;

        let productMini = document.createElement("p");
        productMini.innerText = "Minimum You can Buy: 10";

        let productPrice = document.createElement("h4");
        productPrice.innerText = "$"+element.price

        div.addEventListener("click",()=>{
            allProduct.push(element);
            localStorage.setItem("singleProduct",JSON.stringify(allProduct));
        })

        div.append(productImg, productRating, productTitle, productMini, productPrice);
        document.querySelector("#productContainer").append(div);
    })
}

// sort function 

let sort = document.querySelector("#sort");
sort.addEventListener("change", function(){
    if(sort.value == " "){
        displayProduct(data);
    }
    if(sort.value == "HighToLow"){
        bag.sort((a, b) => b.price - a.price)
    }
    if(sort.value == "LowToHigh"){
        bag.sort((a, b) => a.price - b.price)
    }
    if(sort.value == "Alpha"){
        bag.sort((a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
    }
    if(sort.value == "Alpha1"){
        bag.sort((a, b) => {
            if (a.title < b.title) return 1;
            if (a.title > b.title) return -1;
            return 0;
        })
    }
    displayProduct(bag);
    console.log(bag)
    console.log(bag1)
})

// Filter Side
// filter By price;
let one = 0;

let two = 0;

let three = 0;

let four = 0 ;

let countOne=0;

let countTwo=0;

let countThree=0;

let countFour=0;

function price1(){
    if(countOne==0){
        one = 1;
        countOne++;
    }
    else{
        one = 0;
        countOne--;
    }
    onePrice();
}
function price2(){
    if(countTwo==0){
        two = 1;
        countTwo++;
    }
    else{
        two = 0;
        countTwo--;
    }
    twoPrice();
}
function price3(){
    if(countThree==0){
        three = 1;
        countThree++;
    }
    else{
        three = 0;
        countThree--;
    }
    threePrice();
}
function price4(){
    if(countFour==0){
        four = 1;
        countFour++;
    }
    else{
        four = 0;
        countFour--;
    }
    fourPrice();
}

function onePrice(){
    if(one==1){
        let arr1=[];
        bag.map(function(element){
            if(element.price<2){
                arr1.push(element);
                displayProduct(arr1);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function twoPrice(){
    if(two==1){
        let arr2=[];
        bag.map(function(element){
            if(element.price>=2 && element.price<5){
                arr2.push(element);
                displayProduct(arr2);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function threePrice(){
    if(three==1){
        let arr3=[];
        bag.map(function(element){
            if(element.price>=5 && element.price<8){
                arr3.push(element);
                displayProduct(arr3);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function fourPrice(){
    if(four==1){
        let arr4=[];
        bag.map(function(element){
            if(element.price>8){
                arr4.push(element);
                displayProduct(arr4);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

// filter by rating 

let oneRating = 0;

let twoRating = 0;

let threeRating = 0;

let fourRating = 0;

let oneCount = 0;

let twoCount = 0;

let threeCount = 0;

let fourCount = 0;

function rate1(){
    if(oneCount==0){
        oneRating = 1;
        oneCount++;
    }
    else{
        oneRating = 0;
        oneCount--;
    }
    oneRate();
}

function rate2(){
    if(twoCount==0){
        twoRating = 1;
        twoCount++;
    }
    else{
        twoRating = 0;
        twoCount--;
    }
    twoRate();
}

function rate3(){
    if(threeCount==0){
        threeRating = 1;
        threeCount++;
    }
    else{
        threeRating = 0;
        threeCount--;
    }
    threeRate();
}

function rate4(){
    if(fourCount==0){
        fourRating = 1;
        fourCount++;
    }
    else{
        fourRating = 0;
        fourCount--;
    }
    fourRate();
}

function oneRate(){
    if(oneRating==1){
        let arr1=[];
        bag.map(function(element){
            if(element.rating<2){
                arr1.push(element);
                displayProduct(arr1);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function twoRate(){
    if(twoRating==1){
        let arr2=[];
        bag.map(function(element){
            if(element.rating>=2 && element.rating<3){
                arr2.push(element);
                displayProduct(arr2);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function threeRate(){
    if(threeRating==1){
        let arr3=[];
        bag.map(function(element){
            if(element.rating>=3 && element.rating<4){
                arr3.push(element);
                displayProduct(arr3);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function fourRate(){
    if(fourRating==1){
        let arr4=[];
        bag.map(function(element){
            if(element.rating>4){
                arr4.push(element);
                displayProduct(arr4);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

// filter by category
let oneP = 0;

let twoP = 0;

let threeP = 0 ;

let fourP = 0;

let oneC = 0;

let twoC = 0;

let threeC = 0 ;

let fourC = 0;

function teadyP(){
    if(oneC==0){
        oneP = 1;
        oneC++;
    }
    else{
        oneP = 0;
        oneC--;
    }
    pTeady();
}

function schoolP(){
    if(twoC==0){
        twoP = 1;
        twoC++;
    }
    else{
        twoP = 0;
        twoC--;
    }
    pSchool();
}

function craftP(){
    if(threeC==0){
        threeP = 1;
        threeC++;
    }
    else{
        threeP = 0;
        threeC--;
    }
    pCraft();
}

function containerP(){
    if(fourC==0){
        fourP = 1;
        fourC++;
    }
    else{
        fourP = 0;
        fourC--;
    }
    pContainer();
}

function pTeady(){
    if(oneP==1){
        let arr1=[];
        bag.map(function(element){
            if(element.category=="teady"){
                arr1.push(element);
                displayProduct(arr1);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function pSchool(){
    if(twoP==1){
        let arr2=[];
        bag.map(function(element){
            if(element.category=="school"){
                arr2.push(element);
                displayProduct(arr2);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function pCraft(){
    if(threeP==1){
        let arr3=[];
        bag.map(function(element){
            if(element.category=="craft"){
                arr3.push(element);
                displayProduct(arr3);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function pContainer(){
    if(fourP==1){
        let arr4=[];
        bag.map(function(element){
            if(element.category=="container"){
                arr4.push(element);
                displayProduct(arr4);
            }
        })
    }
    else{
        displayProduct(bag);
    }
}

function fetchDetails(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      let totalCount = data.length
      let totalPages = Math.ceil(totalCount/9)
      console.log(totalCount,totalPages)
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