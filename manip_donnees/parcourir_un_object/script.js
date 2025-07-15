const obj = {
  "candidate": "Le Filip",
  "age": 29,
  "city": "Paris",
  "region": "Île-de-France"
}
console.log(obj.candidate);

const data = [
	{
		"candidate": "Afrodite Amour",
		"age": 27,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Edeha Noire",
		"age": 34,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Le Filip",
		"age": 29,
		"city": "Paris",
		"region": "Île-de-France"
	}
]

for (const item of data){
    console.log(item.candidate)
}
//! pour récupérer toutes les clés d'un objet 
for (const key in obj){
	console.log(`${key} test`)
} 