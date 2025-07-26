
async function fetchData() {                                          //* séparer la fonction fetch de la fonction principale
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const dataArr = await data.recipes;
    return dataArr;
};


async function showRecipes() {
    const recipeList = document.querySelector("#recipeList");

    let recipes = await fetchData();                                 //! déclarer une variable pour stocker le return de fetchData et ajouter async devant ma fonction principale

    //* méthode 1 :
    for (const item of recipes) {
        recipeList.innerHTML +=
            `<h2>${item.name}</h2>
            <img src =${item.image}>
        <h3> Niveau de difficulté : ${item.servings}</h3>`
        
        const ul = document.createElement("ul");

            for (etape of item.instructions) {
                ul.innerHTML += `<li class="eachInstruction">${etape}</li>`             //! j"ajoute un rl qui englobe mes li pour afficher avec les bulletspoints
            };
        recipeList.appendChild(ul);

        //* ci dessous méthode 2
        // for (const item of recipes) {
        //     const title = document.createElement("h2");
        //     const servingNb = document.createElement("p");

        //     title.innerHTML = item.name;
        //     servingNb.innerHTML = item.servings;

        //     recipeList.appendChild(title);
        //     recipeList.appendChild(servingNb);
        //     for (const step of item.instructions) {
        //         const steps = document.createElement("li");
        //         steps.innerHTML += step;
        //         recipeList.appendChild(steps);
        //     };

        //     recipeList.appendChild(title);
        //     recipeList.appendChild(servingNb);

        //*méthode 3:
        // recipeList.innerHTML += `<ul>${item.instructions.map((etape) => `<li>${etape}</li>`).join('')}</ul>`
    };
};
showRecipes();

const testFunction = async (params) => {
    
}