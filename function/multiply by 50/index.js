const mul = () => {

    let num = document.getElementById('num').value;

    let mul = num;
    mul = num * 50;

    document.getElementById('result').innerHTML = `multiply by ${num} * 50  = ${mul}`;
}