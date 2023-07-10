let emailInput = document.querySelector("#email");
let submitButton = document.querySelector(".submit-btn");

//email correct format
let validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//dismiss button
let dismissButton = document.querySelector(".dismiss-message");


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    checkEmail();


})


dismissButton.addEventListener('click', () => {
    returnPage();
})

function returnPage() {
    location.reload();
}