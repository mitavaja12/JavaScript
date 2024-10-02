const ans = () => {

    let num = document.getElementById('num').value;

    if (num % 2 === 0) {
        document.getElementById('result').innerText = `It's an even number`;
    } else {
        document.getElementById('result').innerText = `It's an odd number`;
    }
        
}

