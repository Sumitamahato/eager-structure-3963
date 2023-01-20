let selectData= JSON.parse(localStorage.getItem("singleProduct"));
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let img=document.querySelector("#productImg");
let title=document.querySelector("#productTitle");
let desc=document.querySelector("#productDesc");

displaydata(selectData)

function displaydata(data){
    img.innerHTML=""
    title.innerHTML=""
    desc.innerHTML=""

    for (let i=0;i<data.length;i++){
        // div for img
        let imgDiv = document.createElement("div");
        // div for title
        let titleDiv = document.createElement("div");
        // div for desc
        let descDiv = document.createElement("div");

        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src",data[i].image)
        imgDiv.append(imgProduct);
        img.append(imgDiv);

        let titleProduct = document.createElement("h2");
        titleProduct.innerText= data[i].title;
        titleDiv.append(titleProduct);
        title.append(titleDiv);

        let descProductTitle=document.createElement("h2");
        descProductTitle.innerText= "Description"
        let descProduct = document.createElement("p");
        descProduct.innerText= data[i].description;
        descDiv.append(descProductTitle, descProduct);
        desc.append(descDiv);
    }
}