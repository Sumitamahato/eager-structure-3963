const accordion=document.getElementsByClassName('label');

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var content=this.nextElimentSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }else{
            content.style.display="block";
        }
    })
}