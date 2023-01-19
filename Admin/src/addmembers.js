

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
        document.querySelector('table').style.margin='auto';
        document.getElementById('addForm').style.textAlign='center';
        document.querySelector('#mainDisplay>h3').style.textAlign='center';
        document.querySelector('#membersList>h1').style.textAlign='center';
        burgerC++;
    }else{
        menuBtn1.style.display='block';
        menuBtn2.style.display='block';
        menuBtn3.style.display='block';
        menuBtn4.style.display='block';
        document.getElementById('mainMenu').style.borderRight='1px solid black';
        document.getElementById('mainMenu').style.display='grid';
        document.getElementById('mainDisplay').style.width='80%';
        document.querySelector('table').style.margin='';
        document.getElementById('addForm').style.textAlign='left';
        document.querySelector('#mainDisplay>h3').style.textAlign='left';
        document.querySelector('#membersList>h1').style.textAlign='left';
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
        showMembers(memberData)

        
        e.target[0].value='';
        e.target[1].value='';
        e.target[2].value='';
        e.target[3].value='';
    }
})


// showing members

function showMembers(data){
    document.querySelector('tbody').innerHTML=null;

    let card=[];
    data.forEach((el,i)=>{
        card.push(`
        <tr data-id=${i}>
        <td>${el.name}</td>
        <td>${el.email}</td>
        <td>${el.department}</td>
        <td><button data-id=${i} class="editBtns">Edit</button></td>
        <td><button  data-id=${i} class="deleteBtns">Delete</button></td>
        </tr>      
        `)
    })

    document.querySelector('tbody').innerHTML=card.join('');

    //Edit button
    let editBtns=document.querySelectorAll('.editBtns');
    
    editBtns.forEach((el,id)=>{
        el.addEventListener('click',(e)=>{
            let edit=data.filter((element,index)=>{
                if(e.target.dataset.id==index){
                    document.querySelector('form>input:nth-child(1)').value=element.name;
                    document.querySelector('form>input:nth-child(2)').value=element.email;
                    document.querySelector('form>input:nth-child(3)').value=element.password;
                    document.querySelector('form>input:nth-child(4)').value=element.department;
                    return false;
                }else{
                    return true;
                }
            })
            memberData=edit;
            localStorage.setItem('registerData',JSON.stringify(memberData));
            showMembers(memberData)
        })
    })


    // Delete Button
    let deleteBtns=document.querySelectorAll('.deleteBtns');

    deleteBtns.forEach((el,id)=>{
        el.addEventListener('click',(e)=>{
            let deleted=data.filter((element,index)=>{
                if(e.target.dataset.id==index){
                    return false;
                }else{
                    return true;
                }
            })
            memberData=deleted;
            localStorage.setItem('registerData',JSON.stringify(memberData));
            showMembers(memberData);
        })
    })
}

showMembers(memberData);