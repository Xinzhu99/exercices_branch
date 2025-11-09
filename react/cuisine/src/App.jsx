import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [favIdArr, setFavIdArr] = useState([])
  const [showFav, setShowFav] = useState(false)

  const checkFavorite = (item) => {
    if(favIdArr.includes(item.id)) {
      return true
    }
  }
  const fetchData = async () => {
    try {
      if (showFav) {
        const res = await fetch('https://dummyjson.com/recipes/search');
        const data = await res.json()
        const favRecipes = data.recipes.filter(checkFavorite)
        console.log("fav", favRecipes)
        setRecipes(favRecipes)
      } else {
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${result}`);
        const data = await res.json();
        console.log("recipes",data.recipes);
        setRecipes(data.recipes);
      } 
      } catch (error) {
      console.log("Having problems connecting to API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [result, showFav,favIdArr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(input.toLowerCase());
  };
  const handleReset = (e) => {
    e.preventDefault();
    setResult("");
    setInput("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-amber-300">My recipes</h1>
      <button className="bg-blue-500" onClick={()=> setShowFav(!showFav)}>{showFav ? "retour" : "Show fav"}</button>
      <p>{favIdArr}</p>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label>Mot clé : </label>
          <input required value={input} type="text" onInput={(e)=> setInput(e.target.value)} />
          <button type="submit">Rechercher</button>
          <button onClick={handleReset}>Reset</button>
          <p className="msg">
            {recipes.length === 0 ? "Please try another keyword" : ""}
          </p>
        </form>
      </div>
      <div class="cardsContainer" className="flex flex-wrap p-4 gap-4">
        <Card dataArr={recipes} favIdArr={favIdArr} setFavIdArr={setFavIdArr} showFav={showFav}/>
      </div>
    </>
  );
}

export default App;
