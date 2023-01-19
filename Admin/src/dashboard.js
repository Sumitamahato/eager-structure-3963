

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
        document.getElementById('mainDisplay').style.textAlign='center';
        document.getElementById('top_x_div').style.margin="auto";
        document.getElementById('top_x_div').style.marginTop="75px";
        burgerC++;
    }else{
        menuBtn1.style.display='block';
        menuBtn2.style.display='block';
        menuBtn3.style.display='block';
        menuBtn4.style.display='block';
        document.getElementById('mainMenu').style.borderRight='1px solid black';
        document.getElementById('mainMenu').style.display='grid';
        document.getElementById('mainDisplay').style.width='80%';
        document.getElementById('mainDisplay').style.textAlign='left';
        document.getElementById('top_x_div').style.margin="";
        document.getElementById('top_x_div').style.marginTop="75px";
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
let flag=localStorage.getItem('loginStatus') || 'false';

logout.addEventListener('click',()=>{ 
    location.replace('adminLogin.html');
    flag='false';
    localStorage.setItem('loginStatus',flag);
})


if(flag=="false"){
    window.location.href="adminLogin.html";
}

// Total datas

let totalProducts=document.getElementById('tp');
let totalSales=document.getElementById('ts');
let outOfStock=document.getElementById('osp');
let totalCate=document.getElementById('tc');

fetch(`https://63987374fe03352a94d1697f.mockapi.io/Products`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    totalProducts.innerText=data.length;
    let category=[];
    let outStock=0;
    data.forEach((el,index)=>{
        if(category.includes(el.category)==false){
            category.push(el.category);
        }
        if(el.stock==0 || el.stock==''){
            outStock++;
        }
    })
    totalCate.innerText=category.length;
    outOfStock.innerText=outStock;
    productsDetail(data.length,outStock,category.length,25);
})

// Google Charts
// Website Visits
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Website Visit', 'Percentage'],
          ["2020", 10],
          ["2021", 12],
          ["2022", 31],
          ["2023", 44]
        ]);

        var options = {
          title: 'Website Traffic',
          legend: { position: 'none' },
          chart: { title: 'Website Traffic'},
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };

    //   Product chart
    function productsDetail(totalProduct,outOfS,totalCategory,TS){
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Options', 'Details'],
          ['Total Products',     totalProduct],
          ['Out of Stock',      outOfS],
          ['Total Category', totalCategory],
          ['Total Sale', TS]
        ]);

        var options = {
          title: 'Products Details',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
    }
      