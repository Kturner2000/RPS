let play = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let draws = 0;
// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors')

function getCompChoice {
    let play = ['rock', 'paper', 'scissors'];
    let compAnswer = play[Math.floor(Math.random() * play.length)];
    return compAnswer;
}

function game() {
    let playScore = ''
    let compScore = ''
    let moveCompleted = ''
}

function playGame() {
    
}


for (let i = 0; i < 5; i++) {
    let userAnswer = prompt("Rock Paper or Scissors");
    userAnswer = userAnswer.toLowerCase();
    

    if(userAnswer === compAnswer) {
        draws++
        alert(`It's a draw. We're keeping tabs... (${draws})`)
    } else if ((userAnswer === 'rock' && compAnswer === 'paper') ||
    (userAnswer === 'paper' && compAnswer === 'scissors') || 
    (userAnswer === 'scissors' && compAnswer === 'rock')) {
        losses++
        alert(`You have lost ${losses} times ahaha!`)
    } else {
        wins++
    alert(`You have won ${wins} times, luck lol.`)
    }
}

