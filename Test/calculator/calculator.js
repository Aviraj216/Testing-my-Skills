const screens = document.getElementById("screen");
const numbers = document.querySelectorAll(".value");
const actions = document.querySelectorAll(".action");
const equalstoo = document.getElementById("equals-too")
const clear = document.getElementById("all-clear")
const firstnums = document.getElementById("first-num");
const secondnums = document.getElementById("sec-num");
const operators = document.getElementById("operator");
const names = document.getElementById("heading1")

const name = prompt("Please Write Your Name below!");
names.innerText = "Welcome " + name;

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (operators.innerText === "") {
            firstnums.innerText += button.innerText;
        } else {
            secondnums.innerText += button.innerText;
        }
    });
});

actions.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText === "C") {
            firstnums.innerText = "";
            secondnums.innerText = "";
            operators.innerText = "";
            screens.innerText = "";
            return;
        } else if (button.innerText === "🔙") {
            if (secondnums.innerText !== "") {
                secondnums.innerText = secondnums.innerText.slice(0, -1);
            } else if (operators.innerText !== "") {
                operators.innerText = "";
            } else if (firstnums.innerText !== "") {
                firstnums.innerText = firstnums.innerText.slice(0, -1);
            }
            return;
        } else if (operators.innerText === "➕") {
            screens.innerText = Number(firstnums.innerText) + Number(secondnums.innerText);
        } else if (operators.innerText === "➖") {
            screens.innerText = Number(firstnums.innerText) - Number(secondnums.innerText);
        } else if (operators.innerText === "✖️") {
            screens.innerText = Number(firstnums.innerText) * Number(secondnums.innerText);
        } else if (operators.innerText === "➗") {
            screens.innerText = Number(firstnums.innerText) / Number(secondnums.innerText);
        } else {
            operators.innerText = button.innerText;
        }
    });
});
