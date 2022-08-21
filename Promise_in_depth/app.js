let success=(a,b)=>{
    return a+b
}

let failure=(a,b) =>{
    return a-b
}

let taskDone=(resolve,reject) =>{
    let a =10
    let b = 15
    let isDone=false;
    if (isDone){
        return resolve(a,b)
    }
    else{
        return reject(a,b)
    }
}

let output=taskDone(success,failure)
console.log(output)



// another example

let pass=(msg) =>{
    console.log(msg)
}
let fail=(err)=>{
    console.error(err)
}
let taskComp=(resolve,reject) =>{
    let isDone = true;
    if (isDone){
        resolve("Task Complete")
    }
    else {
        reject("Task Incomplete")
    }
}
taskComp(pass,fail)

