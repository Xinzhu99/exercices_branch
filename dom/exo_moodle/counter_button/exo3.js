

const counterButton =document.getElementById("counter")
let count = 0
counterButton.addEventListener("click", ()=> {
    count ++
    if(count === 1){
        counterButton.innerText = "1 clic!"
    }else{
        counterButton.innerText=`${count} clics!`
    }
})