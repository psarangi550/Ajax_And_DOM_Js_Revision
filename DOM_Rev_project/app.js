// let document=window.document
// let document=window.document
// console.log(document)
// document.write(document)
// console.log(window.document.title);
// console.log(document.querySelector("nav").textContent)

//fetching the element using the query Selector
// let message=document.querySelector("#msg")
//printing the text for the same
// console.log(message.innerText)
//changing the inner Text
// message.innerText = 'JS DOM Revesion' ;

//changing the style for the same as below
let new_message=document.querySelector("div h3")
//accessing the innerText for the same
console.log(new_message.innerText)
//changing the text
new_message.innerText="Good Afternoon"
//changing the style
new_message.style.backgroundColor = 'black'
new_message.style.color = 'white'
new_message.style.fontWeight='italic'

