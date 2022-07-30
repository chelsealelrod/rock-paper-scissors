let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


const getCompChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
;}

const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}; 

const winner = (userChoice, compChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}, You win!`;
};

const loser = (userChoice, compChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}, You lost...`;
};

const draw = (userChoice, compChoice) => {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}`;
};



const thisGame = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
       case "rs":
       case "pr":
       case "sp":
        winner(userChoice, compChoice);
        break;
       case "rp":
       case "ps":
       case "sr":
        loser(userChoice, compChoice);
        break;
       case "rr":
       case "pp":
       case "ss":
        draw(userChoice, compChoice);
        break;
    }
};




        

const main = () => {
rock_div.addEventListener('click', function() {
    thisGame("r");
});

paper_div.addEventListener('click', function() {
    thisGame("p");
});

scissors_div.addEventListener('click', function() {
    thisGame("s");
});
};

main();