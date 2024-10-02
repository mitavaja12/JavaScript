const add = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = Number(num1) + Number(num2);
    document.getElementById('result').innerText = `The result of addition is ${result}`;
}

const sub = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = num1 - num2;
    document.getElementById('result').innerText = `The result of subtraction is ${result}`;
}

const multiply = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = num1 * num2;
    document.getElementById('result').innerText = `The result of multiplication is ${result}`;
}

const divide = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = num1 / num2;
    document.getElementById('result').innerText = `The result of division is ${result}`;
}