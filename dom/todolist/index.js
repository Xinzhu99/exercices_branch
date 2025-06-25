const task = document.querySelector("#todoTask")
const addButton = document.querySelector("#todoAdd")
const list = document.querySelector("#todoList")
let myList = []

addButton.addEventListener("click",() =>{
    const taskLine = document.createElement("li")
    const deleteButton = document.createElement("button")
    myList.push(task.value)
    taskLine.innerText=task.value
    deleteButton.innerText="Supprimer"
    taskLine.appendChild(deleteButton)
    list.appendChild(taskLine)
})

deleteButton.addEventListener("click",() =>{

})
// function addItem(){
//     todoList.push(task.value)
//     refreshList()
// }
// function refreshList(){
//     list.innerHTML = ''
//     for(i in todoList){
//         let element = document.createElement("li")
//         element.innerHTML = todoList[i]
//         list.appendChild(element)
//     }
// }
// addButton.addEventListener("click", addItem)