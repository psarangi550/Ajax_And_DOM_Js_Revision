let add=(a,b) =>{
    return a+b
}

output=add(10,20)
console.log(output)

let mul=(a,b)=>{
    return a*b
}

result=mul(10,20)
console.log(result);



let output_callback=(a,b,callback)=>{
    return callback(a,b)
}

final_result=output_callback(10,20,add)
console.log(final_result)

let final_output=output_callback(10,30,mul)
console.log(final_output)

// let operation="mul"

let final_output_callback = output_callback(a=5,b=2,(a,b)=>{
    return(a-b)
})

console.log(final_output_callback);







// console.log("Hello")
