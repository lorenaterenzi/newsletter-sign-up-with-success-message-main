let emailInput = document.querySelector("#email");
let submitButton = document.querySelector(".submit-btn");

//email correct format
let validRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//dismiss button
let dismissButton = document.querySelector(".dismiss-message");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmail();
});

dismissButton.addEventListener("click", () => {
  returnPage();
});

function returnPage() {
  location.reload();
}
