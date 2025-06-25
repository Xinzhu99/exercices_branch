
const headLine = document.querySelector("h1")
const subButton = document.getElementById("newsletter")


subButton.addEventListener("click", ()=>{
    headLine.innerText = "Thanks for your support!"
})