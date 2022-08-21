let checkBox=document.querySelector("#checkbox")
let passwordBox=document.querySelector("#password")
checkBox.addEventListener("change",() =>{
    if (passwordBox.getAttribute("type")==="password")
    {
        passwordBox.setAttribute("type",'text')
    }
    else{
        passwordBox.setAttribute("type",'password')
    }
})