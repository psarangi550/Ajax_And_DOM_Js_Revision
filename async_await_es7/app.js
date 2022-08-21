Employees=[
    {
        id:101,
        name:"rika",
        sal:50000
    },
    {
        id:102,
        name:"abi",
        sal:60000
    }
]

let isDone=false

let addEmployee=(emp) =>{
    setTimeout(()=>{
        Employees.push(emp)
        isDone=true
    },2000)
}


let createEmployee=(emp) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Employees.push(emp)
            isDone=true
            if (isDone){
                resolve()
            }
            else {
                reject("something went wrong")
            }
        },2000)
    })
}

let getEmployee=()=>{
    let empRow=""
    if (isDone) {
        setTimeout(() => {
            Employees.forEach((emp) => {
                empRow += `<tr>
                       <td>${emp.id}</td>
                       <td>${emp.name}</td>
                       <td>${emp.sal}</td>
                    </tr>`
            })
            document.querySelector("#table-body").innerHTML = empRow
        }, 1000)
    }
    else {
        console.error("something went wrong")
    }
}


// getEmployee()

// let init = async ()=>{
//     await createEmployee({id:103,name:"gundu",sal:80000}).then(()=>{
//         console.log("success")
//     }).catch((err)=>{
//         console.error(err)
//     })
//     getEmployee()
// }

//alternate approach

let init = async ()=>{
    let result= await createEmployee({id:103,name:"gundu",sal:80000})
    getEmployee()
}
init();
