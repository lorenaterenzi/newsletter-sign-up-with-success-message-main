function checkEmail() {

    let theInvalidLabel = document.querySelector(".invalid-label");

    if (emailInput.value.match(validRegEx)) {

        successMessage();
        emailInput.value = "";
        emailInput.focus();

    } else {

        if (theInvalidLabel) {
            theInvalidLabel.remove();
            resetColor();
        } else {
            createLabelForInvalid();
            turnRed();
            emailInput.value = "";
            emailInput.focus();
        }
    }
}
function turnRed() {
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "rgba(255, 97, 85, 0.15)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
}
function resetColor() {
    emailInput.style.borderColor = "hsl(231, 7%, 60%)";
    emailInput.style.backgroundColor = "hsl(0, 0%, 100%)";
    emailInput.style.color = "#242742";
}
function createLabelForInvalid() {
    let divLabels = document.querySelector("div.labels");
    let invalidFieldLabel = document.createElement("label");
    invalidFieldLabel.classList.add("invalid-label");
    invalidFieldLabel.innerText = "Valid email required";
    invalidFieldLabel.style.color = "hsl(4, 100%, 67%)";
    divLabels.appendChild(invalidFieldLabel);
}
function successMessage() {
    let mainDiv = document.querySelector(".card");
    let successDiv = document.querySelector(".success-div");
    let email = document.querySelector(".success-email");

    mainDiv.style.display = 'none';
    successDiv.style.display = 'flex';
    email.innerText = `${emailInput.value}`;
    email.style.fontWeight = 700;
}
