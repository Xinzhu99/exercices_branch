
const showHide = document.getElementById("button")
const text = document.querySelector("p")




// hideButton.addEventListener("click", () => {
//     text.style.display = "none" 
// //style.display = "none" permet de cacher
// })
// showButton.addEventListener("click", () => {
//     text.style.display ="block" 
// //"block" permet d'afficher
// })

//comment faire avec un seul bouton : 
let userHasClicked = false
showHide.addEventListener("click",()=> {
    if (userHasClicked){
        text.style.display="none"
        userHasClicked=false
    }else{
        text.style.display="block"
        userHasClicked =true
    }

})
//on peut aussi ne pas déclarer une variable et utiliser les code du front