const square = document.querySelector(".square")
const redButton = document.getElementById("red")
const greenButton = document.getElementById("green")
const blueButton = document.getElementById("blue")
//quand on utilise getID, pas besoin d'ajouter le #


redButton.addEventListener("click", () => {
  square.style.backgroundColor="red"
})
greenButton.addEventListener("click",() => {
    square.style.backgroundColor="green"
})
blueButton.addEventListener("click",() => {
    square.style.backgroundColor="blue"

})
