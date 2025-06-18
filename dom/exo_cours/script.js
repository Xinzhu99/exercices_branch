const pageTitle = document.querySelector("h1")
//document permet de chercher les éléments dans la page html
const subscribeButton = document.querySelector("#newsletter") //dans le fichier html, le texte original est "Subscrible"
const smiley = document.querySelector("#smiley")

let userIsSubscribed = false
function checkSub(){ 
    if (userIsSubscribed){
        userIsSubscribed = false
       subscribeButton.innerText = "Subscribe" //il faut que ce que le même text
       /*subscribeButton.innerText = "Unsubsribe" , innertext means "changer de text"*/
    }else{
        userIsSubscribed = true
        subscribeButton.innerText = "Unsubsribe"
    }
}
// function checkSubSimple(){ 
//     if (subscribeButton.innerText === "Unsubscribe"){
//        subscribeButton.innerText = "Subscribe" 
//     }else{
//         subscribeButton.innerText = "Unsubscribe"
//     }
// }
subscribeButton.addEventListener("click",checkSub)
document.querySelector("#newsletter").addEventListener("click", () => {
}) 

function spinSmiley(){
    smiley.classList.add("spinned")
}
smiley.addEventListener("mouseover",spinSmiley)