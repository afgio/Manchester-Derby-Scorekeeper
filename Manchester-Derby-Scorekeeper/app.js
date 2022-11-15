const cityButton = document.querySelector('#cityPlus1');
const utdButton = document.querySelector('#utdPlus1');
const cityScore = document.querySelector('#city-score');
const utdScore = document.querySelector('#utd-score');
const resetButton = document.querySelector('#reset');
const select = document.querySelector('select');
const image = document.querySelector('img');
const goalAudio = document.querySelector('#goal');
const victoryAudio = document.querySelector('#victory');

let cityScoreNum = 0;
let utdScoreNum = 0;
let limit = 3;

cityScore.innerText = cityScoreNum.toString();
utdScore.innerText = utdScoreNum.toString();


cityButton.addEventListener('click', () => {
    cityScoreNum += 1;
    cityScore.innerText = cityScoreNum.toString();
    select.disabled = true;
    if (cityScoreNum == limit) {
        cityScore.style.color = 'green';
        utdScore.style.color = 'red';
        cityButton.disabled = true;
        utdButton.disabled = true;
        victoryAudio.play();
    } else { goalAudio.play() }
});

utdButton.addEventListener('click', () => {
    utdScoreNum += 1;
    utdScore.innerText = utdScoreNum.toString();
    select.disabled = true;
    if (utdScoreNum == limit) {
        cityScore.style.color = 'red';
        utdScore.style.color = 'green';
        cityButton.disabled = true;
        utdButton.disabled = true;
        victoryAudio.play();

    } else { goalAudio.play() }
});

resetButton.addEventListener('click', () => {
    cityScoreNum = 0;
    utdScoreNum = 0;
    utdScore.innerText = utdScoreNum.toString();
    cityScore.innerText = cityScoreNum.toString();
    cityScore.style.color = 'black';
    utdScore.style.color = 'black';
    cityButton.disabled = false;
    utdButton.disabled = false;
    select.disabled = false;
});

select.addEventListener('change', (event) => {
    limit = Number(event.target.value);
    select.disabled = true;
});
