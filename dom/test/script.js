const buttons = document.querySelectorAll(".showId");

for (const button of buttons){
    button.addEventListener("click",()=> {
        const id = button.dataset.id;
        alerte("ID associé"+id);
    })
};