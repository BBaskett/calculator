// Global Variables
var current = document.querySelector("input#current");
var previous = document.querySelector("input#previous");
var last_command = document.querySelector("input#lastCommand");
var number_buttons = document.querySelectorAll("div.number");
var action_buttons = document.querySelectorAll("div.action");
var clear_button = document.querySelector("div#clear");
// Event Listeners
window.onclick = function (event) {
    if (event.target.className.includes("button")) {
        if (current.value !== "0") {
            return (clear_button.innerText = "C");
        }
    }
};
number_buttons.forEach(function (button) {
    return button.addEventListener("click", function () {
        // If input length is too long
        if (current.value.length > 30) {
            return;
        }
        // If decimal already exists
        if (button.innerText === "." && current.value.includes(".")) {
            return;
        }
        return current.value === "0"
            ? current.setAttribute("value", button.innerText)
            : current.setAttribute("value", current.value + button.innerText);
    });
});
action_buttons.forEach(function (button) {
    return button.addEventListener("click", function () {
        if (button.innerText === "AC") {
            current.setAttribute("value", "0");
            previous.setAttribute("value", "");
            return last_command.setAttribute("value", "");
        }
        if (button.innerText === "C") {
            current.setAttribute("value", "0");
            return (clear_button.innerText = "AC");
        }
        if (last_command.value !== "" &&
            button.innerText !== "=" &&
            current.value !== "0") {
            if (last_command.value === "+") {
                previous.setAttribute("value", add(Number(previous.value), Number(current.value)));
            }
            if (last_command.value === "-") {
                previous.setAttribute("value", subtract(Number(previous.value), Number(current.value)));
            }
            if (last_command.value === "x") {
                previous.setAttribute("value", multiply(Number(previous.value), Number(current.value)));
            }
            if (last_command.value === "/") {
                previous.setAttribute("value", divide(Number(previous.value), Number(current.value)));
            }
            current.setAttribute("value", "0");
            return last_command.setAttribute("value", button.innerText);
        }
        if (button.innerText === "%") {
            return current.setAttribute("value", (Number(current.value) / 100).toString());
        }
        if (button.innerText === "+/-") {
            return current.setAttribute("value", (Number(current.value) * -1).toString());
        }
        if (button.innerText === "+") {
            if (previous.value === "") {
                previous.setAttribute("value", current.value);
            }
            else {
                previous.setAttribute("value", add(Number(previous.value), Number(current.value)));
            }
            current.setAttribute("value", "0");
            return last_command.setAttribute("value", button.innerText);
        }
        if (button.innerText === "-") {
            if (previous.value === "") {
                console.log(current.value);
                previous.setAttribute("value", current.value);
            }
            else {
                previous.setAttribute("value", subtract(Number(previous.value), Number(current.value)));
            }
            current.setAttribute("value", "0");
            return last_command.setAttribute("value", button.innerText);
        }
        if (button.innerText === "x") {
            if (previous.value === "") {
                previous.setAttribute("value", current.value);
            }
            else {
                previous.setAttribute("value", multiply(Number(previous.value), Number(current.value)));
            }
            current.setAttribute("value", "0");
            return last_command.setAttribute("value", button.innerText);
        }
        if (button.innerText === "/") {
            if (previous.value === "") {
                previous.setAttribute("value", current.value);
            }
            else {
                previous.setAttribute("value", divide(Number(previous.value), Number(current.value)));
            }
            current.setAttribute("value", "0");
            return last_command.setAttribute("value", button.innerText);
        }
        if (button.innerText === "=") {
            if (previous.value === "") {
                return;
            }
            if (previous.value !== "") {
                if (last_command.value === "+") {
                    current.setAttribute("value", add(Number(previous.value), Number(current.value)));
                }
                if (last_command.value === "-") {
                    current.setAttribute("value", subtract(Number(previous.value), Number(current.value)));
                }
                if (last_command.value === "x") {
                    current.setAttribute("value", multiply(Number(previous.value), Number(current.value)));
                }
                if (last_command.value === "/") {
                    current.setAttribute("value", divide(Number(previous.value), Number(current.value)));
                }
                previous.setAttribute("value", "");
                return last_command.setAttribute("value", "");
            }
        }
    });
});
// Utility Functions
var add = function (a, b) {
    return (a + b).toString();
};
var subtract = function (a, b) {
    return (a - b).toString();
};
var multiply = function (a, b) {
    return (a * b).toString();
};
var divide = function (a, b) {
    return (a / b).toString();
};
