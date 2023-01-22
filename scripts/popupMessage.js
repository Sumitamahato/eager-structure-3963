
let messagebox=document.querySelector(".popup-message")

function showmessage(text="Some Message Here",colorclass="green",iconclass="fa-circle-check"){
    let color="redc";
    let m_style=document.getElementById("message-style")
    let m_text=document.getElementById("message-text")
    let m_icon=document.getElementById("message-icon")
if(colorclass=="green"){
color="greenc"
}
setTimeout(()=>{
    m_style.classList.add(colorclass)
    m_text.innerHTML=text;
    messagebox.classList.remove("none");
    m_icon.classList.add(iconclass)
    m_icon.classList.add(color)
    setTimeout(()=>{
    messagebox.classList.remove("opacity");
    messagebox.classList.add("transform");
    },100)

setTimeout(()=>{
    messagebox.classList.add("opacity");
     messagebox.classList.remove("transform");
    
    setTimeout(()=>{
    m_style.classList.remove(colorclass)
    m_text.innerHTML="";
    messagebox.classList.add("none");
    m_icon.classList.remove(iconclass)
    m_icon.classList.remove(color)
        },500)
   
},2000)
},0)
}

 export  {showmessage}