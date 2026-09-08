function getNumbers() {
    const first = Number(document.getElementById("first-number").value);
    const second = Number(document.getElementById("second-number").value);
    return [first, second];
}

function showResult(result) {
    const output = document.getElementById("output");

    output.innerHTML = String(result);

    if (result < 0) {
        output.className = "output negative";
    } else {
        output.className = "output";
    }
}

function addition() {
    const numbers = getNumbers();
    showResult(numbers[0] + numbers[1]);
}

function subtraction() {
    const numbers = getNumbers();
    showResult(numbers[0] - numbers[1]);
}

function multiplication() {
    const numbers = getNumbers();
    showResult(numbers[0] * numbers[1]);
}

function division() {
    const numbers = getNumbers();

    if (numbers[1] === 0) {
        showResult("Cannot divide by zero.");
        return;
    }

    showResult(numbers[0] / numbers[1]);
}

function power() {
    const numbers = getNumbers();
    let result = 1;

    if (numbers[1] < 0) {
        for (let i = 0; i > numbers[1]; i--) {
            result = result / numbers[0];
        }
    } else {
        for (let i = 0; i < numbers[1]; i++) {
            result = result * numbers[0];
        }
    }

    showResult(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").className = "output";
}
