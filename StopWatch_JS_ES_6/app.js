let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false

let startBtn=document.querySelector("#start");
let stopBtn=document.querySelector("#stop");
let resetBtn=document.querySelector("#reset");

startBtn.addEventListener("click",()=>{
    timer=true
    stopWatch()
})

stopBtn.addEventListener(type="click",()=>{
    timer=false
})

// resetBtn.addEventListener(type="click",()=>{
//     timer=false
//     document.querySelector("#hr").innerText="00"
//     document.querySelector("#min").innerText="00"
//     document.querySelector("#sec").innerText="00"
//     document.querySelector("#count").innerText="00"
//
// })

let stopWatch=()=>{
    if (timer){
        count =count+1
        if (count>99){
            sec=sec+1;
            count=0;
        }
        if(sec>59){
            min=min+1;
            sec=0;
        }
        if(min>59){
            hr=hr+1;
            min=0;
            sec=0;
        }
        let countString=count
        let secString=sec
        let minString=min
        let hrString=hr

        if (countString<=9){
            countString="0"+countString
        }
        if (secString<=9){
            secString="0"+secString
        }
        if (minString<10){
            minString="0"+minString
        }
        if (hrString<10){
            hrString="0"+hrString
        }
        document.querySelector("#hr").innerText=hrString
        document.querySelector("#min").innerText=minString
        document.querySelector("#sec").innerText=secString
        document.querySelector("#count").innerText=countString
        setTimeout(stopWatch,10)
    }
}