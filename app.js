let userScorePara = document.querySelector("#user-score");
let CompScorePara = document.querySelector("#comp-score");
let msgCont = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

userScore =0;
compScore =0;

const updateScores =(userScore,compScore)=>{
    userScorePara.innerHTML =`${userScore}`;
    CompScorePara.innerHTML =`${compScore}`;
};

const drawGame=(userChoice) =>{
    msgCont.style.backgroundColor = "white";
    msgCont.innerText = `IT WAS A DRAW! BOTH CHOSE ${userChoice}`;
};
const getComputerChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};
const compWin = (userChoice,compChoice) =>{
    msgCont.style.backgroundColor ="red";
    msgCont.innerText =`You Lost! ${compChoice} beats ${userChoice}`;
};

const userWin = (userChoice,compChoice) => {
    msgCont.style.backgroundColor ="green";
    msgCont.innerText =`You Won! ${userChoice} beats ${compChoice}` ;
};

const playGame= (userChoice) => {
     const compChoice = getComputerChoice();
     console.log(userChoice,"  ",compChoice);
     if(userChoice === compChoice){
        drawGame(userChoice);
             }
    else if((userChoice==="paper"  && compChoice==="rock") ||
    (userChoice==="scissor"  && compChoice==="paper") ||
    (userChoice==="rock"  && compChoice==="scissor") ){
        userScore++;
        userWin(userChoice,compChoice);
    }
    else{
        compScore++;
        compWin(userChoice,compChoice);
    }
    updateScores(userScore,compScore);
};

choices.forEach((choice) => { 
    choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");
            console.log(userChoice);
             playGame(userChoice);
            });
    });