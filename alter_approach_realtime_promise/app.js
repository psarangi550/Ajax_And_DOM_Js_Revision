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

let createEmployee=(employee) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            Employees.push(employee)
            isDone=true
            if (isDone){
                resolve()
            }
            else{
                reject("Something went wrong")
            }
        },2000)
    })
}

let getEmployee=()=>{
    let empRow=""
    setTimeout(() =>{
        Employees.forEach((emp)=>{
            empRow+=`<tr>
                    <td>${emp.id}</td>   
                    <td>${emp.name}</td>   
                    <td>${emp.sal}</td>
                    </tr>`
        })
        document.querySelector("#table-body").innerHTML =empRow
    },1000)
}

// getEmployee()

createEmployee({id:103,name:"gundu",sal:80000}).then(()=>{
    getEmployee()
}).catch((err)=> {
    console.log(err)
})