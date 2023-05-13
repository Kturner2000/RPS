let play = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let draws = 0;
// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors')

const options = document.querySelectorAll('.options');
options.forEach((option) => {
    option.addEventListener("click", function() {
        let userAnswer = this.textContent;
        let compAnswer = play[Math.floor(Math.random() * play.length)];
        return compAnswer;
        compareInputs(userAnswer, compAnswer)
    })
})
function compareInputs(userAnswer,compAnswer ) {
    const currentMatch = `${userAnswer} vs ${compAnswer}`
    if(userAnswer === compAnswer) {
        draws++
        alert(`${currentMatch} is a Tie`)
    }else if ((userAnswer === 'rock' && compAnswer === 'paper') ||
    (userAnswer === 'paper' && compAnswer === 'scissors') || 
    (userAnswer === 'scissors' && compAnswer === 'rock')) {
        losses++
        alert(`${currentMatch} = Computer Wins`)
    } else {
        wins++
    alert(`${currentMatch} = You Win`)
    }
}




for (let i = 0; i < 5; i++) {
   

     
}

