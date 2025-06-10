// //exo du cours du 10 juin : créer une fonction qui prend en paramètre d'un tableau avec les prix des articles choisis (par exemple : [1,4,7]) et qui permettent de 
// //calculer le total de la somme 
// function totalPrice (articles){
//     total = 0;
//     //je veux que mon total s'additionne à chaque tour de boucle les éléments de mon tableau => parcourir mon tableau
//     for (let i=0;i<articles.length;i++){
//         if (articles[i]!== 2){
//             total+=articles[i]
//         }
//     }
//     return total; //si je mets "return total" dans la boucle, la boucle s'arrête au 1er élément parcouru
// };
// console.log(totalPrice([2,5,6]));
// console.log(totalPrice([2,2,2,2]));


// //exo 2 : créer une fonction createPrice qui prend en paramètre le nombre des articles, et qui retourne un tableau aléatoire qui affiche les chiffres entre 1 et 10
// const createPrice = (articleCount) =>{
//     let output = []
//     for(let i = 0; i< articleCount; i++){
//         //return un chiffre choisi aléatoirement entre 0 et 10 : Math.random() * 10;
//         // Math.round permet de l'arrondir : Math.round(Math.random() * 10
//         //output.push permet d'ajouter à chaque tour le chiffre crée au tableau output
//         output.push(Math.round(Math.random() * 10))
//         //console.log("output = ", output) => cette technique d'indiquer les console permet de vérifier étape par étape mes codes
//     };
//     return output
// };

// console.log("Résult : ", createPrice(5))
// console.log("----------------------------------------")

// //Exo 3 :créer une fonction qui prend Un nombre entre 0 et 10, et qui retourne le chiffre écrit en toutes lettres
// const myArabicNumbers = [0, 1, 2, 3,4];
// const myAlphabetNumbers = ["zéro","un","deux","trois","quatre"];
// const createNumber = myArabicNumbers[Math.floor(Math.random() * myArabicNumbers.length)];
// const createIndex = myArabicNumbers.indexOf(createNumber);

// console.log(createIndex);
// function convertNumberToLetter(createIndex){
//     for (i=0; i<myAlphabetNumbers.length;i++){
//         if (createIndex === i){
//             return myAlphabetNumbers[i];
//         };
//     };
// };
// console.log(convertNumberToLetter(createIndex));
// console.log("------------------------------------------");

// //pas besoin de compliquer la vie !!!!! la version bien plus simple :
// function convertDigitalToLetters (variable){
//     return myAlphabetNumbers[variable];
// };
// console.log(convertDigitalToLetters(0));
// console.log("-------------------------------")

// //exo 4 : créer deux tableaux : l'un qui propose cinq prénoms, et le deuxième qui propose cinq préférences de parfums de glace
// //créer une fonction qui donne pour chaque prénom, le parfum de glace correspondant
// const prenoms = ["Salem", "Vincent","Abdel", "Meyko", "Mattéo"];
// const parfums = ["caramel", "chocolat", "pistache", "cassis", "vanille"];

// //const myIndex = prenoms.indexOf("Vincent")

// function parfumParPrenom(prenom){
//     for (let i=0; i<parfums.length;i++){
//         if (i === prenoms.indexOf(prenom)){
//             return parfums[i]
//         };
//     };
// };
// console.log(parfumParPrenom("Vincent"));
// console.log(parfumParPrenom("Salem"));
// console.log(parfumParPrenom("Meyko"));
// console.log(parfumParPrenom("Mattéo"));
// console.log(parfumParPrenom("Abdel"));
// console.log("--------------------------------------------");

//Exo 5 : une fonction qui prend comme paramétre un tableau de taille et qui classifier les gens. 
// nb : les grandes tailles c'est supérieure a 1m50
//avoir 2 tableaux, un pour les grandes tailles et un pour les petites tailles
// groupe petite taille : [ 146, 150, 140 ]
//groupe grande taille : [ 153, 166, 180, 200 ]

const sizes = [146,150,153,140,166,180,200];
function sizeClassifer(array){
    const smallSizes=[];
    const bigSizes=[];
    for (let i=0;i<array.length;i++){
       if(array[i] <= 150){
        smallSizes.push(array[i]);
       }else{
        bigSizes.push(sizes[i]);
       };
    };
    return [bigSizes, smallSizes] //car on ne peut pas faire 2 returns en même temps, sinon la solution est d'utiliser les console.log
};
console.log(sizeClassifer(sizes))

//Exo 6 :
