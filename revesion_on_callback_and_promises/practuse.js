//callback function

// function add (a,b){
//   return a+b;
// }
// function substract(a,b){
//   return a-b
// }

// function calc(a,b,callback){
//   return callback(a,b)
// }

// // calc(a=5,b=6,()=>{
// //   return a*b
// // })

// let val=calc(a=5,b=6,add)
// console.log(val)

// promises by using the normal 2 callback function

// function add(a, b) {
//     return (a + b)
// }

// let substract =(a, b)=>{
//     return (a - b)
// }
// function prms_func(resolve, reject) {

//     let isDone = false;
//     if (isDone) {
//         let a = 10
//         let b = 20
//         return resolve(a, b)
//     } else {
//         let a = 10
//         let b = 20
//         return reject(a, b)
//     }

// }

// let val = prms_func(add, substract)
// console.log(val);

//actual promise

// let prms= new Promise((resolve,reject)=>{
//   let isDone=false
//   if (isDone){
//     resolve("success")
//   }
//   else{
//     reject("failure")
//   }
// });

// prms.then((msg)=>{
//   console.log(msg)
// }
// ).catch((err)=>{
//   console.error(err)
// })


//using the forEach loop in this case 
// arr2 = []
// arr = [10, 20, 30, 40]
// arr.forEach(element => {
//     arr2.push(element)
// });
// console.log(arr2)

//dependent promises

let CreateProj = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isProject = true
        if (isProject) {
            resolve("project done")
        } else {
            reject("project not done")
        }
    }, 2000)
})

let TechInterview = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isClear = true
        if (isClear) {
            resolve("Technical Clear")
        } else {
            reject("Technical not clear")
        }
    }, 3000)
})

let ManagerInterview = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isClear = true
        if (isClear) {
            resolve("Manager Clear")
        } else {
            reject("Manager Not clear")
        }
    }, 4000)
})

let HRInterview = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isClear = true
        if (isClear) {
            resolve("HR Clear and got the job")
        } else {
            reject("HR Not clear")
        }
    }, 5000)
})


CreateProj.then((msg) => {
    console.log(msg)
    TechInterview.then((msg) => {
        console.log(msg)
        ManagerInterview.then((msg) => {
            console.log(msg)
            HRInterview.then((msg) => {
                console.log(msg)
            }).catch((err) => {
                console.log(err)
            })
        }).clear((err) => {
            console.log(err)
        })
    }).clear((err) => {
        console.error(err)
    })
}).clear((err) => {
    console.log(err)
})