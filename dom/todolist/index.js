const todoTask = document.querySelector("#todoTask")
const addButton = document.querySelector("#todoAdd")
const todoList = document.querySelector("#todoList")

let myList = [];

//fonction : afficher la list des tâches:
function loadList() {
    todoList.innerHTML='';                                                                           //*on vide d'abord la liste html avant chaque affichage */               
    
    let index = 0;                                                                                   //*on créer l'affichage dynamique en ajoutant un index à chaque bouton supprimer pour pouvoir identifier facilement l'élément à supprimer dans le tableau plus tard

    for (const item of myList){
        todoList.innerHTML += 
        `<li>
            <input type="checkbox" id="${index}" class="checkBtn">
            ${item}
            <button id="${index}" class="deleteButton"> Supprimer</button>
        </li>`;            //*on associe l'index à l'id des boutons
        index++ ;
    };
//fonction : supprimer les éléments:
    const deleteButton = document.querySelectorAll(".deleteButton");
    for (const item of deleteButton){
        item.addEventListener("click", ()=> {
            myList.splice(item.id,1)                                                                  //! je veux supprimer l'élément  à l'index "item.id" de mon tableau; méthode "array.splice(start,delete count)"; 
            loadList();                                                                
        });
    };
//fonction : checker les éléments :
    const completedTaskList = document.querySelector("#completedTaskList")
    const checkBtn = document.querySelectorAll(".checkBtn")
    const completedTasks = document.querySelector("#completedTasks")

    let dones=[];

    for (const item of checkBtn){
        item.addEventListener("click", ()=>{
            completedTasks.style.display = "block";
            
            completedTaskList.innerHTML='';

            dones.push(myList[item.id]);
            for (const done of dones) {
                completedTaskList.innerHTML += `<li>${done}</li>`
            };
        });
    };

    todoTask.value = '';
};

addButton.addEventListener("click",() =>{
    if (todoTask.value) {
        myList.push(todoTask.value);
        loadList();
    };
});


