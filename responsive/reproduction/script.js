const btn = document.querySelector("#btn");
const input = document.querySelector("#userInput");
const errorMsg = document.querySelector("#errorMsg");
const errorImg = document.querySelector("#errorImg");


input.value = "";

function validationEmail(email){
    console.log("email",email)
    const emailPattern = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);

}

btn.addEventListener("click", () => {
    var email = input.value.trim();

    if (validationEmail(email)) {
        console.log("Valid email address.");
    } else {
        input.style.border = "2px solid red";
        errorMsg.style.display = "block";
        errorImg.style.display = "block";
    }
})
