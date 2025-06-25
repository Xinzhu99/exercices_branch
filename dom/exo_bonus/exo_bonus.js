const addButton = document.getElementById("add")
const check = document.getElementById("checkbox")

addButton.addEventListener("click", ()=> {
    document.getElementById("taskName").innerText=task.value
    document.getElementById("myList").style.display="block"
})

check.addEventListener("click", () =>{
    document.getElementById("taskName").style.textDecoration="line-trough"
})