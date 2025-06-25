let todoList = []
let ul = document.querySelector("#todoList")

function addElement(){
    todoList.push(document.querySelector("#todoTask").value)
    refreshList()

}
function deleteElements(){
    deleteElements = document.querySelectorAll(".delete")
    for(i in deleteElements){ 
        if(deleteElements[i].checked){
            todoList.pop(i)
        }
        
    }
    refreshList()
}
function setDone(){

}
function refreshList(){
    document.querySelector("#todoList").innerHTML = "";
    for(i in todoList){
        let li = document.createElement('li')
        li.innerHTML = todoList[i];
        li.classList.add("list-group-item")
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox";
        checkBox.id = i
        checkBox.classList.add("delete")
        let doneButton = document.createElement("button")
        doneButton.innerHTML = "done"
        doneButton.classList.add("done", "btn", "btn-success")
        li.appendChild(checkBox)
        li.appendChild(doneButton)
        ul.appendChild(li)
    }
}


document.querySelector("#todoAdd").addEventListener("click", addElement)
document.querySelector("#deleteButton").addEventListener("click", deleteElements)

