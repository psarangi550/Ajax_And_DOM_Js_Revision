registerForm=document.querySelector("#register-form")
registerForm.addEventListener("click",(event)=>{
    event.preventDefault();
    // console.log(`value is ${validateForm()}`)
    if (validateForm()==true){
        alert("Register Form Been Submitted Successfully")
    }
})

let validateForm=() =>{
    return(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword())
}

let checkUserName=()=>{
    let inputEl=document.querySelector("#username");
    let inputFeedbackEl=document.querySelector("#username-feedback")
    let regexEl=/^[a-zA-Z0-9]{4,9}$/
    if (regexEl.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl)
        return true
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl)
        return false
    }
};

let checkEmail=()=>{
    let inputEl=document.querySelector("#email");
    let inputFeedbackEl=document.querySelector("#email-feedback")
    let regexEl=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regexEl.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl)
        return true
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl)
        return false
    }
};
let checkPassword=()=>{
    let inputEl=document.querySelector("#password");
    let inputFeedbackEl=document.querySelector("#password-feedback")
    let regexEl=/^[A-Za-z]\w{7,14}$/;
    if (regexEl.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl)
        return true
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl)
        return false
    }
};

let checkConfirmPassword=()=>{
    let inputEl=document.querySelector("#c-password");
    let passwordEl=document.querySelector("#password")
    let inputFeedbackEl=document.querySelector("#c-password-feedback")
    let regexEl=/^[A-Za-z]\w{7,14}$/;
    if (regexEl.test(inputEl.value) && inputEl.value===passwordEl.value ){
        makeValid(inputEl,inputFeedbackEl)
        return true
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl)
        return false
    }
};

let makeValid=(inputEl,inputFeedbackEl)=>{
    inputEl.classList.add("border-color")
    inputEl.classList.remove("border-uncolor")
    inputFeedbackEl.classList.add("text-valid")
    inputFeedbackEl.classList.remove("text-invalid")
    inputFeedbackEl.innerText="Looks Good"
}

let makeInvalid=(inputEl,inputFeedbackEl)=>{
    inputEl.classList.remove("border-color")
    inputEl.classList.add("border-uncolor")
    inputFeedbackEl.classList.remove("text-valid")
    inputFeedbackEl.classList.add("text-invalid")
    inputFeedbackEl.innerText=`Enter a valid ${inputEl.placeholder}`
}

let inputEl=document.querySelector("#username");
inputEl.addEventListener("keyup",()=>{
    checkUserName()
})

let emailEl=document.querySelector("#email");
emailEl.addEventListener("keyup",()=>{
    checkEmail()
})

let passwordEl=document.querySelector("#password");
passwordEl.addEventListener("keyup",()=>{
    checkPassword()
})

let confirmPasswordEl=document.querySelector("#c-password");
confirmPasswordEl.addEventListener("keyup",()=>{
    checkConfirmPassword()
})