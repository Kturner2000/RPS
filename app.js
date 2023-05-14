let play = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let draws = 0;
let gamesPlayed = 0;
let maxGames = 5;
// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors')
let playerScore = document.querySelector('.p-count')
let compScore = document.querySelector('.c-count')
let drawScore = document.querySelector('.d-count')


const options = document.querySelectorAll('.options');
options.forEach((option) => {
    option.addEventListener("click", function() {
        if(gamesPlayed < maxGames){
        let userAnswer = this.textContent;
        userAnswer = userAnswer.toLowerCase();
        let compAnswer = play[Math.floor(Math.random() * play.length)];
        compareInputs(userAnswer, compAnswer)
    }
});
});
function compareInputs(userAnswer,compAnswer ) {
    const currentMatch = `${userAnswer} vs ${compAnswer}`
    if(userAnswer === compAnswer) {
        draws++
        gamesPlayed++
        drawScore.textContent = `Draws: ${draws}`
    }else if ((userAnswer === 'rock' && compAnswer === 'Paper') ||
    (userAnswer === 'paper' && compAnswer === 'scissors') || 
    (userAnswer === 'scissors' && compAnswer === 'rock')) {
        losses++
        gamesPlayed++
        compScore.textContent = `Computer: ${losses}`
    } else {
        wins++
        gamesPlayed++
        playerScore.textContent = `Player: ${wins}`

    }
}
     


