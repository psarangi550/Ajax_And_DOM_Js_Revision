// let selectText=()=>{
//     let msg=document.querySelector("#val")
//     let btn_text=document.querySelector("#btn-1")
//     msg.innerText=btn_text.innerText
//     msg.style.backgroundColor="limegreen"
//     msg.style.color="white"
//     msg.style.padding="10px 10px"
// };

let DynamicText=(id,message,bgcolor)=>{
    let msg=document.querySelector("#val")
    let btn_text=document.querySelector(`#${id}`)
    msg.innerText=message
    msg.style.backgroundColor=bgcolor
    msg.style.color="white"
    msg.style.padding="10px 10px"
};

// DynamicText(id="btn-1",message="Good Morning")
