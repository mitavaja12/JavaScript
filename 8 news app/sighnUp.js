let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];

const userData = (e) => {
    e.preventDefault();

    let data = {
        img: document.getElementById('newsImage').value,
        name: document.getElementById('newsTitle').value 
    };

    signUpData.push(data);
    localStorage.setItem('signUp', JSON.stringify(signUpData));
};

document.getElementById('newsForm').addEventListener('submit', userData);
