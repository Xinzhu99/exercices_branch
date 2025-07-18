async function loadPage(){
    const res= await fetch('https://dummyjson.com/products?sortBy=rating&limit=10');
    const data = await res.json();
    console.log(data);

};
loadPage();