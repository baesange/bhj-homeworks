const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

const resetGame = () => {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
};

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
        } else {
            lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
        }

        if (parseInt(deadCounter.textContent) >= 10) {
            alert('Вы победили!');
            resetGame();
        } else if (parseInt(lostCounter.textContent) >= 5) {
            alert('Игра окончена! Вы проиграли.');
            resetGame();
        }
    };
}
