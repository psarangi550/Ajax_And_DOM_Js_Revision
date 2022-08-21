let Employees=[
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

let createEmployee=() => {
    return new Promise((resolve, reject) => {
        if (Employees.length===2){
            setTimeout(()=>{
                resolve({id:103,name:"gundu",sal:80000})
            },2000)
        } else {
            reject("Task yet to be completed")
        }
    })
}

let fetchEmployee=()=> {
    return new Promise((resolve, reject) => {
        console.log(Employees)
        if (isDone) {
            setTimeout(resolve,1000)
        } else {
            reject("something went wrong")
        }
    })
}

createEmployee().then((employee)=>{
        Employees.push(employee)
        console.log(Employees)
        isDone=true
        fetchEmployee().then(()=>{
            let empRow=""
            Employees.forEach((employee)=>{
                empRow+=`<tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.sal}</td>
                    </tr>`
        })
        document.querySelector("#table-body").innerHTML=empRow
    }).catch((err)=>{
        console.error(err)
    })
}).catch((err)=>{
    console.error(err)
})

