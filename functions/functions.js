//Exo1
// let client="Xinzhu";
// function makeTea (name, addSugar){
//     console.log("Faire chauffer l'eau");
//     console.log("Mettre du thé dans la thétière");
//     console.log("Mettre l'eau dans la théière");
//     if (addSugar === true) {
//         console.log("Rajouter du sucre")
//     }
//     console.log(`Servir le thé à ${name}`);
// }

// makeTea(client, true)
// makeTea(1)



// console.log("Faire chauffer l'eau");
// console.log("Mettre du thé dans la thétière");
// console.log("Mettre l'eau dans la théière");
// console.log("Servir le thé à Vincent");

// console.log("Faire chauffer l'eau");
// console.log("Mettre du thé dans la thétière");
// console.log("Mettre l'eau dans la théière");
// console.log("Rajouter du sucre")
// console.log("Servir le thé à Samir");



//Exo3 :
function getMomentFromHour (heure){
    if (heure>=0, heure < 12){
        return "matin" //retourne directe la valeur du "moment" que je veux utiliser plus tard pour relier les deux fonctions, pas besoin de créer une variable "moment"
    }
     if (heure === 12){
        return "midi"
    }
     if (heure>12, heure < 19){
        return "après-midi"
    }
    if (heure >=19, heure <=24){
        return "soir"
    }
};

//console.log(getMomentFromHour(12));

function printEmotion(moment){
    if (moment = "matin")
    {return ("J'ai trop envie de coder!")}
    if (moment ="midi")
    {return("J'ai faim, j'en ai marre des bugs...")}
    if (moment = "après midi")
    {return ("Tchao les copins!")}
    if (moment = "soir")
    {return("Zzzzzzzz")}
};


//comment relier les deux fonctions :
function getEmotionFromHour (heure){
    let moment = getMomentFromHour(heure); //il faut déclarer la variable à l'intérieur de la fonction car c'est suelement quand on appelle la fonction on transforme l'heure en moment, sinon ce sera undefined
    console.log(printEmotion(moment)) 
    // si on crée pas la variable moment : 
    //console.log(printEmotion(getMomentFromHour(heure)));
};
getEmotionFromHour(getMomentFromHour(11));
