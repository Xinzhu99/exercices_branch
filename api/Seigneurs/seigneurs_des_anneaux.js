async function fetchData() {
    const res = await fetch("https://the-one-api.dev/v2/movie", {
        // method: "GET",                                                                                   //! pas besoin de préciser la méthode GET car c'est par défaut
        headers: { "Authorization": "Bearer GVeTGNvHZopfMwTwXkwl" }
    });
    const data = await res.json();
    const dataArr = data.docs;
    return dataArr;
};

const myList = document.querySelector("#list");
async function loadBuget() {
    const docs = await fetchData();
    for (const item of docs) {
        myList.innerHTML += `<li>${item.name} a coûté ${item.budgetInMillions} millions de dollars </li>`
    };
};
loadBuget();

// catch((error) => {
//     document.get
// })

