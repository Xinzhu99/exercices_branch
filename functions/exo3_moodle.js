// corriger les codes ci-dessous. Note les erreurs et comment tu les as corrigés.
sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

function sendMessage(message, fromName, toName){
	console.log("From : ",fromName, "to : ", toName, " Message : ", message) //dans le console.log, pour séparer les éléments du string et variables, il faut utiliser ,
}
//il manque la fermeture d'accolade de la fonction et parenthèse du console.log

//sendMessage()//on ne peut pas appeler cette fonction sans arguments
sendMessage("Super on se voit mardi !", "Linda", "Marc") //pour appeler une fonction, il faut ()

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
sendMessage(myMessage, myName, contactName) //il faut mettre à jour la fonction avec les variables au lieu des noms des arguments