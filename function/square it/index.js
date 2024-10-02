const square = () => {

    let num = document.getElementById('num').value;

    let square = num;
    square = num * num;

    document.getElementById('result').innerHTML = `Square of  ${num} is ${square} . `;
}