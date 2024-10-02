let dice = document.getElementsByClassName('dice')[0];
let rollBtn = document.getElementsByClassName('roll')[0];

let lastNumber = 0;

let randomDice = () => {
    let random = lastNumber;
    let candidates = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < candidates.length; i++) {
        let index = Math.floor(Math.random() * candidates.length);
        random = candidates[index];
        if (random !== lastNumber) {
            break;
        }
    }

    lastNumber = random;
    rollDice(random);
}

let rollDice = (random) => {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
        if (random === 1) {
            dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        } else if (random === 6) {
            dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        } else if (random === 2) {
            dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        } else if (random === 5) {
            dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        } else if (random === 3) {
            dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        } else if (random === 4) {
            dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        }
        dice.style.animation = 'none';
    }, 4050);
}

rollBtn.addEventListener('click', randomDice);
