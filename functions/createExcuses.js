/*
Exercice 3 — La machine à excuses
Contexte : Tu veux créer une fonction qui génère des excuses complètement farfelues quand un élève est en retard 😅
Étape 1 — Crée une fonction genererExcuse
Elle prend trois paramètres :
    prenom   heure   raison
Et elle affiche une phrase du type :
    "Je m'appelle Vincent, je suis arrivé à 10h25 parce que mon hamster a volé mes clés."
Étape 2 — 
- Crée un tableau de string avec plusieurs excuses possibles. 
- Créer une fonction qui tire une excuse au hasard et appelle genererExcuse avec celle-ci
*/

const excuses = ["mon père est décédé.","je me suis levée la tête dans le cul","je n'ai simplement pas envie de te voir"];
function createExcuses (name, time) {
    let reason = Math.floor(Math.random () * excuses.length);
    return `Je suis ${name}, je suis arrivé.e à ${time} parce que ${excuses[reason]}`;
};
console.log(createExcuses("Xinzhu", "10h30"));


