const btn = document.querySelector("#btn");
const input = document.querySelector("#userInput");
const errorMsg = document.querySelector("#errorMsg");
const errorImg=document.querySelector("#errorImg");

// console.log("btn",btn)
// console.log("input",input.value)

input.value="";

btn.addEventListener("click",()=>{
    const email = input.value.trim();
    let result = email.includes("@");
    console.log("input",result);
    if(result===false){
        input.style.border = "2px solid red";
        errorMsg.style.display = "block";
        errorImg.style.display = "block";
    }
})
