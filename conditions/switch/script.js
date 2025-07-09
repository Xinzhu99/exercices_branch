/*
Ecris avec des mots ce que fais le code puis lis ta phrase à un encadrant :

        int tmp = 15; 

        if (tmp < 0)   
            printf("Freezing weather.");
        else if (tmp < 10)  
            printf("Very cold weather.");
        else if (tmp < 20)  
            printf("Cold weather.");   .
        else if (tmp < 30)  
            printf("Normal in temp."); 
        else if (tmp < 40)   
            printf("Its Hot."); 
        else  
            printf("Its very hot.");

Ré-écris ce code en javascript en utilisant des IF/ELSE etc. Puis en utilisant un switch case.
*/
// let tmp = 15;
// if (tmp < 0) {
//     console.log ("Freezing water.")
// }else if (tmp < 10) {
//     console.log("Very cold weather.")
// }else if (tmp <20) {
//     console.log("Cold water.")
// }else if (tmp < 30) {
//     console.log("Normal in temp.")
// }else if (tmp < 40) {
//     console.log("It's hot.")
// }else {
//     console.log("It's very hot.")
// };

//** ci-dessous l'application de switch case **//
let tmp = 15;
switch (true) {                                           //**on ne peut pas utiliser directement "case < 10", donc on utilise un booléen true et on réécrit les conditions */
    case (tmp < 10):
        console.log("Freezing water.");
        break;                                            //*! break : pour sortir des conditions dès qu'on trouve la bonne réponse. Sans break, le résultat sera "Freezing water." & "very cold water" */
    case (tmp <20):
        console.log("Very cold weather.")
        break;
    case (tmp < 30):
        console.log("Normal in temp.")
        break;
    case (tmp < 40):
        console.log("It's hot.")
        break;
    default:
        console.log("It's very hot.")
        break;
};