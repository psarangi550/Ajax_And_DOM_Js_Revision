// reading from the text file
document.querySelector("#text-btn").addEventListener("click",()=>{
    //here we need to be using the XMLHttpRequest
    let xhr=new XMLHttpRequest();
    //preparing the request
    xhr.open("GET","test.txt",true)
    //sending the request
    xhr.send()
    //getting the notification on the request
    xhr.onload=()=>{
        if (xhr.status===200){
            let data=xhr.responseText;
            PublishData(data)
        }
    }
})

let PublishData=(data)=>{
    document.querySelector("#text-card ").innerHTML=`<p class="lead font-weight-bold">${data}</p>`
}

//reading from the json file

document.querySelector("#json-btn").addEventListener("click",()=>{
    //here we need to be using the XMLHttpRequest
    let xhr=new XMLHttpRequest();
    //preparing the request
    xhr.open("GET","mobile.json",true)
    //sending the request
    xhr.send()
    //getting the notification on the request
    xhr.onload=()=>{
        if (xhr.status===200){
            let json_str_data=xhr.responseText;
            console.log(json_str_data)
            let all_data=JSON.parse(json_str_data);
            console.log(all_data)
            publishJsonData(all_data)
        }
    }
})


let publishJsonData=(all_data)=>{
    let jsonData=""
    all_data.forEach((data)=>{
        jsonData+=`<ul>
                    <li>ID:${data.id}</li>
                    <li>NAME:${data.name}</li>
                    <li>SALARY:${data.sal}</li>
                    <li>ADDRESS:${data.address}</li>
                </ul>`
    })
    document.querySelector("#json-card ").innerHTML=jsonData
}

//reading data using the API Data from json placeholder

document.querySelector("#api-btn").addEventListener("click",()=>{
    //here we need to be using the XMLHttpRequest
    let xhr=new XMLHttpRequest();
    //preparing the request
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
    //sending the request
    xhr.send()
    //getting the notification on the request
    xhr.onload=()=>{
        if (xhr.status===200){
            let json_str_data=xhr.responseText;
            console.log(json_str_data)
            let all_data=JSON.parse(json_str_data);
            console.log(all_data)
            publishApiData(all_data)
        }
    }
})


let publishApiData=(all_data)=>{
    let apiData=""
    all_data.forEach((data)=>{
        apiData+=`<ul>
                    <li>ID:${data.id}</li>
                    <li>NAME:${data.name}</li>
                    <li>EMAIL:${data.email}</li>
                </ul>`
    })
    document.querySelector("#api-card").innerHTML=apiData
}