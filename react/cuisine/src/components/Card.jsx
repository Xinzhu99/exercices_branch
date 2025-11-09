import { useState } from "react";
export default function Card({ dataArr, favIdArr, setFavIdArr, showFav }) {
// const [isFavorite, setIsFavorite] = useState(false)

const addToFav = (id) => {
    if (!favIdArr.includes(id)) {
        // setFavIdArr(favIdArr.concat(id))
        setFavIdArr([...favIdArr,id])
        console.log(id)
    }
}
const removeFromFav = (id) => {
  if (favIdArr.includes(id)) {
    setFavIdArr(favIdArr.filter((i)=> i !== id))
    console.log(id)
  }
}

  return (
    <>
      {dataArr.map((recipe) => (
        <div
          key={recipe.id}
          class="recipeCard"
          className="flex flex-col items-center overflow-scroll h-100 w-80 bg-gray-800"
        >
          <h2 className="text-2xl font-bold text-amber-800">{recipe.name}</h2>
          <button onClick={()=>addToFav(recipe.id)} className="bg-amber-300 text-black border-2">Add to favorite</button>
          <button onClick={()=>removeFromFav(recipe.id)} className="bg-amber-300 text-black border-2">Remove</button>

          <div class="imageContainer" className="w-60 h-60">
            <img src={recipe.image} alt={recipe.name} />
            <ul class="ingredients">
              <h3>
                <strong className=" text-amber-800">Ingregients :</strong>
              </h3>
              {recipe.ingredients.map((ingredient, id) => (
                <li key={id}>{ingredient}</li>
              ))}
            </ul>
            <ul class="instructions">
              <h3>
                <strong className=" text-amber-800">Instructions :</strong>
              </h3>
              {recipe.instructions.map((instruction, id) => (
                <li key={id}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
