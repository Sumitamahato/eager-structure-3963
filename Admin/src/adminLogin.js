
// login form
let flag=localStorage.getItem('loginStatus') || false;
let form=document.getElementById('LoginForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(e.target[0].value=='admin@mail.com' && e.target[1].value=='admin'){
        flag=true;
        localStorage.setItem('loginStatus',flag);
        window.location.href='dashboard.html';
    }else{
        alert('Invalid Credentials');
    }
})