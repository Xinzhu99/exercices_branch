const validButton= document.getElementById("button")
// let phrase = document.getElementById("texte")
let userName = document.getElementById("username")



validButton.addEventListener("click", ()=>{
    document.querySelector("p").innerText= "Bonjour, " + userName.value
//.value permet de récupérer la valeur de la variable de l'input
})

//Question : pk il faut mettre .value dans la fonction non pas dans la déclaration de la variable userName
// car la texte affché doit prendre la nouvelle valeur rentrée initié par la fonction click, si on met .userName
// dans la déclaration et non pas dans l'action de la fonction, par l'ordre de l'exécution, la valeur ne sera pas 
// mise à jour
