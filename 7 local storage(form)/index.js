let form = document.getElementById('form');
let resetBtn = document.getElementById('reset');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    let nameValue = nameInput.value;
    localStorage.setItem('name', nameValue);

    let emailValue = emailInput.value;
    localStorage.setItem('email', emailValue);

    let messageValue = messageInput.value;
    localStorage.setItem('message', messageValue);
});

resetBtn.addEventListener('click', () => {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
