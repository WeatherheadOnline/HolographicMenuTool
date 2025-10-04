/* *** JS instructions *****

(3a) Save this file to your project.
(3b) Add this line of code inside the body of your project:
    <script src="[YOUR FILE PATH]HolographicMenu.js"></script>

***************************/



/* ~~~ Generate the menu buttons ~~~ */

const inputElements = Array.from(document.getElementsByClassName("holograph-menu"));
const holographButtons = document.getElementById("holograph-buttons");
const holoIcon = document.getElementById("holograph-icon");
const closeHoloMenu = document.getElementById("close-holograph-menu");

inputElements.forEach(displayInput);

function displayInput(inputField) {
    btnID = inputField.getAttribute("name") + "-holo";
    colorClass = inputField.getAttribute("type") + "-color";
    const borderClass = getBorderColor(inputField);
    holographButtons.innerHTML += `
        <button id=${btnID} class="holomenu-btn ${colorClass} ${borderClass}" onclick="holoEventListener(${inputField.id})">
            ${inputField.getAttribute("data-holomenu")} 
        </button>
   `;
}

function getBorderColor(inputField) {
    let borderClass;
    if (inputField.closest("fieldset") != null && inputField.closest("fieldset").hasAttribute("name")) {
        const thisFieldset = inputField.closest("fieldset");
        borderClass = thisFieldset.name + "-border";
    } else {
        borderClass = "default-border";
    }
    return borderClass;
}

function holoEventListener(inputFieldTarget) {
    if (inputFieldTarget.type === "checkbox") {
        inputFieldTarget.checked = !inputFieldTarget.checked;
    } else if (inputFieldTarget.type === "radio") {
        inputFieldTarget.checked = true;
    }; 
    inputFieldTarget.focus();
}


/* ~~~ Add a "close" button to the input menu after all the other buttons are added ~~~*/

setTimeout(() => {
    holographButtons.innerHTML += '<span id="close-holograph-menu center-text" onclick="holoMenuOff()">&times;</span>'
}, 500);


/* ~~~ Toggle the input menu on and off ~~~ */

holoIcon.addEventListener("click", holoMenuOn);

function holoMenuOn() {
    holographButtons.style.display = "flex";
    holoIcon.style.display = "none";
}

function holoMenuOff() {
    holographButtons.style.display = "none";
    holoIcon.style.display = "block";
}


/* Dismiss the "pointer" tooltip */

const pointerDismiss = document.getElementById("pointer-dismiss");
const pointer = document.getElementById("pointer");

pointerDismiss.addEventListener("click", dismissPointer);
holoIcon.addEventListener("click", dismissPointer);

function dismissPointer() {
    pointer.style.display = "none";
    pointerDismiss.removeEventListener("click", dismissPointer);
    holoIcon.removeEventListener("click", dismissPointer);
}