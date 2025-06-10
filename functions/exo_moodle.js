// Exo 1 : addition 
// Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. Objectif : Voir dans la console : 
// “Le résultat de la somme est 6”

function addition3Numbers(){
    console.log("Le résultat de la somme est :", 1+2+3)
}
addition3Numbers()

//Exo Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais
//cette fois-ci à partir de 3 arguments. Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
//Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.
let N1 = 1;
let N2 = 2;
let N3 = 5;
function addition3NumbersWithArg(N1,N2,N3){
    return N1 + N2 + N3;
}
console.log("Le résultat de la somme est :", addition3NumbersWithArg(N1,N2,N3));

