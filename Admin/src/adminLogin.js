
// login form
let flag=localStorage.getItem('loginStatus') || false;
let form=document.getElementById('LoginForm');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(e.target[0].value=='Admin@80' && e.target[1].value=='Admin'){
        flag=true;
        localStorage.setItem('loginStatus',flag);
        console.log(localStorage.getItem('loginStatus'));
        window.location.href='dashboard.html';
    }else{
        alert('Invalid Credentials');
    }
})