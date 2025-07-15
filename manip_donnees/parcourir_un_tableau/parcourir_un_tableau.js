const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];

const list = document.querySelector("#list")
console.log(candidates[0])
console.log(candidates[7])


for (const candidate of candidates){
    list.innerHTML += `<li>${candidate}</li>`
}
//quand on a besoin d'éditer d'autres éléments du li, préférable d'utiliser la méthode createElement


