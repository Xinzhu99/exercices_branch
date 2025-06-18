const validButton= document.getElementById("button")
// let phrase = document.getElementById("texte")
const userName = document.getElementById("username")



validButton.addEventListener("click", ()=>{
    document.querySelector("p").innerText= "Bonjour, " + userName.value
//.value permet de récupérer la valeur de la variable de l'input
})

//Question : pk il faut mettre .value dans la fonction
//Q2 : pk const et let marcheng tous les deux pour  userName