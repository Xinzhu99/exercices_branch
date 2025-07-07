const todoTask = document.querySelector("#todoTask")
const addButton = document.querySelector("#todoAdd")
const todoList = document.querySelector("#todoList")

let myList = []

addButton.addEventListener("click",() =>{
    myList.push(todoTask.value)
    loadList()
})


function loadList(){
    todoList.innerHTML=''
    //each deleteButton will need a unique id to know which element has to be deleted.
    //initialize an index at 0 for the first button and increment the value at each iteration
    let index = 0;
    for (const item of myList){
        todoList.innerHTML+=`<li>${item}<button id="${index}" class="deleteButton"> Supprimer</button></li>`
        index++
    }

    const deleteButton = document.querySelectorAll(".deleteButton")
    for (const item of deleteButton){
        item.addEventListener("click", ()=> {
            myList.pop(item.id)
            loadList();
        })
    }

    //Version alternative avec l'utilisation de la fonction deleteElement
//     for (const item of deleteButton){
//         item.addEventListener("click", deleteElement(item.id))
//     }
}
function deleteElement(id) {
    return function(id){
        myList.pop(id)
        loadList();
    }
}