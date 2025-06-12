const pierreArray = ["Pierre", true, "Paris",false,["js", "python"]]
const samir = ["Samir", false, "Paris", true, ["js", "C"]]
const users = [pierreArray, samir]
//nouvelle méthode pour parcourir un tableau donc une boucle 
for (const user of users){
//on introduit le paramètre "user"
 console.log(`${user[0]} habite à ${user[2]}.`)
}

//sinon la méthode tradi :
for (let i=0;i<users.length;i++){
    console.log(`${users[i][0]} habite à ${users[i][3]}.`)
/* 1er indicateur i permet de parcourir la tableau users, le 2e indicateur est index dans les tableaux pierre et samir => 
 tableau dans tableau*/
}

console.log(users[0][1])//afficher "true"
console.log(`User ${users[0][0]} maîtrise le lanage ${users[0][4][0]}`)

//remarque : très compliqué de représenter les éléments des tableaux 

//!!!!!!!OBJET!!!!!!
const pierre = {
    firstname:"Pièrre",
    haskey:true,
    city:"Paris",
    delegate:false,
    langs:["js","c"]
}
console.log(pierre.firstname)//la même chose que pierreArray[0]

console.log("------------------------------------------")

//nouvel exo : créer un objet restaurant 
const restaurant = {
    name: "MacDo",
    menus:[
        {menuName:"mc first",price:10},
        {menuName:"best of",price:15},
        {menuName:"cheese",price:12}]
}
console.log(`${restaurant.name} a ${restaurant.menus.length} menus.`)

for (const menu of restaurant.menus){
    console.log(menu) 
}
console.log(`Le prix du menu ${restaurant.menus[0].menuName} est ${restaurant.menus[0].price} euros`)
// pour afficher tous les menus : 
for (const menu of restaurant.menus){
    console.log(`le prix du menu ${menu.menuName} est à ${menu.price} euros`)
}
// calculter le prix total de tous les menus 
function totalPirce(){
    let total = 0
    // for (let i=0;i<restaurant.menus.length;i++){
    //     total+=restaurant.menus[i].price 
    // }
    for (const menu of restaurant.menus){
        total += menu.price //on voit que "menu" remplace "restaurant.menus[i]"
    }
    return total
}
console.log(totalPirce())