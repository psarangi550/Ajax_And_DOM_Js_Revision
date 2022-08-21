Employees=[
    {
    id:101,
    name:"abi",
    sal:50000
    },
    {
        id:102,
        name:"rika",
        sal:60000
    }
]

let create_employee=(employee,callback)=>{
    setTimeout(()=>{
        Employees.push(employee)
        callback()
    },2000)
}



let fetch_employees=()=>{
    let all_emp_details=" "
    setTimeout(
        () =>{
            Employees.forEach((emp)=>{
                all_emp_details+=`<tr>
                                  <td>${emp.id}</td>
                                  <td>${emp.name}</td>
                                  <td>${emp.sal}</td>
                                  </tr>`
            })
            document.querySelector("#table-body").innerHTML = all_emp_details
        },1000)

}


create_employee({id:103,name:"gundu",sal:70000},fetch_employees)
