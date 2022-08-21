// let success=(a,b)=>{
//     return a+b
// }
//
// let failure=(a,b)=>{
//     return a-b
// }

let cleanTask=new Promise((resolve,reject)=>{
    let isDone =true;
    if (isDone){
         return resolve(10,15)
    }
    else {
        return reject(10,20)
    }
})

let output=cleanTask.then((a,b)=>{
    return a+b
}).catch((a,b)=>{
    return a-b
})
console.log(output)

//
// let promTask=new Promise((resolve,reject)=>{
//     let isDone =true;
//     if (isDone){
//         return resolve("Task Complete")
//     }
//     else {
//         return reject("Task Incomplete")
//     }
// })
//
// promTask.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.error(err)
// })