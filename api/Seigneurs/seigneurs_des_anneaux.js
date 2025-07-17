async function fetchData(){
    const res = await fetch("https://the-one-api.dev/v2/movie",{
        method: "GET",
        headers : {
            "Authorization" : "Bearer GVeTGNvHZopfMwTwXkwl",
            "Content-Type" : "application/json",
        }
    });
    const data = await res.json();
    const dataArr = data.docs;
    return dataArr;
};

const myList = document.querySelector("#list");
async function loadBuget(){
    const docs = await fetchData();
    console.log(docs);
    for (const item of docs){
        myList.innerHTML += `<li>${item.name} a coûté ${item.budgetInMillions} millions de dollars </li>`
    };
};
loadBuget();

