let msg=document.querySelector("#message")
let textBox=document.querySelector("#input_box")
textBox.addEventListener("keyup",function (){
    let  textVal=textBox.value
    msg.innerHTML=textVal
})