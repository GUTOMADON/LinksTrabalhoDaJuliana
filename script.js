const cuphead = document.querySelector('.cuphead');
const pipe = document.querySelector('.pipe');
const gameInfo = document.querySelector('.game-info');
const timeCounter = document.querySelector('.time-counter');
const gameOverScreen = document.querySelector('.game-over-screen');
const gameOverMessage = document.querySelector('.game-over-message');
const finalTimeCounter = document.querySelector('.final-time-counter');

let loop;
let startTime;

const jump = () => {
    if (!cuphead.classList.contains('jump')) {
        cuphead.classList.add('jump');
        setTimeout(() => {
            cuphead.classList.remove('jump');
        }, 500);
    }
};

const updateGameInfo = () => {
    const currentTime = new Date();
    const duration = Math.round((currentTime - startTime) / 1000); // tempo em segundos
    timeCounter.textContent = `Tempo: ${duration} segundos`;
};

const gameOver = () => {
    clearInterval(loop);
    pipe.style.animation = 'none';
    cuphead.style.animation = 'none';

    const pipePosition = pipe.offsetLeft;
    const cupheadPosition = +window.getComputedStyle(cuphead).bottom.replace('px', '');

    pipe.style.right = `${pipePosition}px`;
    cuphead.style.bottom = `${cupheadPosition}px`;

    cuphead.src = './sad-cuphead.gif';
    cuphead.style.width = '150px';

    gameOverMessage.textContent = 'VOCE MORREU';
    gameOverMessage.style.color = 'red';
    gameOverMessage.style.fontFamily = 'Impact, sans-serif';
    gameOverMessage.style.fontSize = '4rem';
    gameOverMessage.style.textAlign = 'center';

    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000); // tempo em segundos

    finalTimeCounter.textContent = `Você durou ${duration} segundos.`;
    finalTimeCounter.style.color='red';

    gameOverScreen.style.display = 'flex';
};

document.addEventListener('keydown', jump);

startTime = new Date();
loop = setInterval(() => {
    updateGameInfo();

    const pipePosition = pipe.offsetLeft;
    const cupheadPosition = +window.getComputedStyle(cuphead).bottom.replace('px', '');

    const cupheadWidth = 130;
    const pipeWidth = 80;

    if (
        pipePosition <= cupheadWidth &&
        pipePosition + pipeWidth >= 0 &&
        Math.abs(cupheadPosition) < 20 
    ) {
        pipe.style.animationPlayState = 'paused';
        cuphead.style.animationPlayState = 'paused';
        gameOver();
    }
}, 10);
