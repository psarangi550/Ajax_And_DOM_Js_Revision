let selectBox=document.querySelector("#select_box")
let msg=document.querySelector("#message")
selectBox.addEventListener("change",function () {
    msg.innerText = selectBox.value
})