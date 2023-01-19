

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
let flag=localStorage.getItem('loginStatus')||'false';


logout.addEventListener('click',()=>{ 
    location.replace('adminLogin.html');
    flag='false';
    localStorage.setItem('loginStatus',flag);
})

if(flag=="false"){
    window.location.href="adminLogin.html";
}


// Adding Members

let form=document.querySelector('form');
let memberData=JSON.parse(localStorage.getItem('registerData')) || [];  

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(e.target[0].value && e.target[1].value && e.target[2].value && e.target[3].value){
        let obj={
            'name':e.target[0].value,
            'email':e.target[1].value,
            'password':e.target[2].value,
            'department':e.target[3].value
        }
        memberData.push(obj);
        localStorage.setItem('registerData',JSON.stringify(memberData));
        location.reload(__dirname);
    }
})


// showing members

function showMembers(data){
    let card=[];
    data.forEach((el,i)=>{
        card.push(`
        <div  data-id=${i}>
        <h3>${el.name}</h3>
        <p>${el.email}</p>
        <p>${el.department}</p>
        <button data-id=${i} id="editBtns">Edit</button>
        <button data-id=${i} id="deleteBtns">Delete</button>
        </div>
        `)
    })

    document.getElementById('membersList').innerHTML=card.join('');
}

showMembers(memberData);