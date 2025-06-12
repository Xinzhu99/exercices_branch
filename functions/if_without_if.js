
function ifWithoutIf (condition, trueValue, falseValue){
    if (condition){
        return trueValue
    }
    return falseValue
}
console.log("result =", ifWithoutIf(2<4,10,5))

//en langage IT, 1 = true, 0 = false
//donc on peut remplacer "2<4" par 1 car cette condition est true, sinon on met un "0"
console.log("resultat =", ifWithoutIf(0,2,3)) //afficher 3
//ensuite on peut enlever le if dans nos codes et mettre des formules math
function ifWithoutIf2 (condition, trueValue, falseValue){
    return (condition) * (trueValue - falseValue) + falseValue
}
console.log("resultat", ifWithoutIf2(0,10,5)) //afficher falsevalue
