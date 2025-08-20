const todoTask = document.querySelector("#todoTask")
const addButton = document.querySelector("#todoAdd")
const todoList = document.querySelector("#todoList")
const todosTitle = document.querySelector("#todosTitle");


let myList = [];
let dones = [];

function addTask() {
    if (todoTask.value) {
        myList.push(todoTask.value);
        // saveData();
        loadTodo();
    };
};

const deleteIcon = 
`<svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" stroke-width="1.5"
       stroke="#00b5b8" width="20" height="20">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
          1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 
          2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 
          0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 
          0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
          51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 
          2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>`

function loadTodo() {
    let index = 0;

    todoList.innerHTML = "";
    for (const item of myList) {
        todoList.innerHTML +=
            `<li>
                <input type="checkbox" class="checkBtns" data-index="${index}">
                ${item}
                <button class="deleteBtns" data-index ="${index}" aria-label="delete"> ${deleteIcon} </button>
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
                completedTaskList.innerHTML += `<li> ✅ ${item}</li>`;

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










