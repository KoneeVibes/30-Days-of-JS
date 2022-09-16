const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// return a random time between 20(min) and 2000ms(max) for the moles to peep;
function randomTime (min, max){
    return Math.round(Math.random() * (max - min) + min);
}

// handle the random determination of which hole the mole should peep from;
function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    // check to ensure that a mole doesn't repeatedly peep from one hole
    if (hole === lastHole){
        randomHole(holes)
    }

    lastHole = hole;
    return hole;
}

// call the functions and input arguments
function peep(){
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        // to keep the game running is the game-time is not up
        if(!timeUp) peep()
    }, time)
}

// onclick = startGame()
function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    // set the game time, it would be great if I could add a counter on the screen
    setTimeout(() => timeUp = true, 10000)
}


function bonk(e){
    // check for simulated or faked clicks;
    if(!e.isTrusted) return;
    score++
    this.parentNode.classList.remove('up')
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))
