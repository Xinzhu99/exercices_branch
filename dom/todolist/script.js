const todoTask = document.querySelector("#todoTask")
const addButton = document.querySelector("#todoAdd")
const todoList = document.querySelector("#todoList")


let myList = [];
let dones = [];

function addTask() {
    if (todoTask.value) {
        myList.push(todoTask.value);
        // saveData();
        loadTodo();
    };
};

function loadTodo() {
    let index = 0;
    todoList.innerHTML = "";
    for (const item of myList) {
        todoList.innerHTML +=
            `<li>
                <input type="checkbox" class="checkBtns" data-index="${index}">
                ${item}
                <button class="deleteBtns" data-index ="${index}"> Supprimer</button>
            </li>`;
        index++;
    };
    todoTask.value = "";

    const deleteButtons = document.querySelectorAll(".deleteBtns");

    for (const button of deleteButtons) {
        button.addEventListener("click", (event) => {
            const idx = button.dataset.index;

            myList.splice(idx, 1);
            // saveData();
            loadTodo();                                                            //! je veux supprimer l'élément  à l'index "item.id" de mon tableau; méthode "array.splice(start,delete count)"; 
            // button.parentElement.remove();
        });
    };
    const completedTaskList = document.querySelector("#completedTaskList");
    const checkBtn = document.querySelectorAll(".checkBtns");
    const completedTasks = document.querySelector("#completedTasks");

    for (const item of checkBtn) {
        item.addEventListener("click", () => {
            completedTasks.style.display = "block";

            let idx = item.dataset.index

            dones.push(myList[idx]);

            myList.splice(idx,1);

            // saveData();

            loadTodo();

            completedTaskList.innerHTML = "";
            for (const item of dones) {
                completedTaskList.innerHTML += `<li>${item}</li>`;

            };
        });
    };
}
loadTodo();

//fonction pour le localstorage :
// const saveData = () => {
//     localStorage.setItem("myList",JSON.stringify(myList));
//     localStorage.setItem("dones",JSON.stringify(dones));
    
// };










