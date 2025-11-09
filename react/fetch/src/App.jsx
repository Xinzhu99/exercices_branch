import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  //1: initialisation de useState
  const [myData, setMyData] = useState([])
  //2: modification de la variable OU attribution de la nouvelle valeur
  const loadData = async ()=> {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    // console.log(data.recipes)
    setMyData(data.recipes)
  }
  //useEffect : pour appeler la fonction de fetch 
  //! ,[] evite la boucle infinie 
  useEffect(() => { 
    loadData()
  }, [])

  return (
    //3: utilisation de la variable 
    <>
      {myData.map((item) => 
      <div key={item.id}>
        <h3>{item.name}</h3>
        <img className="scale-20 ..." src={item.image}/>
        <p>{item.difficulty}</p>

      </div>)}
    </>
  )
}

export default App
