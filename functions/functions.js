//Exo1
let client="Xinzhu";
function makeTea (name, addSugar){
    console.log("Faire chauffer l'eau");
    console.log("Mettre du thé dans la thétière");
    console.log("Mettre l'eau dans la théière");
    if (addSugar === true) {
        console.log("Rajouter du sucre")
    }
    console.log(`Servir le thé à ${name}`);
}

makeTea(client, true)
makeTea(1)



// console.log("Faire chauffer l'eau");
// console.log("Mettre du thé dans la thétière");
// console.log("Mettre l'eau dans la théière");
// console.log("Servir le thé à Vincent");

// console.log("Faire chauffer l'eau");
// console.log("Mettre du thé dans la thétière");
// console.log("Mettre l'eau dans la théière");
// console.log("Rajouter du sucre")
// console.log("Servir le thé à Samir");

//Exo2
function message(moment){
    if (moment === "matin")
    {console.log("J'ai trop envie de coder!")}
    if (moment === "midi")
    {console.log("J'ai faim, j'en ai marre des bugs...")}
    if (moment === "après midi")
    {console.log ("Tchao les copins!")}
    if (moment === "soir")
    {console.log("Zzzzzzzz")}
};
message("midi");