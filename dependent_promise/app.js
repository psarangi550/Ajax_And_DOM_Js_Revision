let buildProject=new Promise((resolve,reject)=>{
    let isDone=true;
    if (isDone){
        resolve("Project Build done")
    }
    else{
        reject("project Build incomplete")
    }
})

let attendTechRound=new Promise((resolve,reject)=>{
    let isDone = true;
    if (isDone){
        resolve("technical round clear")
    }
    else{
        resolve("technical round not clear")
    }
})

let attendManagerRound=new Promise((resolve,reject)=>{
    let isDone = false;
    if (isDone){
        resolve("manager round clear")
    }
    else{
        resolve("manager round not clear")
    }
})

let attendHRRound=new Promise((resolve,reject)=>{
    let isDone = false;
    if (isDone){
        resolve("HR round clear,Got the Job")
    }
    else{
        resolve("HR round not clear")
    }
})






