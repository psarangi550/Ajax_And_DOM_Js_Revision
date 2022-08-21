employees = [{
        id: 101,
        name: "rika",
        age: 24
    },
    {
        id: 102,
        name: "abi",
        age: 25
    }
]

// function createEmployee(employee) {
//     setTimeout(() => {
//         employees.push(employee);
//     }, 2000);
// }

function getEmployee(employees) {
    let empDetail = ""
    employees.forEach(element => {
        empDetail += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    </tr >`;
    });
    console.log(empDetail);
    document.getElementById('tbl-body').innerHTML = empDetail;
}

//problem

// createEmployee({ id:103, name: "gundu", age: 24 })
// getEmployee(employees)


//solving using the callback

// function createEmployee(employee, callback) {
//     setTimeout(() => {
//         employees.push(employee);
//         callback(employees)
//     }, 2000);
// }

// createEmployee({
//     id: 103,
//     name: 'gundu',
//     age: 24
// }, getEmployee)


//solving it using the promise concept

// function createEmployee(employee) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             employees.push(employee);
//             let insert_emp = true;
//             if (insert_emp) {
//                 resolve(employees)
//             } else {
//                 reject("something went wrong")
//             }
//         }, 2000);
//     })
// }

// createEmployee({ id: 103, name: "gundu", age: 23 })
//     .then((employees) => {
//         getEmployee(employees)
//     })
//     .catch((err) => {
//         console.error(err);
//     })


//solving using the async await 

function createEmployee(employee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(employee);
            let insert_emp = true;
            if (insert_emp) {
                resolve(employees)
            } else {
                reject("something went wrong")
            }
        }, 2000);
    })
}

async function solve(resolve) {
    await resolve({ id: 103, name: "gundu", age: 24 })
    getEmployee(employees)
}

solve(createEmployee)