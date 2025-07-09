/*
Nous souhaitons créer un décompte.

    Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
    Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).

Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.
*/

const numbers = document.querySelector("#numbers");

let getNumber = prompt("Entrez un nombre entre 0 et 10");

if (getNumber >= 0 && getNumber <=10){
    for (i=getNumber;i>=0;i--){
        numbers.innerHTML += `${i} `;
    };
}else{
    numbers.innerHTML="Erreur. Entrez un numbre valide."
};