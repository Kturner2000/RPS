function computePlay(compChoice) {
    let choiceNum = Math.floor(Math.random() * 3); // get number 0 - 2
    if (choiceNum === 0) {
        compChoice.Value = "rock";
    } else if(choiceNum === 1) {
        compChoice.Value = "paper";
    } else if(choiceNum === 2) {
        compChoice.Value = "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
} 
