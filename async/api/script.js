
async function showRecipes() {
    const response = await fetch("https://dummyjson.com/recipes");
    const recipesObject = await response.json();
    const myArr = recipesObject.recipes;
    console.log(myArr)


    const recipeList = document.querySelector("#recipeList");

    for (const item of myArr) {
        const title = document.createElement("h2");
        const servingNb = document.createElement("p");

        title.innerHTML = item.name;
        // steps.innerHTML = item.instructions;
        servingNb.innerHTML = item.servings;

        recipeList.appendChild(title);
        recipeList.appendChild(servingNb);
        // recipeList.innerHTML += `
        // <h2>${item.name}</h2>
        // <p>${item.instructions}</p>`
        for (etape of item.instructions){
            const steps = document.createElement("li");
            steps.innerHTML += etape;
            recipeList.appendChild(steps);

        }
    };
};
showRecipes();
