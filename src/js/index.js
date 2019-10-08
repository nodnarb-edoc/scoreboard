import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { elements } from './views/base';

let homeScore = 0;
let awayScore = 0;
let period = 1;
let intervalID;
let timeLeft;

elements.setTimer.addEventListener('change', () => {
    clearInterval(intervalID);
    elements.displayTimer.textContent = elements.setTimer.value + `:00`;
});

elements.startTimer.addEventListener('click', () => {
    let setMinutes = 60 * elements.setTimer.value,
        display = elements.displayTimer;

    startCounter(setMinutes, display);
});

elements.resumeTimer.addEventListener('click', () => {
    resumeCounter();
});

elements.stopTimer.addEventListener('click', () => {
    stopCounter();
});

elements.homePlus1.addEventListener('click', () => {
    homeScore++;
    elements.homeScoreDisplay.textContent = parseInt(homeScore, 10);
});

elements.homeMinus1.addEventListener('click', () => {
    homeScore--;
    elements.homeScoreDisplay.textContent = parseInt(homeScore, 10);
});

elements.awayPlus1.addEventListener('click', () => {
    awayScore++;
    elements.awayScoreDisplay.textContent = parseInt(awayScore, 10);
});

elements.awayMinus1.addEventListener('click', () => {
    awayScore--;
    elements.awayScoreDisplay.textContent = parseInt(awayScore, 10);
});

elements.periodSet.addEventListener('click', () => {
    period++;
    if (period > 4) {
        period = 1;
    }
    elements.periodDisplay.textContent = parseInt(period, 10);
});

elements.reset.addEventListener('click', () => {
    init();
});

elements.homeBonus.addEventListener('click', () => {
    elements.homeBonusDisplay.classList.toggle('red');
});

elements.awayBonus.addEventListener('click', () => {
    elements.awayBonusDisplay.classList.toggle('red');
});

elements.homePossession.addEventListener('click', () => {
    elements.homePossessionDisplay.classList.toggle('red');
});

elements.awayPossession.addEventListener('click', () => {
    elements.awayPossessionDisplay.classList.toggle('red');
});



const startCounter = (duration, display) => {
    let timer = duration, minutes, seconds;
    intervalID = setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration;
        }
        timeLeft = timer;
        console.log(timeLeft);

    }, 1000)
};

const resumeCounter = () => {
    let timeRemaining = timeLeft,
    display = elements.displayTimer;

    startCounter(timeRemaining, display);
}

const stopCounter = () => {
    clearInterval(intervalID);
}


const init = () => {
    homeScore = 0;
    awayScore = 0;
    period = 1;
    elements.homeScoreDisplay.textContent = homeScore;
    elements.awayScoreDisplay.textContent = awayScore;
    elements.periodDisplay.textContent = period;
    elements.homeBonusDisplay.classList.remove('red');
    elements.awayBonusDisplay.classList.remove('red');
    elements.homePossessionDisplay.classList.remove('red');
    elements.awayPossessionDisplay.classList.remove('red');
    elements.displayTimer.textContent = "00:00";
    elements.homeScoreDisplay.textContent = "00";
    elements.awayScoreDisplay.textContent = "00";
    clearInterval(intervalID);
};