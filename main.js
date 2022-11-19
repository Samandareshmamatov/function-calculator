let number1 = Number(prompt("1-sonni kiriting : "));
let action = (prompt("+, -, *, /, amallaridan birini kiriting : "));
let number2 = Number(prompt("1-sonni kiriting : "));

// Function declaration

function calculator(number1, action, number2) {
    if (action == "+") {
        return alert(`FD : ${number1} + ${number2} = ` + (number1 + number2));
    } else if (action == "-") {
        return alert(`FD : ${number1} - ${number2} = ` + (number1 - number2));
    } else if (action == "*") {
        return alert(`FD : ${number1} * ${number2} = ` + (number1 * number2));
    } else if (action == "/") {
        return alert(`FD : ${number1} / ${number2} = ` + (number1 / number2));
    } else {
        return alert(`FD : Qayta urinib ko'ring`);
    }
}

calculator(number1, action, number2);



// Function expression

/* const calculator = function(number1, action, number2) {
    if (action == "+") {
        return alert(`FE : ${number1} + ${number2} = ` + (number1 + number2));
    } else if (action == "-") {
        return alert(`FE : ${number1} - ${number2} = ` + (number1 - number2));
    } else if (action == "*") {
        return alert(`FE : ${number1} * ${number2} = ` + (number1 * number2));
    } else if (action == "/") {
        return alert(`FE : ${number1} / ${number2} = ` + (number1 / number2));
    } else {
        return alert(`FE : Qayta urinib ko'ring`);
    }
}

calculator(number1, action, number2); */