const ans = () =>{
    let num = document.getElementById('num').value;

    if (num % 3 === 0) {
        document.getElementById('result').innerText = "Yes";
    } else {
        document.getElementById('result').innerText = "No";
    }
}