const print = () => {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    document.getElementById('result').innerHTML = ` Name : ${name} & age: ${age}`;
}