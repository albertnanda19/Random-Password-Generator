const input = document.querySelector(".input-box input");
const copy = document.querySelector(".input-box i");
const range = document.querySelector(".range input");
const span = document.querySelector(".range span");
const generateBtn = document.querySelector(".generateBtn");

let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";

range.addEventListener("input", () => {
    span.innerHTML = range.value;
    generatePassword();
});

function generatePassword(){
    value = range.value;
    let password = "";
    for (let i = 0; i < value; i++){
        let randomNumber = Math.floor(Math.random() * char.length);
        password = password + char[randomNumber];
    }
    input.value = password;
    copy.classList.replace("fa-clipboard-check", "fa-clipboard");
}

generateBtn.addEventListener("click", () => {
    generatePassword();
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(input.value)
    copy.classList.replace("fa-clipboard", "fa-clipboard-check");
    setTimeout(() => {
        copy.classList.replace("fa-clipboard-check", "fa-clipboard");
    }, 1500);
})

generatePassword();