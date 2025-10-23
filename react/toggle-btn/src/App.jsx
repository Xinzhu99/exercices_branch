import { useState } from 'react'
import './App.css'

function App() {
  const [makeSense, setMakeSense] = useState(false)

  function changeState () {
    setMakeSense(!makeSense)           //!comme toggle()
  }
  //exo 2: affichier les éléments d'une liste en utilisant map()
  //exo3: utiliser le bouton pour afficher la liste
  const meaningfulList = [
    {
      title:"cripsy chciken",
      emoji:"🐔",
      rating: 5
    },
    {
      title:"crisps",
      emoji:"😋",
      rating: 4
    }, 
    {
      title:"friends",
      emoji:"👫",
      rating: 3
    }]

  const meaninglessList = ["je sais pas", "tjs pas","encore pas"]
  const [showMeaningful, setShowMeaningful] = useState(true)

  function switchMeaningState () {
    setShowMeaningful(!showMeaningful) 
  }
  //je créé des constances d'éléments html que j'intègre dans mon app return plus tard 
  const meaningfulItems = meaningfulList.map((item) =>
    <li key={item.title}>
      <h1>{item.title}</h1>
      <h1>{item.emoji}</h1>
      <p>{item.rating}</p>
    </li>
  )
  const meaninglessItems = meaninglessList.map((item) => 
    <li>{item}</li>
  )


  return (
  <>
    <div>
      <h1 className="text-2xl font-bold underline">Tailwind Baby!</h1>
      <button onClick={changeState}>{makeSense ? "Il y du sens" : "ça n'a aucun sens"}</button>
      <ul>{showMeaningful ? meaningfulItems : meaninglessItems}</ul>
      <button onClick={switchMeaningState}>Show other lists</button>
    </div>
  </>
  )
}

export default App
