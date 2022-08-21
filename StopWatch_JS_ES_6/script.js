//another approach

let hr=0;
let min=0;
let sec=0;
let count=0;
let interval=0;
let timer=false

let startBtn=document.querySelector("#start");
let stopBtn=document.querySelector("#stop");
let resetBtn=document.querySelector("#reset");

startBtn.addEventListener("click",()=>{
    if (!timer) {
        timer=true
        interval=setInterval(stopWatch, 10)
    }
})

stopBtn.addEventListener(type="click",()=>{
    timer=false
    clearInterval(interval)
})

resetBtn.addEventListener(type="click",()=>{
    timer=false
    document.querySelector("#hr").innerText="00"
    document.querySelector("#min").innerText="00"
    document.querySelector("#sec").innerText="00"
    document.querySelector("#count").innerText="00"

})

let stopWatch=()=>{
    count=count+1
    if (count>99){
        count=0;
        sec=sec+1
    }
    if (sec>59){
        sec=0;
        min=min+1
    }
    if (min>59){
        sec=0;
        min=0
        hr=hr+1
    }
    document.querySelector("#hr").innerText=LeadingZero(hr)
    document.querySelector("#min").innerText=LeadingZero(min)
    document.querySelector("#sec").innerText=LeadingZero(sec)
    document.querySelector("#count").innerText=LeadingZero(count)
}

let LeadingZero=(val)=>{
    if (val<9){
        val="0"+val
        return val
    }
    else{
        return val
    }
}