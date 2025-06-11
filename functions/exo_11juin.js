// On souhaite creer une app qui permet de dire qui a les clefs de l'ecole
// L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
// On donne en parametre, le prenom
// function hasKey(firstname)
// On va avoir un tableau avec les noms
// des personnes qui ont les clefs :
// ['Pierre', 'Laure', 'Mathilde', 'Vi']
// console.log(hasKey('Jerem')) // affiche 'non'
// console.log(hasKey('Laure')) // affiche 'oui'
const names = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
function hasKey(firstname) {
    for (let i = 0; i < names.length; i++) {
        if (firstname === names[i]) {
            return "oui";// ça veut dire tant que la condition n"est pas remplie, ça relance la boucle
        };
    } return "non"
};
console.log(hasKey('Toto')) // affiche 'non'
console.log(hasKey('Laure')) // affiche 'oui'





// BONUS, level++ :
// L'objectif est de remplacer le tableau par un tableau d' object
// [

//     firstname: Pierre,
//     hasKey: true
//   },
//   {
//     firstname: Jerem,
//     hasKey: false
//   }
// ]
// Et la fonction ne prend plus de paramètre mais renvoie la liste (sous forme de tableau) des personnes qui ont les clefs

const list = [
    {
        firstname: 'Pierre',
        hasKey: true
    },
    {
        firstname: 'Jerem',
        hasKey: false
    }
]
function showKeyHolders() {
    let keyHolders = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].hasKey === true) { //attention : on utilise = suelement pour déclarer les V ou assigner une valeur 
            keyHolders.push(list[i]);
        };
    };
    return keyHolders;
};
console.log(showKeyHolders());

//con : cette fonction permet de slectionner une partie d'un tableau / dictionnaire 