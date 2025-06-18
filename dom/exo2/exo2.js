let number = document.getElementById("total")
const addButton = document.getElementById("add")
const subButton = document.getElementById("sub")
const resetButton = document.getElementById("reset")

let total = 0
addButton.addEventListener("click", ()=> {
    number.innerText = total+=1
//par innertext on prend la valeur dure du p
})
subButton.addEventListener("click", () => {
    number.innerText = total -=1
})

resetButton.addEventListener("click", () => {
    total = 0
    number.innerText = total
})
