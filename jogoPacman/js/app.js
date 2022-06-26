const pacman = document.querySelector('.pacman');
const fantasma = document.querySelector('.fantasma');

const jump = () =>{
    pacman.classList.add('jump');

    setTimeout(() => {
        pacman.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const fantasmaPosition = fantasma.offsetLeft;
    const pacmanPosition = +window.getComputedStyle(pacman).bottom.replace('px', '');


if (fantasmaPosition <= 120 && fantasmaPosition > 0 && pacmanPosition < 80){
    fantasma.style.animation = 'none';
    fantasma.style.left = `${fantasmaPosition}px`;

    pacman.style.animation = 'none';
    pacman.style.bottom = `${pacmanPosition}px`;

    pacman.src = 'img/game-over.png';
    pacman.style.width = '95px';
    pacman.style.marginLeft = '70px';
}
})

document.addEventListener('keydown', jump);